// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    reactStrictMode: true, // Enable React Strict Mode
  
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  