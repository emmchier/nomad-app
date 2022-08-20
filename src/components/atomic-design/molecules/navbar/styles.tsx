import styled from 'styled-components';

export const Header = styled.header`
  padding: ${({ theme }) => theme.spacing(6)} 0;
  position: fixed;
  top: 0;
  max-height: ${({ theme }) => theme.spacing(120)};
  width: 100%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    max-height: ${({ theme }) => theme.spacing(100)};
  }
`;

export const NavbarActions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.border.radius.main};
  padding: ${({ theme }) => theme.spacing(2)};

  button {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    box-shadow: none;

    ul,
    hr,
    span button {
      display: none;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    button {
      color: ${({ theme }) => theme.color.primary.main};
      background: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.white};
      margin-left: ${({ theme }) => theme.spacing(2)};
      svg {
        filter: brightness(0) saturate(100%) invert(41%) sepia(15%) saturate(2224%)
          hue-rotate(180deg) brightness(84%) contrast(88%) !important;
      }
      &:hover,
      &:active,
      &:focus {
        background: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.white};
        svg {
          filter: brightness(0) saturate(100%) invert(41%) sepia(15%) saturate(2224%)
            hue-rotate(180deg) brightness(84%) contrast(88%) !important;
        }
      }
    }
  }
`;

export const Brand = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.border.radius.main};
  cursor: pointer;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: none;
  }
`;

export const BurguerButton = styled.div`
  display: none;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;
