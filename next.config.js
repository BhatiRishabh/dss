const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  reactStrictMode: true, // Enable React Strict Mode

  images: {
    unoptimized: true,
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "encrypted-tbn0.gstatic.com",
  //       pathname: "/**", // Allow all images from this domain
  //     },
  //   ],
  // },
};

module.exports = withFlowbiteReact(nextConfig);
