import styled from 'styled-components';

export const Header = styled.header`
  padding: ${({ theme }) => theme.spacing(6)} 0;
  position: fixed;
  top: 0;
  height: auto;
  width: 100%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(14)} 0;
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
  position: relative;
  background: ${({ theme }) => theme.color.white};

  button {
    margin-left: ${({ theme }) => theme.spacing(2)};
    object-fit: scale-down;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    box-shadow: none;
    background: transparent;

    ul,
    hr,
    span button {
      display: none;
    }

    button {
      margin-left: ${({ theme }) => theme.spacing(3)} !important;
    }

    button:nth-child(1) {
      padding: 0 ${({ theme }) => theme.spacing(4)};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
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
  background: ${({ theme }) => theme.color.white};
  padding: 0 ${({ theme }) => theme.spacing(5)};
  cursor: pointer;
  height: ${({ theme }) => theme.spacing(15)};

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    svg {
      width: ${({ theme }) => theme.spacing(20)};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ theme }) => theme.spacing(11.5)};
    border-radius: ${({ theme }) => theme.border.radius.sm};
    box-shadow: none;

    svg {
      width: ${({ theme }) => theme.spacing(18)} !important;
    }
  }
`;

export const BurguerButton = styled.div`
  display: none;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;
