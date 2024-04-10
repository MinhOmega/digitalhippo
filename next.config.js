/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "digitalhippo-production.up.railway.app",
      },
    ],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
