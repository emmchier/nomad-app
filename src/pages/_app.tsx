import type { AppProps } from 'next/app';
import { ChakraThemeProvider } from '../providers/ChakraThemeProvider';
import { StyledThemeProvider } from '../providers/StyledThemeProvider';
import { SWRConfig } from 'swr';

import MainLayout from '../components/layouts/main-layout/main-layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SWRConfig
    value={{ fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()) }}
  >
    <ChakraThemeProvider>
      <StyledThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </StyledThemeProvider>
    </ChakraThemeProvider>
  </SWRConfig>
);

export default MyApp;
