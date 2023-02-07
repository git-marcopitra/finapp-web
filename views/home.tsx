import Link from 'next/link';
import { FC } from 'react';

import { Layout, Logo } from '../components';
import { RoutePaths, RoutesEnum } from '../constants/routes';
import { Box, Typography } from '../elements';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <Box
      bg="background"
      p="XXXL"
      borderRadius="S"
      borderTopRightRadius="0"
      borderTopLeftRadius="0"
    >
      <Logo />
      <Typography as="h1">Home</Typography>
      <Link href={RoutePaths[RoutesEnum.Home]}>Goto To Other Page &rarr; </Link>
    </Box>
  </Layout>
);

export default Home;
