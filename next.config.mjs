/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === "production" && { output: "export" }),
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  compress: true,
  transpilePackages: ["lucide-react"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
