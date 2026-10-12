import type { FeaturedVideo } from "@/lib/domain/featured-video";
import {
  sanityFetch,
  ALL_FEATURED_VIDEOS_QUERY,
  mapSanityDocsToFeaturedVideos,
  type SanityFeaturedVideoDocument,
} from "@/lib/cms/sanity";
import { FEATURED_VIDEOS_DATA } from "@/content/homepage/videos";

export type { FeaturedVideo } from "@/lib/domain/featured-video";

/**
 * Service Layer untuk Pengelolaan Data Video Pilihan (Featured Videos).
 * Mengikuti arsitektur DYNAMIC.md.
 *
 * Mengambil data video pilihan langsung dari Sanity CMS,
 * dengan graceful fallback ke data statis lokal jika CMS belum diisi.
 */
async function fetchFeaturedVideosFromCMS(): Promise<FeaturedVideo[]> {
  const docs = await sanityFetch<SanityFeaturedVideoDocument[]>({
    query: ALL_FEATURED_VIDEOS_QUERY,
    tags: ["featured-videos"],
    revalidate: 60,
  });

  if (!docs || !Array.isArray(docs)) return [];
  return mapSanityDocsToFeaturedVideos(docs, {
    image: { width: 800, quality: 80 },
  });
}

/**
 * Mengambil daftar video pilihan terurut dari Sanity CMS.
 * Jika belum ada data di CMS, fallback ke data lokal yang sudah ada.
 */
export async function getFeaturedVideos(): Promise<FeaturedVideo[]> {
  try {
    const cmsVideos = await fetchFeaturedVideosFromCMS();
    if (cmsVideos && cmsVideos.length > 0) {
      return cmsVideos;
    }
  } catch (error) {
    console.warn(
      "[FeaturedVideoService] Gagal mengambil data video dari CMS, menggunakan fallback lokal:",
      error
    );
  }

  return FEATURED_VIDEOS_DATA.videos;
}
