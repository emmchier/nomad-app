import { theme } from '@chakra-ui/react';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-top: 1px solid ${({ theme }) => theme.color.grey.blur};
  position: relative;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(6)}
    ${({ theme }) => theme.spacing(6)} 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(10)} 0;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 230px;
  min-width: 230px;
  overflow: hidden;

  span {
    img {
      height: 230px !important;
      width: 230px !important;
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

export const InfoContainer = styled.div`
  height: 230px;
  display: flex;

  span {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: 230px !important;
    padding-left: ${({ theme }) => theme.spacing(6)};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      height: auto !important;
      padding-left: 0;
      padding-top: ${({ theme }) => theme.spacing(3)};
    }
  }

  b {
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.weight.condensed};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: auto !important;

    button {
      margin-top: ${({ theme }) => theme.spacing(4)};
      width: 100%;
    }
  }
`;

export const ItemField = styled.div`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing(3)} 0;
  }
`;
