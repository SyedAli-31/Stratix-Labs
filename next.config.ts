/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stratix-labs.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ Allow Unsplash images
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;