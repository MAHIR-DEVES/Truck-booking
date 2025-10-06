import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.tsx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add webpack configuration to handle the module issue
  webpack: config => {
    // Fix for the webpack modules issue
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
