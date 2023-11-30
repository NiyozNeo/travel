/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ["picsum.photos", "plus.unsplash.com","images.unsplash.com", "st2.depositphotos.com"],
  },
};

module.exports = nextConfig;
