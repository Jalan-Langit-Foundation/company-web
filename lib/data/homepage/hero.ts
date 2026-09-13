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
      src: "/images/draft-foto/hadiah-kebahagiaan/hadiah-kebahagiaan-01.webp",
      alt: "Apresiasi paket sembako berkah program Hadiah Kebahagiaan bagi pejuang nafkah",
    },
    {
      id: "slide-2",
      src: "/images/draft-foto/hadiah-kebahagiaan/hadiah-kebahagiaan-02.webp",
      alt: "Senyum bahagia dan kebersamaan penerima manfaat program Hadiah Kebahagiaan",
    },
    {
      id: "slide-3",
      src: "/images/draft-foto/hadiah-kebahagiaan/hadiah-kebahagiaan-03.webp",
      alt: "Penyaluran langsung bingkisan Hadiah Kebahagiaan untuk pejuang jalanan",
    },
    {
      id: "slide-4",
      src: "/images/draft-foto/langit-box/langit-box-01.webp",
      alt: "Aksi relawan Jalan Langit Foundation menyalurkan bantuan pangan dan nutrisi Langit Box",
    },
    {
      id: "slide-5",
      src: "/images/draft-foto/serasi/serasi-07.webp",
      alt: "Dokumentasi keceriaan dan kebersamaan santri dalam program SERASI",
    },
  ] satisfies HeroSlide[],
};
