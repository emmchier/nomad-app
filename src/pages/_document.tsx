import React from 'react';

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ColorModeScript } from '@chakra-ui/react';
import { customTheme } from '../styles/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Yesteryear&display=swap"
            as="style"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Yesteryear&display=swap"
            as="style"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
