import type { NewsItem, NewsTableRow } from "@/lib/domain/news";
import type { ImpactStoryItem, ImpactStoryPhoto } from "@/lib/domain/impact-story";
import type {
  SanityNewsDocument,
  SanityImpactStoryDocument,
  SanityImpactStoryPhotoDocument,
  SanityPortableTextBlock,
} from "./types";
import { urlForSanityImage, type SanityImageOptions } from "./image";

export interface NewsMappingOptions {
  image?: SanityImageOptions;
}

/**
 * Normalisasi isi konten artikel berita.
 * Mendukung format string langsung maupun Portable Text block dari Sanity Studio.
 */
function extractParagraphs(content?: Array<string | SanityPortableTextBlock>): string[] {
  if (!content || !Array.isArray(content)) return [];

  const paragraphs: string[] = [];

  for (const block of content) {
    if (typeof block === "string") {
      const trimmed = block.trim();
      if (trimmed) paragraphs.push(trimmed);
      continue;
    }

    // Blok Portable Text bawaan Sanity
    if (block && typeof block === "object") {
      if (Array.isArray(block.children)) {
        const text = block.children
          .map((child) => child?.text || "")
          .join("")
          .trim();
        if (text) paragraphs.push(text);
      }
    }
  }

  return paragraphs;
}

/**
 * Adapter: Mengonversi raw SanityNewsDocument menjadi domain NewsItem yang digunakan oleh aplikasi.
 */
export function mapSanityDocToNewsItem(
  doc: SanityNewsDocument,
  options: NewsMappingOptions = {}
): NewsItem {
  const imageUrl = urlForSanityImage(doc.coverImage, options.image) || "";
  const paragraphs = extractParagraphs(doc.content);

  // Normalisasi tabel distribusi jika ada
  let table: NewsItem["table"] = undefined;
  if (doc.distributionTable && Array.isArray(doc.distributionTable.rows)) {
    const validRows: NewsTableRow[] = doc.distributionTable.rows
      .filter((r) => r.label && r.value)
      .map((r) => ({
        label: r.label,
        value: r.value,
      }));

    if (validRows.length > 0) {
      table = {
        totalLabel: doc.distributionTable.totalLabel || "Total",
        totalValue: doc.distributionTable.totalValue || "",
        rows: validRows,
      };
    }
  }

  return {
    id: doc.slug?.current || doc._id,
    title: doc.title || "",
    updatedAt: doc._updatedAt,
    category: doc.category || "Umum",
    date: doc.date || "",
    location: doc.location || "",
    beneficiaries: doc.beneficiaries || "",
    program: doc.program || "",
    excerpt: doc.excerpt || "",
    content: paragraphs,
    table,
    ctaText: doc.ctaText || "Terus Langitkan Kebaikan bersama Jalan Langit Foundation.",
    ctaButtonLabel: doc.ctaButtonLabel || "Dukung Program Ini",
    image: imageUrl,
    imageAlt:
      (doc.coverImage &&
        typeof doc.coverImage === "object" &&
        "alt" in doc.coverImage &&
        typeof doc.coverImage.alt === "string" &&
        doc.coverImage.alt) ||
      doc.title ||
      "Foto kegiatan Jalan Langit Foundation",
  };
}

/**
 * Helper untuk mentransformasi array dokumen Sanity menjadi NewsItem[]
 */
export function mapSanityDocsToNewsItems(
  docs: SanityNewsDocument[],
  options: NewsMappingOptions = {}
): NewsItem[] {
  if (!Array.isArray(docs)) return [];
  return docs.map((doc) => mapSanityDocToNewsItem(doc, options));
}

/**
 * Adapter: Mengonversi raw SanityImpactStoryDocument menjadi ImpactStoryItem.
 */
export function mapSanityDocToImpactStory(
  doc: SanityImpactStoryDocument,
  options: NewsMappingOptions = {}
): ImpactStoryItem {
  return {
    id: doc.slug?.current || doc._id,
    title: doc.title || "",
    category: doc.category || "Dampak Kebaikan",
    badge: doc.badge || doc.programName || "Cerita Dampak",
    person: doc.person || "",
    role: doc.role || "",
    location: doc.location || "",
    programName: doc.programName || "",
    quote: doc.quote || "",
    story: doc.story || "",
    impactMetric: doc.impactMetric || "",
    donationUrl: doc.donationUrl || "",
    hashtag: doc.hashtag || "",
    order: doc.order,
  };
}

/**
 * Helper untuk mentransformasi array dokumen Sanity menjadi ImpactStoryItem[]
 */
export function mapSanityDocsToImpactStories(
  docs: SanityImpactStoryDocument[],
  options: NewsMappingOptions = {}
): ImpactStoryItem[] {
  if (!Array.isArray(docs)) return [];
  return docs.map((doc) => mapSanityDocToImpactStory(doc, options));
}

export function mapSanityDocToImpactStoryPhoto(
  doc: SanityImpactStoryPhotoDocument,
  options: NewsMappingOptions = {}
): ImpactStoryPhoto {
  const image = urlForSanityImage(doc.image, options.image) || "";
  const imageObject = doc.image && typeof doc.image === "object" ? doc.image : null;

  return {
    id: doc._id,
    title: doc.title,
    image,
    imageAlt:
      (imageObject && "alt" in imageObject && typeof imageObject.alt === "string" && imageObject.alt) ||
      doc.title,
    order: doc.order,
  };
}

export function mapSanityDocsToImpactStoryPhotos(
  docs: SanityImpactStoryPhotoDocument[],
  options: NewsMappingOptions = {}
): ImpactStoryPhoto[] {
  if (!Array.isArray(docs)) return [];
  return docs.map((doc) => mapSanityDocToImpactStoryPhoto(doc, options));
}
