import { NextPage } from 'next';
import Router from 'next/router';

import { Typography } from '../elements';

const NotFoundPage: NextPage = () => (
  <Typography as="h1" onClick={() => Router.push('/')}>
    404 - Not Found
  </Typography>
);

export default NotFoundPage;
