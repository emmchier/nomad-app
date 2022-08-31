import styled from 'styled-components';

export const Content = styled.div`
  .homeCarousel {
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 9;

    .swiper {
      width: 100%;
      height: 100vh;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
    }

    .swiper-slide {
      text-align: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-pagination {
      position: absolute;
      left: 0;
      right: 0;
      bottom: ${({ theme }) => theme.spacing(30)};
      width: 100%;
      padding-inline-start: 1rem;
      margin-inline-start: auto;
      margin-inline-end: auto;
      max-width: 1240px;
      padding-inline-start: 0;
      padding-inline-end: 0;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: flex-start;

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        padding-inline-start: 2rem;
        padding-inline-end: 2rem;
      }
    }

    .swiper-pagination-bullet {
      border-radius: 0;
      width: auto;
      height: 30px;
      text-align: start;
      line-height: 30px;
      font-size: ${({ theme }) => theme.font.body[2]};
      opacity: 0.5;
      max-width: ${({ theme }) => theme.spacing(30)};
      background: transparent;
      margin-right: ${({ theme }) => theme.spacing(10)} !important;

      &:hover {
        opacity: 0.8;
      }

      p:nth-child(1) {
        font-weight: ${({ theme }) => theme.font.weight.regular};

        @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
          font-weight: ${({ theme }) => theme.font.weight.condensed};
          font-size: ${({ theme }) => theme.font.title[2].mob.size} !important;
          padding: ${({ theme }) => theme.spacing(5)};
        }
      }

      p:nth-child(2) {
        @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
          display: none;
        }
      }

      p {
        color: ${({ theme }) => theme.color.white};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin-right: ${({ theme }) => theme.spacing(5)} !important;
      }
    }

    .swiper-pagination-bullet-active {
      opacity: 1;

      p {
        color: ${({ theme }) => theme.color.white};
        font-weight: ${({ theme }) => theme.font.weight.condensed};
      }
    }
  }
`;
