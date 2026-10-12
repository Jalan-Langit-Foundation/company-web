/**
 * Tipe domain Video Pilihan yang dipakai oleh UI dan service layer.
 * Model ini independen dari sumber data CMS/Sanity.
 */
export interface FeaturedVideo {
  id: string;
  title: string;
  description: string;
  category: "Semua" | "Dokumentasi Program" | "Pendidikan Santri" | "Aksi Relawan" | "Kisah Nyata" | string;
  duration: string;
  youtubeId: string;
  thumbnail: string;
  publishedDate?: string;
  views?: string;
  order?: number;
}
