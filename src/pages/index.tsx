import type { GetStaticProps, NextPage } from 'next';
import { baseDevUrl } from '../../config';
import axios from 'axios';

import { Container, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import Page from '../components/atomic-design/atoms/page';
import { City, Hotel, PageTypes } from '../interfaces';
import { useRouter } from 'next/router';
import ErrorPage from './404';

import HomeSectionCarousel from '../components/atomic-design/organisms/home-section/home-section-carousel';
import HotelsSectionCarousel from '../components/atomic-design/organisms/hotels-section/hotels-section-carousel';
import HotelsSectionCarouselItem from '../components/atomic-design/organisms/hotels-section/hotels-section-carousel/hotels-section-carousel-item';

import {
  BackgroundGrey,
  BannerContainer,
  HomeSection,
  HotelsSection,
  BannerSection,
  TitleContainer,
  HotelsSectionContent,
  SectionHeader,
} from '../styles/pages/home/home-styles';

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
    bannerTitle?.map((text: string, index: number) =>
      text === 'aventuras locales' ? <span key={index}>{text}</span> : text
    );

  const [isMobile] = useMediaQuery(['(max-width: 767px)', '(display-mode: browser)']);

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

      <BannerSection>
        <BannerContainer>
          <Container bg="white">
            <Heading variant="h1" as="h3" fontWeight="light" fontSize="52px">
              {getFormatedBanner()}
            </Heading>
          </Container>
        </BannerContainer>
      </BannerSection>

      <HotelsSection>
        <BackgroundGrey />
        <HotelsSectionContent>
          <Container>
            <SectionHeader>
              <Heading as="h1" variant="h5" fontSize="48px" fontWeight="extrabold">
                {hotelsSection?.title}
              </Heading>
              <Text margin="25px 0 30px" maxWidth="40%">
                {hotelsSection?.description}
              </Text>
            </SectionHeader>
          </Container>
          {isMobile ? (
            currentCity?.hotels?.map((hotel: Hotel, index: number) =>
              hotel.available === true ? (
                <Container as="ul">
                  <li key={index}>
                    <HotelsSectionCarouselItem
                      city={currentCity.name}
                      name={hotel.name}
                      description={hotel.description}
                      services={hotel.services}
                    />
                  </li>
                </Container>
              ) : (
                <p>Este hotel no está disponible</p>
              )
            )
          ) : (
            <HotelsSectionCarousel data={currentCity} />
          )}
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
