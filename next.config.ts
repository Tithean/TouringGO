
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://cam-trip.cheat.casa/api/:path*",
      },
    ];
  },
};

export default nextConfig;