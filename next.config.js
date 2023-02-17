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
    ]
  },
}
