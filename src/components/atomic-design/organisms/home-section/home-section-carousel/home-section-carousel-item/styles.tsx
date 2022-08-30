import styled from 'styled-components';

export const Content = styled.div`
  max-width: ${({ theme }) => theme.spacing(30)};
  margin-right: ${({ theme }) => theme.spacing(20)};

  p:nth-child(1) {
    font-size: ${({ theme }) => theme.spacing(5)};
  }

  p:nth-child(2) {
    max-width: ${({ theme }) => theme.spacing(20)};
    padding: ${({ theme }) => theme.spacing(2)} 0 ${({ theme }) => theme.spacing(5)};
  }
`;
