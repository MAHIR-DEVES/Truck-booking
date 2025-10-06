import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: [
    // Enable middleware for all paths except static files
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/',
    '/(bn|en)/:path*',
  ],
};
