import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myanimelist.net",
        port: "",
        pathname: "/images/**",
      }
    ],
  },
};

export default nextConfig;
