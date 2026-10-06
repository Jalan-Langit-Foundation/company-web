/**
 * Kumpulan GROQ Queries Sanity terpusat.
 * Memisahkan definisi query dari logika bisnis service.
 */

// Fieldset proyeksi standar untuk dokumen berita
const NEWS_PROJECTION = `{
  _id,
  _type,
  _updatedAt,
  title,
  slug,
  category,
  date,
  location,
  beneficiaries,
  program,
  excerpt,
  content,
  distributionTable,
  ctaText,
  ctaButtonLabel,
  ctaButtonUrl,
  coverImage,
  status
}`;

// Projection ringan untuk kartu berita di homepage dan sidebar.
// Content lengkap, tabel distribusi, dan CTA hanya diambil pada halaman detail.
const NEWS_CARD_PROJECTION = `{
  _id,
  _type,
  title,
  slug,
  category,
  date,
  location,
  coverImage,
  status
}`;

/**
 * Query untuk mengambil seluruh berita yang berstatus published,
 * diurutkan berdasarkan tanggal terbaru descending.
 */
export const ALL_NEWS_QUERY = `*[_type == "news" && (!defined(status) || status == "published")] | order(date desc) ${NEWS_PROJECTION}`;

/**
 * Query untuk mengambil satu berita berdasarkan slug (URL) atau _id dokumen.
 */
export const NEWS_BY_SLUG_OR_ID_QUERY = `*[_type == "news" && (slug.current == $id || _id == $id)][0] ${NEWS_PROJECTION}`;

/**
 * Query untuk mengambil N berita terbaru (misal untuk homepage section).
 */
export const LATEST_NEWS_QUERY = `*[_type == "news" && (!defined(status) || status == "published")] | order(date desc)[0...$limit] ${NEWS_CARD_PROJECTION}`;

/** Query ringan untuk sidebar halaman detail berita. */
export const RELATED_NEWS_QUERY = `*[_type == "news" && (!defined(status) || status == "published") && slug.current != $id] | order(date desc)[0...$limit] ${NEWS_CARD_PROJECTION}`;

/**
 * Query ringan hanya mengambil daftar ID/slug untuk generateStaticParams & sitemap.
 */
export const ALL_NEWS_SLUGS_QUERY = `*[_type == "news" && (!defined(status) || status == "published")].slug.current`;
