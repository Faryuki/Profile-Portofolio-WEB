/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 👇 Ini akan mengabaikan error eslint saat build di Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
