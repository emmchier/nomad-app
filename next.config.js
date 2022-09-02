/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
