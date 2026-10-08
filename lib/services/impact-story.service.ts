import type { ImpactStoryItem } from "@/lib/domain/impact-story";
import {
  sanityFetch,
  ALL_IMPACT_STORIES_QUERY,
  mapSanityDocsToImpactStories,
  type SanityImpactStoryDocument,
} from "@/lib/cms/sanity";

export type { ImpactStoryItem } from "@/lib/domain/impact-story";

/**
 * Service Layer untuk Pengelolaan Data Cerita Dampak (Impact Story).
 * Mengikuti arsitektur DYNAMIC.md.
 *
 * Mengambil data cerita dampak langsung dari Sanity CMS.
 */

async function fetchImpactStoriesFromCMS(): Promise<ImpactStoryItem[]> {
  const docs = await sanityFetch<SanityImpactStoryDocument[]>({
    query: ALL_IMPACT_STORIES_QUERY,
    tags: ["impact-stories"],
    revalidate: 60,
  });

  if (!docs || !Array.isArray(docs)) return [];
  return mapSanityDocsToImpactStories(docs, {
    image: { width: 1200, quality: 80 },
  });
}

/**
 * Mengambil daftar cerita dampak terurut dari Sanity CMS.
 */
export async function getImpactStories(): Promise<ImpactStoryItem[]> {
  return fetchImpactStoriesFromCMS();
}
