export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  category: string;
  author: string;
  date: string;
  readTime?: string;
  image: string;
}

export const LATEST_NEWS_DATA: {
  headline: {
    prefix: string;
    highlight: string;
  };
  supportingCopy: string;
  viewAllText: string;
  viewAllUrl: string;
  mainFeatured: NewsArticle;
  subFeatured: NewsArticle[];
  recentList: NewsArticle[];
} = {
  headline: {
    prefix: "Kabar & Berita",
    highlight: "Jalan Langit Foundation",
  },
  supportingCopy:
    "Yuk, jadi yang paling tahu tentang aksi kemanusiaan, penyaluran program, dan kisah inspiratif terbaru kami.",
  viewAllText: "Lihat Semua Berita",
  viewAllUrl: "/news",

  mainFeatured: {
    id: "news-1",
    slug: "penyaluran-1000-paket-langit-box-santri",
    title: "Penyaluran 1.000 Paket Langit Box dan Nutrisi Tambahan untuk Santri Penghafal Al-Qur'an",
    category: "Pangan & Nutrisi",
    author: "Rizal Rahman",
    date: "Agu 28, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },

  subFeatured: [
    {
      id: "news-2",
      slug: "wisuda-akbar-langit-scholarship-2026",
      title: "Wisuda Akbar & Pembinaan 50 Penerima Beasiswa Langit Scholarship 2026",
      category: "Pendidikan",
      author: "Rizal Rahman",
      date: "Agu 26, 2026",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "news-3",
      slug: "aksi-tanggap-darurat-distribusi-bantuan-bencana",
      title: "Aksi Tanggap Darurat: Distribusi Bantuan Logistik & Air Bersih di Wilayah Terdampak",
      category: "Kemanusiaan",
      author: "Ahmad Fauzi",
      date: "Agu 24, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop",
    },
  ],

  recentList: [
    {
      id: "news-4",
      slug: "kolaborasi-mitra-korporasi-salurkan-sembako",
      title: "Kolaborasi Bersama Mitra Korporasi Salurkan 500 Paket Sembako Pejuang Nafkah",
      category: "Sembako",
      author: "Rizal Rahman",
      date: "Agustus 25, 2026",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "news-5",
      slug: "keseruan-event-serasi-bersama-santri-yatim",
      title: "Keseruan Event SERASI: Hadirkan Ruang Belajar Ceria dan Edukasi Santri Yatim",
      category: "Event Edukasi",
      author: "Sarah Amelia",
      date: "Agustus 23, 2026",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "news-6",
      slug: "laporan-akuntabilitas-penyaluran-zakat-agustus",
      title: "Laporan Akuntabilitas & Penyaluran Zakat Fitrah serta Maal Periode Agustus 2026",
      category: "Zakat",
      author: "Tim Keuangan JLF",
      date: "Agustus 21, 2026",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "news-7",
      slug: "pelatihan-wirausaha-mandiri-keluarga-dhuafa",
      title: "Inisiasi Program Pelatihan Wirausaha Mandiri bagi Keluarga Dhuafa Binaan",
      category: "Pemberdayaan",
      author: "Rizal Rahman",
      date: "Agustus 19, 2026",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "news-8",
      slug: "kisah-perjalanan-santri-meraih-prestasi-tahfizh",
      title: "Menyemai Harapan: Kisah Perjalanan Santri Binaan Raih Prestasi Tahfizh Nasional",
      category: "Inspirasi",
      author: "Tim Redaksi JLF",
      date: "Agustus 17, 2026",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
    },
  ],
};
