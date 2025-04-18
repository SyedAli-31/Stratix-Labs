const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stratix-labs.vercel.app',  // Your domain name
        pathname: '/**',                      // Allow images from any path under the domain
      },
    ],
  },
};

export default nextConfig;
