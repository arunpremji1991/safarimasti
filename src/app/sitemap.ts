import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { tours } from "@/data/tours";

const BASE_URL = "https://safarimasti.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/experiences",
    "/destinations",
    "/collections",
    "/build-your-journey",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const collectionRoutes = collections.map((c) => ({
    url: `${BASE_URL}/collections/${c.slug}`,
    lastModified: new Date(),
  }));

  const tourRoutes = tours.map((t) => ({
    url: `${BASE_URL}/tours/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...collectionRoutes, ...tourRoutes];
}
