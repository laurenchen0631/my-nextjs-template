const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  target: 'serverless',
  compress: false,
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'cn', 'en'],
    defaultLocale: 'zh',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
});
