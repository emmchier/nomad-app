import styled from 'styled-components';

export const FooterContent = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.white};

  ul:nth-child(1) {
    li {
      padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};
    }
  }
`;
