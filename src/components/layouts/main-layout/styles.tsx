import styled from 'styled-components';

export const MainContent = styled.main`
  position: relative;
  width: 100%;
`;

export const ScrolleableContent = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.main};
  margin-bottom: ${({ theme }) => theme.spacing(35)};
  position: relative;
  z-index: 1;
`;
