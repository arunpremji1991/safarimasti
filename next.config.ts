import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out that can be
// uploaded to any PHP/HTML host. Forms are handled by the PHP scripts in public/api.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
