import styled from 'styled-components';

export const NavbarActions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: ${({ theme }) => theme.border.radius.main};
  padding: ${({ theme }) => theme.spacing(2)};

  button {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`;
