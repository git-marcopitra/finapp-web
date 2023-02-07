import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import { Layout } from '../components';
import Balances from '../components/balances';
import Operations from '../components/operations';
import { Box } from '../elements';
import useUser from '../hooks/use-user';

const Home: FC = () => {
  const { isLogged } = useUser();
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogged) push('/login');
  }, [isLogged]);

  return (
    <Layout pageTitle="Home">
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        <Balances />
        <Operations />
      </Box>
    </Layout>
  );
};

export default Home;
