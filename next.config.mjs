import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ysda-website";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPagesBuild ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  outputFileTracingRoot: __dirname,
  images: {
    loader: "custom",
    loaderFile: "./github-pages-image-loader.mjs",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com"
      }
    ]
  }
};

export default nextConfig;
