import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import { forwardRef } from 'react';
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  system,
  typography,
  variant,
} from 'styled-system';

import { InputProps } from './input.types';

const Input = forwardRef(({ hover, active, ...props }: InputProps, ref) => {
  const InputElement = styled.input(
    css({
      ...(hover && { transition: 'all 250ms ease-in-out', ':hover': hover }),
      ...(active && { transition: 'all 250ms ease-in-out', ':active': active }),
    }),
    variant({
      prop: 'effect',
      scale: 'effects',
    }),
    compose(
      grid,
      space,
      color,
      border,
      layout,
      flexbox,
      position,
      boxShadow,
      typography,
      background,
      system({
        cursor: true,
        filter: true,
        rowGap: true,
        columnGap: true,
        transform: true,
        transition: true,
        backdropFilter: true,
        borderCollapse: true,
      })
    )
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <InputElement {...props} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
