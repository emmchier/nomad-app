import styled from 'styled-components';

export const Content = styled.div`
  .hotelsCarousel {
    width: 100%;

    .swiper {
      width: 100%;
      display: flex;
      align-items: flex-start;
      position: relative;
      z-index: 999;
    }

    .swiper-slide {
      width: auto !important;
      margin-right: ${({ theme }) => theme.spacing(40)} !important;
    }

    .swiper-slide img {
    }
  }
`;
