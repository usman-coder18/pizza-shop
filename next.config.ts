import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  typescript: {
    // Optional: Disable ignoring build errors for production environments
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  experimental: {
    serverComponents: true, // If you're using server components
  },
  target: 'server', // Use serverless functions (if using API routes)
};

export default nextConfig;
