import type { GetStaticProps, NextPage } from 'next';
import { baseDevUrl } from '../../config';
import axios from 'axios';

import { Box, Container, useToast } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';
import { PageTypes } from '../interfaces';
import Button from '../components/atomic-design/atoms/button';
import { useRouter } from 'next/router';
import ErrorPage from './404';
import Carousel from '../components/atomic-design/organisms/carousel';

interface PageProps {
  homeData: PageTypes;
}

const HomePage: NextPage<PageProps> = ({ homeData }) => {
  const router = useRouter();
  if (!router.isFallback && !homeData) {
    return <ErrorPage />;
  }

  const { metaTitle, metaDescription, metaTag, metaKeywords, sections } = homeData;

  const homeSection = sections?.find((section) => section.slug === 'hero');
  console.log(homeSection?.experiences);

  return (
    <Page title={metaTitle} description={metaDescription} keywords={metaKeywords} tag={metaTag}>
      <Box as="section" height="100vh">
        <Carousel images={homeSection?.experiences} />
      </Box>
      <Box as="section" height="100vh" bg="white"></Box>
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
