import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  position: relative;

  ul {
    width: 100%;

    li {
      width: 100%;
      border-radius: 0;
      border-bottom: 1px solid ${({ theme }) => theme.color.disabled};
      padding: ${({ theme }) => theme.spacing(3)} 0;

      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }

      &:hover {
        background: transparent;
      }
    }

    li,
    a {
      font-weight: ${({ theme }) => theme.font.weight.condensed};
      font-size: ${({ theme }) => theme.font.title[2].desk.size} !important;
    }
  }
`;

export const ActionContent = styled.div`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  button {
    width: 100%;

    &:nth-child(1) {
      border-top: 1px solid ${({ theme }) => theme.color.disabled};
      justify-content: flex-start;
      height: auto;
      border-radius: 0;
      padding: ${({ theme }) => theme.spacing(5)} 0 ${({ theme }) => theme.spacing(10)} 0;

      &:hover,
      &:active {
        background: transparent;
        svg {
          filter: brightness(0) saturate(100%);
        }
      }
    }
  }
`;
