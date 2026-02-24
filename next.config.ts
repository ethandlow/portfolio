import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // In dev, skip image optimization cache so image/file changes show immediately
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
