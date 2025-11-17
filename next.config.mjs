/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.dev.trait.fit",
        port: "",
        pathname: "/dronarjun/**",
      },
    ],
  },
};

export default nextConfig;
