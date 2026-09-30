import type { MetadataRoute } from "next";
import { getAllNews } from "@/lib/services/news.service";
import { SITE_CONFIG } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Seluruh Halaman Berita & Artikel dari Service (Sanity CMS dengan fallback lokal)
  const allNews = await getAllNews();
  const newsRoutes: MetadataRoute.Sitemap = allNews.map((item) => ({
    url: `${baseUrl}/news/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...newsRoutes];
}
