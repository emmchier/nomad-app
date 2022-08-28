import styled, { css } from 'styled-components';

interface SnackbarProps {
  position: string;
  show: boolean;
}

const positionStyles = (position: string) =>
  ({
    topLeft: css`
      top: 0;
      left: 0;
      max-width: ${({ theme }) => theme.spacing(200)};
    `,
    topRight: css`
      top: 0;
      right: 0;
      max-width: ${({ theme }) => theme.spacing(200)};
    `,
    bottomLeft: css`
      bottom: 0;
      left: 0;
      max-width: ${({ theme }) => theme.spacing(200)};
    `,
    bottomRight: css`
      bottom: 0;
      right: 0;
      max-width: ${({ theme }) => theme.spacing(200)};
    `,
    bottomFull: css`
      bottom: 0;
      width: 100% !important;
      margin: 0 !important;
      border-radius: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      background-color: ${({ theme }) => theme.color.black} !important;

      p {
        padding: ${({ theme }) => theme.spacing(3)} !important;
        color: ${({ theme }) => theme.color.white} !important;
      }

      a {
        color: ${({ theme }) => theme.color.white} !important;
        text-decoration: underline;
      }

      svg {
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(11%) hue-rotate(331deg)
          brightness(101%) contrast(101%) !important;
      }

      button {
        transform: translateX(-5px);

        &:hover {
          svg {
            filter: brightness(0) saturate(100%) invert(0%) sepia(59%) saturate(15%)
              hue-rotate(272deg) brightness(86%) contrast(103%) !important;
          }
        }
      }
    `,
  }[position]);

export const Content = styled.div<SnackbarProps>`
  ${({ show }) =>
    !show
      ? css`
          display: none;
          opacity: 0;
          transition: all 0.2s ease-in-out;
          z-index: 0 !important;
          transform: translateY(20px);
        `
      : css`
          display: block;
          opacity: 1;
          transition: all 0.2s ease-in-out;
          z-index: 99999 !important;
          transform: translateY(0);
        `};
  ${({ position }) => positionStyles(position)};
  transition: all 0.2s ease-in-out;
  position: fixed;
  margin: ${({ theme }) => theme.spacing(10)};
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => `padding: ${theme.spacing(2)} 0 ${theme.spacing(2)} ${theme.spacing(4)}`};
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.border.radius.main};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.disabled};

  p {
    margin-right: ${({ theme }) => theme.spacing(10)};
    font-size: ${({ theme }) => theme.font.body[3]};
  }

  button {
    border-radius: 50px;
    margin-right: ${({ theme }) => theme.spacing(1)};
    svg {
      height: 14px;
      width: 11px;
      margin: 1px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.color.grey.blur};

      svg {
        filter: brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(1%) hue-rotate(36deg)
          brightness(93%) contrast(95%);
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 0;
    width: 100% !important;
    margin: 0 !important;
    border-radius: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background-color: ${({ theme }) => theme.color.black} !important;

    p {
      padding: ${({ theme }) => theme.spacing(3)} !important;
      color: ${({ theme }) => theme.color.white} !important;
    }

    a {
      color: ${({ theme }) => theme.color.white} !important;
      text-decoration: underline;
    }

    svg {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(11%) hue-rotate(331deg)
        brightness(101%) contrast(101%) !important;
    }

    button {
      transform: translateX(-5px);

      &:hover {
        svg {
          filter: brightness(0) saturate(100%) invert(0%) sepia(59%) saturate(15%)
            hue-rotate(272deg) brightness(86%) contrast(103%) !important;
        }
      }
    }
  }
`;
