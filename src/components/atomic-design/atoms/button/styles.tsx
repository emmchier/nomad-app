import styled, { css } from 'styled-components';

interface ButtonI {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  variant: 'contained' | 'outlined' | 'text' | 'icon';
  iconRight?: boolean;
  iconLeft?: boolean;
  width?: string;
  height?: string;
}

const variantStyles = (variant: string) =>
  ({
    contained: css`
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.primary.main};
      border: 1px solid ${({ theme }) => theme.color.primary.main};
      &:hover {
        background: ${({ theme }) => theme.color.primary.dark};
        border: 1px solid ${({ theme }) => theme.color.primary.dark};
      }
      &:active {
        background: ${({ theme }) => theme.color.primary.press};
        border: 1px solid ${({ theme }) => theme.color.primary.press};
      }
      &:disabled {
        border: 1px solid ${({ theme }) => theme.color.disabled};
        background: ${({ theme }) => theme.color.disabled};
        color: ${({ theme }) => theme.color.grey.main};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          background: ${({ theme }) => theme.color.primary.main};
          border: 1px solid ${({ theme }) => theme.color.primary.main};
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          background: ${({ theme }) => theme.color.primary.main};
          border: 1px solid ${({ theme }) => theme.color.primary.main};
        }
      }
    `,
    outlined: css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.color.primary.main};
      &:hover {
        background: ${({ theme }) => theme.color.grey.blur};
      }
      &:active {
        border: 1px solid ${({ theme }) => theme.color.primary.dark};
        background: ${({ theme }) => theme.color.primary.dark};
      }
      &:disabled {
        opacity: 0.5;
        background: transparent;
        color: ${({ theme }) => theme.color.grey.main};
        border: 1px solid ${({ theme }) => theme.color.grey.main};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active {
          border: 2px solid ${({ theme }) => theme.color.primary.main};
          background: transparent;
          color: ${({ theme }) => theme.color.primary.main};
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:active {
          border: 2px solid ${({ theme }) => theme.color.primary.main};
          background: transparent;
          color: ${({ theme }) => theme.color.primary.main};
        }
      }
    `,
    text: css`
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.font.weight.medium};

      svg {
        filter: brightness(0) saturate(100%) invert(8%) sepia(32%) saturate(0%) hue-rotate(190deg)
          brightness(98%) contrast(80%);
      }

      &:hover {
        background: ${({ theme }) => theme.color.grey.blur};
      }

      &:active {
        color: ${({ theme }) => theme.color.black};
      }

      &:disabled {
        color: ${({ theme }) => theme.color.disabled};

        svg {
          filter: brightness(0) saturate(100%) invert(99%) sepia(16%) saturate(89%)
            hue-rotate(261deg) brightness(112%) contrast(77%);
        }
      }
    `,
    icon: css`
      background: transparent;
      border: 2px solid transparent;
      padding: 3px;
      border-radius: ${({ theme }) => theme.border.radius.full};
      transition: ${({ theme }) => theme.transition.main};

      &:hover {
        opacity: 0.8;
        svg {
          filter: brightness(0) saturate(100%) invert(41%) sepia(15%) saturate(2224%)
            hue-rotate(180deg) brightness(84%) contrast(88%) !important;
        }
      }

      &:disabled {
        svg {
          filter: brightness(0) saturate(100%) invert(99%) sepia(16%) saturate(89%)
            hue-rotate(261deg) brightness(112%) contrast(77%);
        }
      }
    `,
  }[variant]);

export const Container = styled.button<ButtonI>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(5)}`};
  font-size: ${({ theme }) => theme.font.body[2].desk.size};
  line-height: ${({ theme }) => theme.font.body[2].desk.lineHeight};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ${({ variant }) => variantStyles(variant)};
  transition: ${({ theme }) => theme.transition.main};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  object-fit: contain;

  &:hover,
  &:active {
    transition: ${({ theme }) => theme.transition.main};

    svg {
      filter: brightness(0) invert(1);
    }
  }
  &:disabled {
    cursor: inherit;
    pointer-events: none;

    svg {
      filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%) hue-rotate(221deg)
        brightness(91%) contrast(107%);
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.body[3].mob.size};
    line-height: ${({ theme }) => theme.font.body[3].mob.lineHeight};
  }
`;

export const IconLeft = styled.span`
  margin-right: ${({ theme }) => theme.spacing(3)};
`;

export const IconRight = styled.span`
  margin-left: ${({ theme }) => theme.spacing(3)};
  transform: translateY(2px);
`;
