import type { NextConfig } from "next";
import withPWA from "next-pwa";
import path from "path";

const baseConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      "https://6000-firebase-studio-1758804794967.cluster-nle52mxuvfhlkrzyrq6g2cwb52.cloudworkstations.dev",
    ],
  },
};

// Wrap your existing config with PWA
export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(baseConfig);
