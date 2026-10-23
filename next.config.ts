import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
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
      {
        source: "/blog/what-to-look-for-in-clinic-software-sri-lanka",
        destination: "/blog/how-to-choose-clinic-software-sri-lanka",
        permanent: true,
      },
      {
        source: "/blog/paper-vs-digital-clinic-records-sri-lanka",
        destination: "/blog/paper-vs-digital-prescriptions-sri-lanka",
        permanent: true,
      },
      {
        source: "/blog/prescription-flow-doctor-to-dispensary",
        destination: "/blog/manage-medicine-stock-expiry-clinic-dispensary",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
