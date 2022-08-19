import { FC } from 'react';

import { ChakraProvider as MyChakraProvider } from '@chakra-ui/provider';
import { customTheme } from '../styles/theme';

interface Proptypes {
  children: React.ReactNode;
}

export const ChakraThemeProvider: FC<Proptypes> = ({ children }) => (
  <MyChakraProvider theme={customTheme}>{children}</MyChakraProvider>
);
