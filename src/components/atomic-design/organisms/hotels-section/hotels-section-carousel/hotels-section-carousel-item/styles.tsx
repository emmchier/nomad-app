import styled, { css } from 'styled-components';

interface BannerI {
  color: string;
  hover: boolean;
}

export const Content = styled.div`
  position: relative;
  border-radius: 8px;
  width: 624px;
  height: 432px;
  border-radius: ${({ theme }) => theme.border.radius.main};
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius.main};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 432px;
  min-width: 624px;
  position: absolute;

  span {
    img {
      height: 432px !important;
      width: 624px !important;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      height: auto !important;
      width: 100% !important;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100% !important;
  }
`;

export const BannerHeader = styled.div`
  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
    width: ${({ theme }) => theme.spacing(3)};
    height: ${({ theme }) => theme.spacing(3)};
    transform: translateY(5px);
  }
`;

export const BannerServices = styled.div`
  svg {
    margin-right: ${({ theme }) => theme.spacing(3)};
  }
`;

export const Banner = styled.div<BannerI>`
  position: absolute;
  z-index: 2;
  ${({ hover, color }) =>
    hover === true
      ? css`
          transition: ${({ theme }) => theme.transition.main};
          background: rgba(43, 43, 43, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        `
      : css`
          transition: ${({ theme }) => theme.transition.main};
          background: ${color};
        `};
  border-radius: ${({ theme }) => theme.border.radius.main};
  padding: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.color.white};
  width: 368px;
  max-width: 368px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  right: -40px;
  bottom: 40px;

  p {
    color: ${({ theme }) => theme.color.white};
  }
`;
