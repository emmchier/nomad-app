import type { GetStaticProps, NextPage } from 'next';
import { baseDevUrl } from '../../config';
import axios from 'axios';

import { Box, Container } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';
import { PageTypes } from '../interfaces';
import Button from '../components/atomic-design/atoms/button';
import { useRouter } from 'next/router';
import ErrorPage from './404';

interface PageProps {
  homeData: PageTypes;
}

const HomePage: NextPage<PageProps> = (/*{ homeData } */) => {
  // const router = useRouter();
  // if (!router.isFallback && !homeData) {
  //   return <ErrorPage />;
  // }

  // const { metaTitle, metaDescription, metaTag, metaKeywords } = homeData;

  return (
    <Page
      title="{metaTitle}"
      description="{metaDescription}"
      keywords="{metaKeywords}"
      tag="{metaTag}"
    >
      <Box as="section" height="100vh" bg="blue.200">
        <Container>Hero</Container>
      </Box>
      <Box as="section" height="100vh" bg="white">
        <Container>
          <Button size="sm" ariaLabel="lalala">
            Small
          </Button>
          <Button size="md" ariaLabel="lalala">
            Medium
          </Button>
          <Button size="lg" ariaLabel="lalala">
            Reservar
          </Button>
        </Container>
      </Box>
    </Page>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const home = await axios.get(`${baseDevUrl}/api/home`).then((res) => res);

//   return {
//     props: {
//       homeData: home.data,
//     },
//   };
// };

export default HomePage;
