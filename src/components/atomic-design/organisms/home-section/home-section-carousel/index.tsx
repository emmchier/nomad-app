import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { slugify } from '../../../../../utils';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Content } from './styles';

interface HomeSectionCarouselI {
  items?: string[];
}

const HomeSectionCarousel: FC<HomeSectionCarouselI> = ({ items }) => {
  const paginationText = (slideIndex: number) =>
    items?.find((_, index: number) => index === slideIndex);

  return (
    <Content>
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
        className="homeCarousel"
      >
        {items?.map((img: string) => (
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
    </Content>
  );
};

export default HomeSectionCarousel;
