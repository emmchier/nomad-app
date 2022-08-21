import React, { FC } from 'react';

import Head from 'next/head';

type PageTypes = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  tag?: string;
  keywords?: string[];
};

const Page: FC<PageTypes> = ({ children, title, description, tag, keywords }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title && title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {tag && <meta itemProp="image" content={tag} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Emmanuel Chierchie" />
      <meta name="owner" content="Emmanuel Chierchie" />
      <meta httpEquiv="content-lenguage" content="es-ES" />
      <meta name="distribution" content="global" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={tag} />
      <meta property="og:image:type" content="image/png" />
      {tag && <meta property="og:image:width" content="1200" />}
      {tag && <meta property="og:image:height" content="630" />}
    </Head>
    {children}
  </>
);

export default Page;
