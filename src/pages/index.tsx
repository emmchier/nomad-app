import type { GetStaticProps, NextPage } from 'next';
import { baseDevUrl } from '../../config';
import axios from 'axios';

import { Box, Container } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';
import { PageTypes } from '../interfaces';

interface PageProps {
  homeData: PageTypes;
}

const HomePage: NextPage<PageProps> = ({ homeData }) => {
  const { metaTitle, metaDescription, metaTag, metaKeywords, sections, banner } = homeData;
  // console.log(sections);

  return (
    <Page title={metaTitle} description={metaDescription} keywords={metaKeywords} tag={metaTag}>
      <Box as="section" height="100vh" bg="blue.200">
        <Container>Hero</Container>
      </Box>
      <Box as="section" height="100vh" bg="white">
        <Container>Hotels</Container>
      </Box>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const home = await axios.get(`${baseDevUrl}/api/home`).then((res) => res);

  return {
    props: {
      homeData: home.data,
    },
  };
};

export default HomePage;
