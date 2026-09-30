/**
 * Definisi Tipe Data Dokumen Sanity CMS
 * Sesuai dengan skema pemodelan konten DYNAMIC.md
 */

export interface SanitySlug {
  _type?: "slug";
  current: string;
}

export interface SanityImageAssetRef {
  _ref?: string;
  _type?: "reference";
}

export interface SanityImageObject {
  _type?: "image";
  asset?: SanityImageAssetRef | { url?: string; [key: string]: unknown };
  alt?: string;
  url?: string;
  [key: string]: unknown;
}

export type SanityImageSource =
  | string
  | SanityImageObject
  | SanityImageAssetRef
  | null
  | undefined;

export interface SanityPortableTextBlock {
  _type?: string;
  _key?: string;
  children?: Array<{
    _type?: string;
    _key?: string;
    text?: string;
    marks?: string[];
  }>;
  [key: string]: unknown;
}

export interface SanityTableRow {
  _key?: string;
  label: string;
  value: string;
}

export interface SanityDistributionTable {
  totalLabel?: string;
  totalValue?: string;
  rows?: SanityTableRow[];
}

export type SanityPublicationStatus = "draft" | "published" | "archived";

/**
 * Entitas Dokumen Berita dari Sanity (Raw DTO)
 */
export interface SanityNewsDocument {
  _id: string;
  _type: "news";
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: SanitySlug;
  category?: string;
  program?: string;
  date?: string;
  location?: string;
  beneficiaries?: string;
  excerpt?: string;
  coverImage?: SanityImageSource;
  content?: Array<string | SanityPortableTextBlock>;
  distributionTable?: SanityDistributionTable;
  ctaText?: string;
  ctaButtonLabel?: string;
  ctaButtonUrl?: string;
  status?: SanityPublicationStatus;
}
