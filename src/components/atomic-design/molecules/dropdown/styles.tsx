import styled, { css } from 'styled-components';

interface PropTypes {
  show?: boolean;
  fade?: boolean;
}

export const Container = styled.div`
  margin: 0 ${({ theme }) => theme.spacing(4)};
`;

export const Content = styled.div`
  width: 100px;
  position: absolute;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '.';
    visibility: collapse;
  }
`;

export const DropdownItem = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 0;
  transform: translateY(23px);
`;

export const DropdownMenu = styled.div<PropTypes>`
  position: absolute;
  transform: translateY(70px);
  min-width: 160px;
  display: none;
  ${({ show }) =>
    show
      ? css`
          height: auto;
          display: inherit;
        `
      : css`
          height: 0;
        `};
  animation: ${({ fade }) => (fade ? css`fadeIn .1s linear` : css`fadeOut .1s linear`)};
  cursor: pointer;
  z-index: 999;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.main};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.main};
  top: 0;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const DropdownContent = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};

  ul {
    li {
      padding: ${({ theme }) => theme.spacing(2)};
      text-align: center;
    }
  }
`;

export const DropdownContainer = styled.div`
  cursor: pointer;
`;
