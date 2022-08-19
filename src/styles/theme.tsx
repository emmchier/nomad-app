import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { buttonStyles } from '../components/atomic-design/atoms/button/ButtonStyles';

export const theme = {
  color: {
    primary: {
      light: '#52CEC2',
      dark: '#10B0A1',
    },
    secondary: {
      light: '#E0BDE9',
      dark: '#B23C79',
    },
    tertiary: {
      light: '#F4ABB3',
      dark: '#F48692',
    },
    greyText: {
      light: '#565353',
      dark: '#353535',
    },
    disabled: '#E2E2E2',
    white: '#FFFFFF',
    black: '#272727',
    error: '#FF0000',
  },
  font: {
    family: {
      raleway: "'Raleway', sans-serif;",
      quicksand: "'Quicksand', sans-serif;",
      yesteryear: "'Yesteryear', cursive;",
    },
    title: {
      heading1: {
        desk: {
          size: '3rem', // 48px
          lineHeight: '3.75rem', // 60px
        },
        mob: {
          size: '2rem', // 32px
          lineHeight: '3.125rem', // 50px
        },
      },
      heading2: {
        desk: {
          size: '2rem', // 32px
          lineHeight: '3.125rem', // 50px
        },
        mob: {
          size: '1.5rem', // 24px
          lineHeight: '2rem', // 32px
        },
      },
      heading3: {
        desk: {
          size: '1.5rem', // 24px
          lineHeight: '2.5rem', // 40px
        },
        mob: {
          size: '1.25rem', // 20px
          lineHeight: '2rem', // 32px
        },
      },
    },
    text: {
      body1: {
        desk: {
          size: '1.125rem', // 18px
          lineHeight: '1.75rem', // 28px
        },
        mob: {
          size: '1rem', // 16px
          lineHeight: '1.625rem', // 26px
        },
      },
      body2: {
        desk: {
          size: '1rem', // 16px
          lineHeight: '1.625rem', // 26px
        },
        mob: {
          size: '1rem', // 16px
          lineHeight: '1.5rem', // 24px
        },
      },
      body3: {
        desk: {
          size: '0.875rem', // 14px
          lineHeight: '1.25rem', // 20px
        },
        mob: {
          size: '0.875rem', // 14px
          lineHeight: '1.125rem', // 18px
        },
      },
    },
    weight: {
      light: 100,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
  },
  spacing: (pixel: number) => `${0.25 * pixel}rem`,
  shadow: {
    main: `0px 2.25018px 7.50059px rgba(0, 0, 0, 0.08)`,
  },
  transition: {
    main: '0.1s ease-in-out',
  },
  border: {
    radius: {
      main: '0.444rem', // 8px
      card: {
        small: '1.125rem', // 18px
        large: '2.938rem', // 47px
      },
      full: '50px',
    },
  },
  breakpoints: {
    smallMobile: 'max-width: 479px',
    mobile: 'max-width: 767px',
    tablet: 'max-width: 991px',
    tabletLandscape: 'max-width: 1199px',
    desktop: 'max-width: 1599px',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const customTheme = extendTheme({
  config,
  colors: {
    primary: {
      main: '#3D63A9',
    },
  },
  shadows: {
    main: ' 0px 12px 32px rgba(0, 0, 0, 0.25);',
  },
  fonts: {
    body: 'Raleway, sans-serif',
    quicksand: 'Quicksand, sans-serif',
    yesteryear: 'Yesteryear, cursive',
  },
  components: {
    Button: buttonStyles,
    Container: {
      variants: {
        md: {
          maxW: '1300px',
        },
      },
      defaultProps: {
        variant: 'md',
      },
    },
  },
});
