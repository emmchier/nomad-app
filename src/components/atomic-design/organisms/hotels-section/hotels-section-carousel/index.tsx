import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Navigation, Pagination } from 'swiper';

import HotelsSectionCarouselItem from './hotels-section-carousel-item';
import { Content } from './styles';
import { City, Hotel } from '../../../../../interfaces';

interface HotelsSectionCarouselI {
  data: City;
}

const HotelsSectionCarousel: FC<HotelsSectionCarouselI> = ({ data }) => {
  const { name, hotels } = data;

  return (
    <Content>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        pagination={false}
        navigation={true}
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
            <p>Este hotel no está disponible</p>
          )
        )}
      </Swiper>
    </Content>
  );
};

export default HotelsSectionCarousel;
