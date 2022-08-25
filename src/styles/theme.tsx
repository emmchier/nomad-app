import { extendTheme, ThemeConfig } from '@chakra-ui/react';

export const theme = {
  color: {
    primary: {
      main: '#3D63A9',
      dark: '#284F96',
      press: '#163877',
    },
    magenta: { main: '#AA2275' },
    grey: {
      main: '#676767',
      blur: '#F4F4F4',
    },
    green: {
      main: '#ADC22F',
      dark: '#879825',
    },
    orange: {
      main: '#FF8429',
    },
    disabled: '#E2E2E2',
    white: '#FFFFFF',
    black: '#2B2B2B',
    success: '#17A3AB',
    error: '#FF0000',
  },
  font: {
    family: {
      raleway: "'Raleway', sans-serif;",
      quicksand: "'Quicksand', sans-serif;",
      yesteryear: "'Yesteryear', cursive;",
    },
    title: {
      1: {
        desk: {
          size: '4.5em', // 72px
          lineHeight: '3.875rem', // 62px
        },
        mob: {
          size: '2rem', // 32px
          lineHeight: '3.125rem', // 50px
        },
      },
      2: {
        desk: {
          size: '2rem', // 32px
          lineHeight: '3.125rem', // 50px
        },
        mob: {
          size: '1.5rem', // 24px
          lineHeight: '2rem', // 32px
        },
      },
      3: {
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
    body: {
      1: {
        desk: {
          size: '1.125rem', // 18px
          lineHeight: '1.75rem', // 28px
        },
        mob: {
          size: '1rem', // 16px
          lineHeight: '1.625rem', // 26px
        },
      },
      2: {
        desk: {
          size: '1rem', // 16px
          lineHeight: '1.625rem', // 26px
        },
        mob: {
          size: '1rem', // 16px
          lineHeight: '1.5rem', // 24px
        },
      },
      3: {
        desk: {
          size: '0.9375em', // 15px
          lineHeight: '1.5625em', // 25px
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
      condensed: 800,
      black: 900,
    },
  },
  spacing: (pixel: number) => `${0.25 * pixel}rem`,
  shadow: {
    main: ' 0px 12px 32px rgba(0, 0, 0, 0.25)',
  },
  transition: {
    main: 'all 0.2s ease-in',
  },
  border: {
    radius: {
      sm: '0.444rem', // 8px
      main: '1rem', // 16px
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
  sizes: {
    body: '15px',
  },
  colors: {
    primary: {
      main: '#3D63A9',
      dark: '#284F96',
      press: '#163877',
    },
    magenta: { main: '#AA2275' },
    grey: {
      main: '#676767',
      blur: '#F4F4F4',
    },
    green: {
      main: '#ADC22F',
      dark: '#879825',
    },
    orange: {
      main: '#FF8429',
    },
    disabled: '#E2E2E2',
    white: '#FFFFFF',
    black: '#2B2B2B',
    success: '#17A3AB',
    error: '#FF0000',
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
