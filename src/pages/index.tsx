import type { GetStaticProps, NextPage } from 'next';
import { baseDevUrl } from '../../config';
import axios from 'axios';

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';
import { City, PageTypes } from '../interfaces';
import { useRouter } from 'next/router';
import ErrorPage from './404';

import {
  BackgroundGrey,
  BannerContainer,
  HomeSection,
  HotelsSection,
  TitleContainer,
  HotelsSectionContent,
} from '../styles/pages/home/home-styles';
import HomeSectionCarousel from '../components/atomic-design/organisms/home-section/home-section-carousel';
import HotelsSectionCarousel from '../components/atomic-design/organisms/hotels-section/hotels-section-carousel';

interface PageProps {
  homeData: PageTypes;
  hotelData: any;
}

const HomePage: NextPage<PageProps> = ({ homeData, hotelData }) => {
  const router = useRouter();
  if (!router.isFallback && !homeData) {
    return <ErrorPage />;
  }

  const { metaTitle, metaDescription, metaTag, metaKeywords, sections } = homeData;

  const homeSection = sections?.find((section) => section.slug === 'hero');
  const bannerSection = sections?.find((section) => section.slug === 'banner');
  const hotelsSection = sections?.find((section) => section.slug === 'hotels');

  const currentCity = hotelData?.cities
    ?.map((city: City) => city)
    .find((city: City) => city.name === 'Arequipa');

  const bannerTitle = bannerSection?.title as unknown as string[];

  const getFormatedBanner = () =>
    bannerTitle?.map((text: string) =>
      text === 'aventuras locales' ? <span key={text}>{text}</span> : text
    );

  return (
    <Page title={metaTitle} description={metaDescription} keywords={metaKeywords} tag={metaTag}>
      <HomeSection>
        <TitleContainer>
          <Container>
            <Heading as="h2">{homeSection?.title}</Heading>
          </Container>
        </TitleContainer>
        <HomeSectionCarousel items={homeSection?.experiences} />
      </HomeSection>

      <Box as="section" bg="white">
        <Container display="flex" height="110vh" alignItems="center" justifyContent="center">
          <BannerContainer>
            <Heading variant="h1" as="h3" fontWeight="light" fontSize="52px">
              {getFormatedBanner()}
            </Heading>
          </BannerContainer>
        </Container>
      </Box>

      <HotelsSection>
        <BackgroundGrey />
        <HotelsSectionContent>
          <Container>
            <Heading as="h1" variant="h5" fontSize="48px" fontWeight="extrabold">
              {hotelsSection?.title}
            </Heading>
            <Text margin="25px 0 30px" maxWidth="40%">
              {hotelsSection?.description}
            </Text>
          </Container>
          <HotelsSectionCarousel data={currentCity} />
        </HotelsSectionContent>
      </HotelsSection>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const home = await axios.get(`${baseDevUrl}/api/home`).then((res) => res);
  const hotel = await axios.get(`${baseDevUrl}/api/hotels/availability`).then((res) => res);

  return {
    props: {
      homeData: home.data,
      hotelData: hotel.data,
    },
  };
};

export default HomePage;
