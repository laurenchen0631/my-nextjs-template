const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  // target: 'serverless',
  // distDir: 'build',
  compress: false,
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'cn', 'en'],
    defaultLocale: 'zh',
  },
  // serverRuntimeConfig: {
  //   analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  // },
  images: {
    domains: [process.env.CDN_DOMAIN],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: `${process.env.API_HOST}/:path*`,
        locale: false,
      },
    ];
  },
});
