import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ARCHI-S_BEAUTY_CARE",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
