// next.config.mjs
export const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.icons8.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  