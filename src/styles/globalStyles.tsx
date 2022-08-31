import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gibson';
    font-style: normal;
    font-weight: 300;
    src: url('./fonts/gibson/Gibson-Regular.ttf');
   }

  @font-face {
    font-family: 'JosefinSlab';
    font-style: normal;
    font-weight: 300;
    src: url('./fonts/josefin-slab/JosefinSlab-regular.ttf');
   }

  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Gibson', sans-serif !important;
    /* font-family: 'Caveat', cursive !important; */
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

  .chakra-container {
    padding-left: ${({ theme }) => theme.spacing(7)} !important;
    padding-right: ${({ theme }) => theme.spacing(7)} !important;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
