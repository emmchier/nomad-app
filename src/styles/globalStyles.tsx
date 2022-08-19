import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family.raleway};
    font-size: ${({ theme }) => theme.font.text.body1.desk.size};
    line-height: ${({ theme }) => theme.font.text.body1.desk.lineHeight};
  }
  * {
    text-decoration: none;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  p {
    color: ${({ theme }) => theme.color.greyText.dark};
  }
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.greyText.dark};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
