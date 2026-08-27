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
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
      alt: "Penyaluran bantuan nutrisi dan kebersamaan santri pelosok",
    },
    {
      id: "slide-2",
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop",
      alt: "Pendidikan, dakwah, dan keceriaan anak-anak penerima manfaat",
    },
    {
      id: "slide-3",
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop",
      alt: "Optimalisasi dana infak dan sedekah untuk program kemanusiaan",
    },
    {
      id: "slide-4",
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1600&auto=format&fit=crop",
      alt: "Aktivitas gotong royong dan aksi nyata relawan kebaikan",
    },
    {
      id: "slide-5",
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop",
      alt: "Program santunan dan pembinaan santri penghafal Al-Qur'an",
    },
  ] satisfies HeroSlide[],
};
