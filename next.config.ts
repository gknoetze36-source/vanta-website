import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages static hosting
  output: "export",

  // Prevents routing issues on GitHub Pages
  trailingSlash: true,

  // Required because GitHub Pages does not support Next image optimization
  images: {
    unoptimized: true,
  },

  // Prevents build issues with static exports
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Prevents type-check build failures during deployment
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
