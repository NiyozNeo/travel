/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeImages: true,
  compress: true,
  preload: false,
  images: {
    domains: ["picsum.photos", "plus.unsplash.com", "st2.depositphotos.com"],
  },
  flags: {
    DEV_SSR: false,
  },
};

module.exports = nextConfig;
