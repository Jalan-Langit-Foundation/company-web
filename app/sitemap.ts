import type { MetadataRoute } from "next";
import { news } from "@/lib/data/news";
import { SITE_CONFIG } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Halaman Beranda Utama
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Seluruh Halaman Berita & Artikel
  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${baseUrl}/news/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...newsRoutes];
}
