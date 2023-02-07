import { FC } from 'react';

import { IOperation } from '../../context/user';
import { Box, Typography } from '../../elements';
import useUser from '../../hooks/use-user';

const OperationItem: FC<IOperation> = ({ type, amount }) => (
  <Box
    p="M"
    mb="M"
    display="flex"
    border="1px solid #aaa"
    justifyContent="space-between"
  >
    <Typography>{type}</Typography>
    <Typography ml="XXL">{amount} AKZ</Typography>
  </Box>
);

const Operations: FC = () => {
  const { user } = useUser();

  return (
    <Box display="flex">
      <Box>
        Rendimentos
        {(user?.incomes ?? []).map((income, index) => (
          <OperationItem key={index} {...income} />
        ))}
      </Box>
      <Box ml="XXXL">
        Custos
        {(user?.costs ?? []).map((cost, index) => (
          <OperationItem key={index} {...cost} />
        ))}
      </Box>
    </Box>
  );
};

export default Operations;
