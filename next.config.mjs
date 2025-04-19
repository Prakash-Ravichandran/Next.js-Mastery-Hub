/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // 👈 Must be enabled
  },
};

export default nextConfig;
