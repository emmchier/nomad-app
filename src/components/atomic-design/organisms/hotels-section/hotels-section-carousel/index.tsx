import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Navigation, Pagination } from 'swiper';

import HotelsSectionCarouselItem from './hotels-section-carousel-item';
import { Content } from './styles';
import { City, Hotel } from '../../../../../interfaces';
import { useRouter } from 'next/router';

interface HotelsSectionCarouselI {
  data: City;
}

const HotelsSectionCarousel: FC<HotelsSectionCarouselI> = ({ data }) => {
  const { name, hotels } = data;

  const router = useRouter();
  const { locale } = router;

  return (
    <Content>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        pagination={false}
        keyboard={{
          enabled: true,
        }}
        modules={[Pagination, Navigation, Keyboard]}
        className="hotelsCarousel"
        watchSlidesProgress={true}
      >
        {hotels?.map((hotel: Hotel, index: number) =>
          hotel.available === true ? (
            <SwiperSlide key={index}>
              <HotelsSectionCarouselItem
                city={name}
                name={hotel.name}
                description={hotel.description}
                services={hotel.services}
              />
            </SwiperSlide>
          ) : (
            <p>{locale === 'es' ? 'Hotel no disponible' : 'Not available hotel'}</p>
          )
        )}
      </Swiper>
    </Content>
  );
};

export default HotelsSectionCarousel;
