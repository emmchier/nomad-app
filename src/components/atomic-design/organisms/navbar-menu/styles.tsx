import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  ul {
    width: 100%;

    li {
      width: 100%;
      border-radius: 0;
      border-bottom: 1px solid ${({ theme }) => theme.color.disabled};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      padding: ${({ theme }) => theme.spacing(3)} 0;

      &:last-child {
        padding-bottom: 0;
      }

      a {
        font-weight: ${({ theme }) => theme.font.weight.bold};
      }

      &:hover {
        background: transparent;
      }
    }
  }

  span {
    height: auto;
  }
`;
