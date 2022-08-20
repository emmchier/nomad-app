import type { NextPage } from 'next';

import { Box, Container } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';

const HomePage: NextPage = () => {
  return (
    <Page title="Sparky App" description="" keywords="" tag="">
      <Box as="section" height="100vh" bg="blue.200">
        <Container>lalalala</Container>
      </Box>
    </Page>
  );
};

export default HomePage;
