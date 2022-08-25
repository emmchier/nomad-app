import styled from 'styled-components';

export const Nav = styled.nav`
  li {
    &:hover {
      background: ${({ theme }) => theme.color.grey.blur};
      transition: ${({ theme }) => theme.transition.main};
      border-radius: ${({ theme }) => theme.border.radius.sm};
    }
  }
`;
