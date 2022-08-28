import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Content } from './styles';
import Image from 'next/image';
import { slugify } from '../../../../utils';

interface CarouselI {
  images?: string[];
  spaceBetween?: number;
  effect?: 'fade' | 'slide' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
  navigation?: boolean;
  centeredSlides?: boolean;
  autoplay?: { delay: number; disableOnInteraction: boolean };
  pagination?: {
    clickable: boolean;
  };
}

const Carousel: FC<CarouselI> = ({
  images = [],
  spaceBetween = 30,
  effect = 'fade',
  navigation = true,
  centeredSlides = true,
  autoplay = {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination = {
    clickable: true,
  },
}) => {
  return (
    <Content>
      <Swiper
        spaceBetween={spaceBetween}
        effect={effect}
        navigation={navigation}
        centeredSlides={centeredSlides}
        autoplay={autoplay}
        pagination={pagination}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
      >
        {images?.map((img: string) => (
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

export default Carousel;
