import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Allows loading images from Cloudinary
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development', // Ignores TypeScript build errors in development
  },
  experimental: {
    serverComponents: true, // Enables server components if needed
  },
  target: 'server', // Set the build target for serverless functions (useful for API routes)
};

export default nextConfig;
