/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- This enables static HTML export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
