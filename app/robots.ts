import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.sportpalast-lindlar.de/sitemap.xml",
    host: "https://www.sportpalast-lindlar.de",
  };
}
