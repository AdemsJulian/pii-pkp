/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "www.pii.or.id",
      },
      {
        protocol: "https",
        hostname: "is3.cloudhost.id",
      },
    ],
  },
};

export default nextConfig;
