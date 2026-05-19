import type { MetadataRoute } from "next";
import { NAVIGATION } from "@/lib/content/navigation";

const BASE = "https://www.sportpalast-lindlar.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set<string>([
    "/",
    "/preise",
    "/mitglied-werden",
    "/kontakt",
    "/ueber-uns",
    "/ueber-uns/team",
    "/oeffnungszeiten",
    "/news",
    "/galerie",
    "/impressum",
    "/datenschutz",
    "/sauna",
    "/physiotherapie",
  ]);

  NAVIGATION.forEach((g) => {
    if (g.href) routes.add(g.href);
    g.children?.forEach((c) => routes.add(c.href));
  });

  return [...routes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
