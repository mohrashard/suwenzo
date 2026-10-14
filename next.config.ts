import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "suwenzo.com",
          },
        ],
        destination: "https://www.suwenzo.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
