/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'es-ES',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
