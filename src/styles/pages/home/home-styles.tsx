import styled from 'styled-components';

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
`;

export const BannerSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    height: 90vh;
  }
`;

export const TitleContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;

  h2 {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.spacing(23)};
    font-weight: 900;
    line-height: ${({ theme }) => theme.spacing(25)};
    max-width: ${({ theme }) => theme.spacing(110)};
    position: relative;
    z-index: 99;

    @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
      font-size: ${({ theme }) => theme.spacing(20)};
      line-height: ${({ theme }) => theme.spacing(20)};
      max-width: ${({ theme }) => theme.spacing(95)};
    }

    @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.spacing(16)};
      max-width: 100%;
    }
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;
  text-align: center;
  max-width: 70%;

  h3 {
    font-weight: 200;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.spacing(8)};
      line-height: ${({ theme }) => theme.spacing(12)};
      font-weight: 300;
    }

    span {
      background: ${({ theme }) => theme.color.primary.main};
      color: ${({ theme }) => theme.color.white};
      padding: 2px ${({ theme }) => theme.spacing(2)};
      margin: 0 ${({ theme }) => theme.spacing(3)};
      line-height: ${({ theme }) => theme.spacing(20)};
      font-weight: 900;

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
        line-height: ${({ theme }) => theme.spacing(15)};
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100% !important;
  }
`;

export const HotelsSection = styled.section`
  width: 100%;
  height: 110vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white};
  padding-bottom: ${({ theme }) => theme.spacing(35)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: 100%;
    padding-bottom: ${({ theme }) => theme.spacing(30)};
  }
`;

export const BackgroundGrey = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.grey.blur};
  width: 88%;
  height: 105vh;
  margin-right: ${({ theme }) => theme.spacing(40)};
  border-top-right-radius: ${({ theme }) => theme.border.radius.main};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.main};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: ${({ theme }) => theme.border.radius.main};
    height: 95%;
    width: 100%;
  }
`;

export const SectionHeader = styled.div`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    p {
      max-width: 100% !important;
    }
  }
`;

export const HotelsSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  margin: ${({ theme }) => theme.spacing(40)} 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(15)};
    margin-bottom: 0;
  }
`;
