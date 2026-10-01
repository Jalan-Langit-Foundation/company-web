import { sanityConfig } from "./config";
import type { SanityImageSource, SanityImageObject, SanityImageAssetRef } from "./types";

export interface SanityImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: "webp" | "jpg" | "png";
}

/**
 * Membangun URL gambar dari asset Sanity CDN.
 * Format standar asset ref Sanity: image-<assetId>-<dimensions>.<format>
 * Contoh: image-086cb495db492dbbe79cb737d9765df05b1cffc9-1200x800-jpg
 */
export function urlForSanityImage(
  source: SanityImageSource,
  options: SanityImageOptions = {}
): string | null {
  if (!source) return null;

  // Jika input sudah merupakan URL absolut string (misal dari /images/... atau external URL)
  if (typeof source === "string") {
    return source;
  }

  // Ekstrak asset ref dari berbagai kemungkinan bentuk objek Sanity
  let ref: string | undefined;
  if ("asset" in source && source.asset) {
    const asset = source.asset;
    if (typeof asset === "object" && "_ref" in asset && typeof asset._ref === "string") {
      ref = asset._ref;
    } else if (typeof asset === "object" && "url" in asset && typeof asset.url === "string") {
      return asset.url;
    }
  } else if ("_ref" in source && typeof (source as SanityImageAssetRef)._ref === "string") {
    ref = (source as SanityImageAssetRef)._ref;
  } else if ("url" in source && typeof (source as SanityImageObject).url === "string") {
    return (source as SanityImageObject).url ?? null;
  }

  if (!ref || typeof ref !== "string") {
    return null;
  }

  // Parse pola: image-<assetId>-<dimensions>.<format>
  const parts = ref.split("-");
  if (parts.length >= 4 && parts[0] === "image") {
    const assetId = parts[1];
    const dimensions = parts[2];
    const fileFormat = parts[3];
    const { projectId, dataset } = sanityConfig;

    if (projectId && dataset) {
      const url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-${dimensions}.${fileFormat}`;

      // Bangun query parameters opsional untuk optimasi gambar CDN
      const params = new URLSearchParams();
      if (options.width) params.set("w", String(options.width));
      if (options.height) params.set("h", String(options.height));
      if (options.quality) params.set("q", String(options.quality));
      if (options.format) {
        params.set("fm", options.format);
      } else {
        params.set("auto", "format"); // Default auto WebP/AVIF
      }

      const queryString = params.toString();
      return queryString ? `${url}?${queryString}` : url;
    }
  }

  return null;
}
