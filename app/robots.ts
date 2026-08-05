import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://ysdasports.com/sitemap.xml",
    host: "https://ysdasports.com"
  };
}
