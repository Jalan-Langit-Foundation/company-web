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
      src: "/images/hero/hero-01.webp",
      alt: "Penyaluran bingkisan kebaikan oleh relawan Jalan Langit Foundation kepada santriwati",
    },
    {
      id: "slide-5",
      src: "/images/hero/hero-02.webp",
      alt: "Keceriaan santriwati menerima paket berkah dari Jalan Langit Foundation",
    },
    {
      id: "slide-6",
      src: "/images/hero/hero-03.webp",
      alt: "Semarak kebersamaan santriwati penerima manfaat program Jalan Langit Foundation",
    },
    {
      id: "slide-7",
      src: "/images/hero/hero-04.webp",
      alt: "Senyum syukur santri binaan Jalan Langit Foundation",
    },
    {
      id: "slide-8",
      src: "/images/hero/hero-05.webp",
      alt: "Kolaborasi hangat relawan bersama santri penerima paket kebaikan Jalan Langit Foundation",
    },
  ] satisfies HeroSlide[],
};
