/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//         domains: ['127.0.0.1'],
//     },
//  };

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8090',
        pathname: '/api/files/**',
      },

    ],
  },
  output: 'standalone'
}

module.exports = nextConfig