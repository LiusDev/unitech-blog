/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/fanpage',
        destination: 'https://www.facebook.com/SSG.UniTech.Blog',
        permanent: true,
      },
      {
        source: '/admin',
        destination: 'https://app.hygraph.com/da39084b3a874a6a8304129c79c0d670/master/content/c5f12e97d02440c9a483bc8328658f0b/view/1554afcd2e59455cafdc835eaf401cde',
        permanent: true,
      },
      {
        source: '/analytics', 
        destination: 'https://vercel.com/liusdev/unitech-blog/analytics/audience?period=90d',
        permanent: true,
      },
    ]
  },
}
