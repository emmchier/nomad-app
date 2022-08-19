import styled, { css } from 'styled-components';

interface Props {
  direction?: string;
}

const directionStyles = (direction: string) =>
  ({
    right: css`
      svg {
        transform: rotate(180deg) !important;
      }
    `,
    left: css`
      svg {
        transform: rotate(0) !important;
      }
    `,
    up: css`
      svg {
        transform: rotate(90deg) !important;
      }
    `,
    down: css`
      svg {
        transform: rotate(-90deg) !important;
      }
    `,
  }[direction]);

export const Content = styled.figure<Props>`
  ${({ direction }) => directionStyles(direction as any)};
  margin: 0;
  line-height: auto !important;
`;
