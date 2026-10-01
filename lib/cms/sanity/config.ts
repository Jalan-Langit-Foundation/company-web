/**
 * Konfigurasi Sanity.io untuk Jalan Langit Foundation
 * Sesuai arsitektur DYNAMIC.md
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  // Content published dapat memakai CDN di semua environment.
  // Set SANITY_USE_CDN=false hanya jika perlu membaca data non-CDN/draft.
  useCdn: process.env.SANITY_USE_CDN !== "false",
  // Token read-only opsional untuk draft content atau dataset private
  token: process.env.SANITY_API_READ_TOKEN || "",
};

export const isSanityConfigured = Boolean(
  sanityConfig.projectId && sanityConfig.projectId.trim() !== ""
);
