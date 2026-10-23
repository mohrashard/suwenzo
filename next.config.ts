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
      // Note: Repoint to /blog/paper-vs-digital-prescriptions-sri-lanka when post is published
      {
        source: "/blog/paper-vs-digital-clinic-records-sri-lanka",
        destination: "/features/digital-prescriptions",
        permanent: true,
      },
      // Note: Repoint to /blog/manage-medicine-stock-expiry-clinic-dispensary when post is published
      {
        source: "/blog/prescription-flow-doctor-to-dispensary",
        destination: "/how-it-works",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
