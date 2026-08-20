import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't infer the parent Shopify app
  // directory (which also has a package-lock.json) as the root.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
