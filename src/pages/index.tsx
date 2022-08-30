import type { GetStaticProps, NextPage } from 'next';
import { baseDevUrl } from '../../config';
import axios from 'axios';

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';
import { PageTypes } from '../interfaces';
import { useRouter } from 'next/router';
import ErrorPage from './404';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { HomeSectionContent, TitleContainer } from '../styles/pages/home/home-styles';
import { slugify } from '../utils';

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

  const paginationText = (slideIndex: number) =>
    homeSection?.experiences?.find((_, index: number) => index === slideIndex);

  return (
    <Page title={metaTitle} description={metaDescription} keywords={metaKeywords} tag={metaTag}>
      <Box as="section" height="100vh">
        <HomeSectionContent>
          <TitleContainer>
            <Heading as="h2">{homeSection?.title}</Heading>
          </TitleContainer>
          <Swiper
            effect="fade"
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<div class="${className}">
                  <p>${index + 1}</p>
                  <p>${paginationText(index)}</p>
                </div>`,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
          >
            {homeSection?.experiences?.map((img: string) => (
              <SwiperSlide key={img}>
                <Image
                  src={img ? `/images/${slugify(img)}.png` : ''}
                  alt={img}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  layout="fill"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </HomeSectionContent>
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
