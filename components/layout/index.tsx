import Head from 'next/head';
import { FC } from 'react';

import { Box } from '../../elements';
import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<LayoutProps> = ({ pageTitle = '', children }) => {
  const title = `${pageTitle} | Template`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Box as="main" flex="1">
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
