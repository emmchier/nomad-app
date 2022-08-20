import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family.raleway};
    font-size: ${({ theme }) => theme.font.body[2].desk.size};
    line-height: ${({ theme }) => theme.font.body[2].desk.lineHeight};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
  * {
    text-decoration: none;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  p {
    color: ${({ theme }) => theme.color.black};
  }
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.body[2].desk.size};
    line-height: ${({ theme }) => theme.font.body[2].desk.lineHeight};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
