/**
 * Tipe domain Cerita Dampak yang dipakai oleh UI dan service layer.
 * Model ini independen dari sumber data CMS/Sanity.
 */
export interface ImpactStoryItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  person: string;
  role: string;
  location: string;
  programName: string;
  quote: string;
  story: string;
  impactMetric: string;
  donationUrl: string;
  featuredImage: string;
  featuredImageAlt?: string;
  hashtag: string;
  order?: number;
}
