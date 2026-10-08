import type { ImpactStoryItem } from "@/lib/domain/impact-story";
import {
  isSanityConfigured,
  sanityFetch,
  ALL_IMPACT_STORIES_QUERY,
  mapSanityDocsToImpactStories,
  type SanityImpactStoryDocument,
} from "@/lib/cms/sanity";
import { IMPACT_STORY_DATA } from "@/content/homepage";

export type { ImpactStoryItem } from "@/lib/domain/impact-story";

/**
 * Service Layer untuk Pengelolaan Data Cerita Dampak (Impact Story).
 * Mengikuti arsitektur DYNAMIC.md.
 *
 * Mengambil data dari Sanity CMS jika tersedia, dengan fallback ke data statis
 * lokal (IMPACT_STORY_DATA.stories) jika CMS offline atau belum memiliki data cerita.
 */

async function fetchImpactStoriesFromCMS(): Promise<ImpactStoryItem[] | null> {
  if (!isSanityConfigured) return null;

  const docs = await sanityFetch<SanityImpactStoryDocument[]>({
    query: ALL_IMPACT_STORIES_QUERY,
    tags: ["impact-stories"],
    revalidate: 60,
  });

  if (!docs || !Array.isArray(docs) || docs.length === 0) return null;
  return mapSanityDocsToImpactStories(docs, {
    image: { width: 1200, quality: 80 },
  });
}

/**
 * Mengambil daftar cerita dampak terurut.
 * Menggunakan data Sanity CMS jika ada, atau fallback ke data statis.
 */
export async function getImpactStories(): Promise<ImpactStoryItem[]> {
  if (isSanityConfigured) {
    try {
      const cmsStories = await fetchImpactStoriesFromCMS();
      if (cmsStories && cmsStories.length > 0) {
        return cmsStories;
      }
    } catch (error) {
      console.warn(
        "[ImpactStoryService] Gagal mengambil cerita dampak dari CMS, fallback ke data lokal:",
        error
      );
    }
  }

  // Fallback aman ke data lokal yang sudah ada
  return IMPACT_STORY_DATA.stories;
}
