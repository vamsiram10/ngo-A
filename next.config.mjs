/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 important
  images: {
    unoptimized: true, // ✅ required for static export
  },
};

export default nextConfig;
