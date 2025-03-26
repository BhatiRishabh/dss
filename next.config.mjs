/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: '/dss',  // Add this line
  trailingSlash: true, // Optional: ensures all routes have a trailing slash in the URL
    images: {
      unoptimized: true,
      },
};

export default nextConfig;