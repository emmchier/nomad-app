import styled from 'styled-components';

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const TitleContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 9;

  h2 {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.spacing(23)};
    font-weight: 900;
    line-height: ${({ theme }) => theme.spacing(25)};
    max-width: ${({ theme }) => theme.spacing(110)};
    z-index: 9;
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

  h2 {
    font-weight: 100;
  }

  span {
    background: ${({ theme }) => theme.color.primary.main};
    color: ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.spacing(2)};
    margin: 0 ${({ theme }) => theme.spacing(3)};
    line-height: 98px;
    font-weight: 900;
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
`;

export const BackgroundGrey = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.grey.blur};
  width: 88%;
  height: 105vh;
  margin-right: ${({ theme }) => theme.spacing(40)};
  border-top-right-radius: ${({ theme }) => theme.border.radius.main};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.main};
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
`;
