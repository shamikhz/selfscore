/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  compress: true,
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
