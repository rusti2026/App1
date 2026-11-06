import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-build",
  output: "standalone",
  // Pin the workspace root so Turbopack doesn't infer it from a parent folder
  // (the project lives under a synced OneDrive path).
  turbopack: {
    root: process.cwd(),
  },
  // Prisma ships a native query engine; keep it out of the server bundle so
  // Next traces the engine into the standalone output.
  serverExternalPackages: ["@prisma/client"],
  reactStrictMode: false,
};

export default nextConfig;
