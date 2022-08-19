import { FC } from 'react';

import { ThemeProvider as MyStyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import { theme } from '../styles/theme';

interface Proptypes {
  children: React.ReactNode;
}

export const StyledThemeProvider: FC<Proptypes> = ({ children }) => (
  <MyStyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </MyStyledThemeProvider>
);
