import type { NewsItem } from "@/lib/domain/news";
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
} from "@/lib/cms/sanity";

export type { NewsItem, NewsTableRow } from "@/lib/domain/news";

/**
 * Service Layer untuk Pengelolaan Data Berita.
 * Mengikuti arsitektur DYNAMIC.md (Section 4.2).
 *
 * Sanity adalah single source of truth untuk berita.
 * Jika CMS tidak tersedia, service mengembalikan data kosong agar masalah terlihat jelas
 * dan tidak tertutup oleh data lama dari kode.
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
  if (!isSanityConfigured) return [];

  try {
    const cmsNews = await fetchNewsFromCMS();
    return cmsNews ?? [];
  } catch (error) {
    console.warn(
      "[NewsService] Gagal mengambil data berita dari CMS:",
      error
    );
  }

  return [];
}

/**
 * Mengambil satu berita berdasarkan slug / ID.
 */
export async function getNewsById(id: string): Promise<NewsItem | null> {
  if (!isSanityConfigured) return null;

  try {
    const cmsItem = await fetchNewsByIdFromCMS(id);
    return cmsItem;
  } catch (error) {
    console.warn(
      `[NewsService] Gagal mengambil berita "${id}" dari CMS:`,
      error
    );
  }

  return null;
}

/**
 * Mengambil N berita terbaru.
 */
export async function getLatestNews(limit: number = 8): Promise<NewsItem[]> {
  if (!isSanityConfigured) return [];

  try {
    const docs = await sanityFetch<SanityNewsDocument[]>({
      query: LATEST_NEWS_QUERY,
      params: { limit },
      tags: ["news"],
      revalidate: 60,
    });

    return docs ? mapSanityDocsToNewsItems(docs) : [];
  } catch (error) {
    console.warn("[NewsService] Gagal mengambil berita terbaru dari CMS:", error);
  }

  return [];
}

/**
 * Mengambil seluruh ID / slug berita untuk keperluan generateStaticParams dan sitemap.
 */
export async function getAllNewsIds(): Promise<string[]> {
  if (!isSanityConfigured) return [];

  try {
    const slugs = await sanityFetch<string[]>({
      query: ALL_NEWS_SLUGS_QUERY,
      tags: ["news"],
      revalidate: 60,
    });

    return slugs?.filter(Boolean) ?? [];
  } catch (error) {
    console.warn("[NewsService] Gagal mengambil slug berita dari CMS:", error);
  }

  return [];
}
