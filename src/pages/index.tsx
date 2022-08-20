import type { NextPage } from 'next';

import { Box } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';

const HomePage: NextPage = () => {
  return (
    <Page title="Sparky App" description="" keywords="" tag="">
      <Box as="section" height="100vh"></Box>
    </Page>
  );
};

export default HomePage;
