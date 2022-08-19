import type { NextPage } from 'next';

import { Box } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';
import CustomButton from '../components/atomic-design/atoms/button';

const HomePage: NextPage = () => {
  return (
    <Page title="Sparky App" description="" keywords="" tag="">
      <Box as="section" height="100vh">
        <CustomButton ariaLabel="lala">Reservar</CustomButton>
      </Box>
    </Page>
  );
};

export default HomePage;
