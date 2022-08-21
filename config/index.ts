const dev = process.env.NEXT_PUBLIC_ENV !== 'production';

export const baseDevUrl = dev ? 'http://localhost:3000' : 'https://production-url.com';
