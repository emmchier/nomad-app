import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

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
        modules={[Pagination]}
        className="hotelsCarousel"
      >
        {hotels?.map((hotel: Hotel) =>
          hotel.available === true ? (
            <SwiperSlide key={hotel.name}>
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
