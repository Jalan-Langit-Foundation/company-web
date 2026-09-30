import { news as staticNews, type NewsItem, type NewsTableRow } from "@/lib/data/news";
import {
  isSanityConfigured,
  sanityFetch,
  ALL_NEWS_QUERY,
  NEWS_BY_SLUG_OR_ID_QUERY,
  LATEST_NEWS_QUERY,
  ALL_NEWS_SLUGS_QUERY,
  mapSanityDocToNewsItem,
  mapSanityDocsToNewsItems,
  type SanityNewsDocument,
} from "@/lib/sanity";

export type { NewsItem, NewsTableRow };

/**
 * Service Layer untuk Pengelolaan Data Berita.
 * Mengikuti arsitektur DYNAMIC.md (Section 4.2).
 *
 * Pola Single Source of Truth dengan Fallback Otomatis:
 * 1. Jika integrasi Headless CMS (Sanity) aktif & tersedia, data diambil dari CMS via GROQ query.
 * 2. Jika CMS offline atau belum terkonfigurasi, data otomatis fallback ke lib/data/news.ts.
 */

/**
 * Fetch seluruh berita dari Sanity menggunakan query GROQ yang terpusat.
 */
async function fetchNewsFromCMS(): Promise<NewsItem[] | null> {
  if (!isSanityConfigured) return null;

  const docs = await sanityFetch<SanityNewsDocument[]>({
    query: ALL_NEWS_QUERY,
    tags: ["news"],
    revalidate: 60,
  });

  if (!docs || !Array.isArray(docs)) return null;
  return mapSanityDocsToNewsItems(docs);
}

/**
 * Fetch satu berita dari Sanity berdasarkan slug atau _id dokumen.
 */
async function fetchNewsByIdFromCMS(id: string): Promise<NewsItem | null> {
  if (!isSanityConfigured) return null;

  const doc = await sanityFetch<SanityNewsDocument>({
    query: NEWS_BY_SLUG_OR_ID_QUERY,
    params: { id },
    tags: ["news", `news-${id}`],
    revalidate: 60,
  });

  if (!doc) return null;
  return mapSanityDocToNewsItem(doc);
}

/**
 * Mengambil seluruh daftar berita (terurut dari yang paling terbaru).
 */
export async function getAllNews(): Promise<NewsItem[]> {
  try {
    const cmsNews = await fetchNewsFromCMS();
    if (cmsNews && cmsNews.length > 0) {
      return cmsNews;
    }
  } catch (error) {
    console.warn(
      "[NewsService] Gagal mengambil data berita dari CMS, menggunakan fallback data lokal:",
      error
    );
  }

  // Fallback ke data statis lokal
  return staticNews;
}

/**
 * Mengambil satu berita berdasarkan slug / ID.
 */
export async function getNewsById(id: string): Promise<NewsItem | null> {
  try {
    const cmsItem = await fetchNewsByIdFromCMS(id);
    if (cmsItem) {
      return cmsItem;
    }
  } catch (error) {
    console.warn(
      `[NewsService] Gagal mengambil berita "${id}" dari CMS, menggunakan fallback data lokal:`,
      error
    );
  }

  // Fallback ke data statis lokal
  const localItem = staticNews.find((n) => n.id === id);
  return localItem ?? null;
}

/**
 * Mengambil N berita terbaru.
 */
export async function getLatestNews(limit: number = 8): Promise<NewsItem[]> {
  if (isSanityConfigured) {
    try {
      const docs = await sanityFetch<SanityNewsDocument[]>({
        query: LATEST_NEWS_QUERY,
        params: { limit },
        tags: ["news"],
        revalidate: 60,
      });

      if (docs && docs.length > 0) {
        return mapSanityDocsToNewsItems(docs);
      }
    } catch (error) {
      console.warn("[NewsService] Gagal fetch latest news dari CMS, fallback ke lokal:", error);
    }
  }

  const allNews = await getAllNews();
  return allNews.slice(0, limit);
}

/**
 * Mengambil seluruh ID / slug berita untuk keperluan generateStaticParams dan sitemap.
 */
export async function getAllNewsIds(): Promise<string[]> {
  if (isSanityConfigured) {
    try {
      const slugs = await sanityFetch<string[]>({
        query: ALL_NEWS_SLUGS_QUERY,
        tags: ["news"],
        revalidate: 60,
      });

      if (slugs && slugs.length > 0) {
        return slugs.filter(Boolean);
      }
    } catch (error) {
      console.warn("[NewsService] Gagal fetch slugs dari CMS, fallback ke lokal:", error);
    }
  }

  return staticNews.map((item) => item.id);
}
