import type { NextConfig } from "next";

const config: NextConfig = {
  distDir: '.next',
  images: {
    domains: ['cdn.myanimelist.net'],
  },
};

export default config;
