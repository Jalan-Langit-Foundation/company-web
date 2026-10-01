/**
 * Tipe domain berita yang dipakai oleh UI dan service layer.
 * Bentuk ini tidak bergantung pada Sanity atau sumber content tertentu.
 */
export interface NewsTableRow {
  label: string;
  value: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  beneficiaries: string;
  program: string;
  excerpt: string;
  content: string[];
  table?: {
    rows: NewsTableRow[];
    totalLabel: string;
    totalValue: string;
  };
  ctaText: string;
  ctaButtonLabel: string;
  image: string;
  imageAlt?: string;
}
