import styled from 'styled-components';

export const Content = styled.div`
  ul {
    padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(3)} 0;

    li {
      border-bottom: none !important;
    }
  }
`;
