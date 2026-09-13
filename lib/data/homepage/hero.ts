export interface HeroSlide {
  id: string;
  src: string;
  alt: string;
}

export const HERO_CONFIG = {
  /** Durasi pergantian gambar otomatis (dalam milidetik) */
  intervalMs: 5000,
  /** Daftar foto background slideshow hero section */
  slides: [
    {
      id: "slide-1",
      src: "/images/draft-foto/ramadhan/ramadhan-05.webp",
      alt: "Kebersamaan santri dan penerima manfaat Jalan Langit Foundation di Ramadhan Bahagia",
    },
    {
      id: "slide-2",
      src: "/images/draft-foto/serasi/serasi-07.webp",
      alt: "Dokumentasi kebahagiaan santri dalam program SERASI (Sehari Bersama Santri)",
    },
    {
      id: "slide-3",
      src: "/images/draft-foto/langit-box/langit-box-01.webp",
      alt: "Aksi relawan Jalan Langit Foundation menyalurkan bantuan pangan dan nutrisi",
    },
    {
      id: "slide-4",
      src: "/images/draft-foto/zakat/zakat-07.webp",
      alt: "Penyaluran amanah zakat, infak, dan sedekah kepada penerima manfaat",
    },
    {
      id: "slide-5",
      src: "/images/draft-foto/zakat/zakat-01.webp",
      alt: "Armada unit layanan operasional kebaikan Jalan Langit Foundation",
    },
  ] satisfies HeroSlide[],
};
