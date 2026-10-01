import type { NewsItem, NewsTableRow } from "@/lib/domain/news";
import type { SanityNewsDocument, SanityPortableTextBlock } from "./types";
import { urlForSanityImage } from "./image";

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
export function mapSanityDocToNewsItem(doc: SanityNewsDocument): NewsItem {
  const imageUrl = urlForSanityImage(doc.coverImage) || "";
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
export function mapSanityDocsToNewsItems(docs: SanityNewsDocument[]): NewsItem[] {
  if (!Array.isArray(docs)) return [];
  return docs.map(mapSanityDocToNewsItem);
}
