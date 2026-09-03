export interface FeaturedVideo {
  id: string;
  title: string;
  description: string;
  category: "Semua" | "Dokumentasi Program" | "Pendidikan Santri" | "Aksi Relawan" | "Kisah Nyata";
  duration: string;
  youtubeId: string;
  thumbnail: string;
  publishedDate?: string;
  views?: string;
}

export const FEATURED_VIDEOS_DATA: {
  eyebrow: string;
  headline: {
    prefix: string;
    highlight: string;
  };
  supportingCopy: string;
  youtubeChannelUrl: string;
  videos: FeaturedVideo[];
} = {
  eyebrow: "DOKUMENTASI KEBAIKAN",
  headline: {
    prefix: "Merekam Senyum,",
    highlight: "Melangitkan Harapan",
  },
  supportingCopy:
    "Setiap senyum santri dan penerima manfaat adalah doa yang terus dilangitkan untuk kebaikan bersama.",
  youtubeChannelUrl: "https://www.youtube.com/@JalanLangitFoundation",
  videos: [
    {
      id: "vid-8HODgDfVp5I",
      title: "Setahun Melangitkan Kebaikan",
      description:
        "Satu tahun perjalanan, ribuan kebaikan, satu niat yang terus dijaga bersama Jalan Langit Foundation.",
      category: "Dokumentasi Program",
      duration: "02:36",
      youtubeId: "8HODgDfVp5I",
      thumbnail: "https://i.ytimg.com/vi/8HODgDfVp5I/hqdefault.jpg",
      publishedDate: "Januari 2026",
      views: "1.2K",
    },
    {
      id: "vid-oJ3ZsWIKvzQ",
      title: "Menuju Santri Qura'ni Berdaya | Langit Scholarship",
      description:
        "Langit Scholarship: Para santri tidak hanya menghafal Al-Qur'an tapi juga dibina kemandirian dan keterampilannya.",
      category: "Pendidikan Santri",
      duration: "02:52",
      youtubeId: "oJ3ZsWIKvzQ",
      thumbnail: "https://i.ytimg.com/vi/oJ3ZsWIKvzQ/hqdefault.jpg",
      publishedDate: "Februari 2026",
      views: "2.5K",
    },
    {
      id: "vid-AQMKUIV_yBQ",
      title: "SERASI: Sehari Bersama Santri | Cooking Class Penuh Kebahagiaan di Almaz Fried Chicken",
      description:
        "Keseruan santri dalam program SERASI belajar memasak, berkreasi, dan berbagi tawa hangat bersama para relawan.",
      category: "Aksi Relawan",
      duration: "01:45",
      youtubeId: "AQMKUIV_yBQ",
      thumbnail: "https://i.ytimg.com/vi/AQMKUIV_yBQ/hqdefault.jpg",
      publishedDate: "November 2025",
      views: "1.8K",
    },
    {
      id: "vid-29frDXS8HAs",
      title: "Langit Box: Hadiah Kebahagiaan untuk Mereka yang Menjaga Qur’an",
      description:
        "Di balik setiap kotak Langit Box, ada doa tulus dan senyum syukur santri penghafal Qur'an di pelosok.",
      category: "Dokumentasi Program",
      duration: "02:33",
      youtubeId: "29frDXS8HAs",
      thumbnail: "https://i.ytimg.com/vi/29frDXS8HAs/hqdefault.jpg",
      publishedDate: "November 2025",
      views: "3.2K",
    },
    {
      id: "vid-SL7di9QIH_4",
      title: "Hadiah Kebahagiaan #1 | Untuk Mereka yang Bekerja Demi Keluarga",
      description:
        "Apresiasi paket sembako dan kebahagiaan untuk pejuang nafkah tangguh yang gigih berikhtiar menafkahi keluarga.",
      category: "Kisah Nyata",
      duration: "03:28",
      youtubeId: "SL7di9QIH_4",
      thumbnail: "https://i.ytimg.com/vi/SL7di9QIH_4/hqdefault.jpg",
      publishedDate: "Januari 2026",
      views: "4.1K",
    },
    {
      id: "vid-RKjNpKEJ1GM",
      title: "Implementasi Zakat Kepada Warga Desa Pangguh, Kec. Ibun, Kab. Bandung",
      description:
        "Penyaluran amanah zakat secara langsung menyusuri perbukitan demi meringankan beban warga prasejahtera.",
      category: "Dokumentasi Program",
      duration: "02:22",
      youtubeId: "RKjNpKEJ1GM",
      thumbnail: "https://i.ytimg.com/vi/RKjNpKEJ1GM/hqdefault.jpg",
      publishedDate: "Juni 2026",
      views: "1.5K",
    },
    {
      id: "vid-Sxif8Co6W24",
      title: "Volunteer Series #01 | Dari Host Live Streaming ke Relawan Langit Box",
      description:
        "Kisah inspiratif relawan muda yang mendedikasikan waktu dan energinya untuk langsung terjun berbagi di lapangan.",
      category: "Aksi Relawan",
      duration: "02:23",
      youtubeId: "Sxif8Co6W24",
      thumbnail: "https://i.ytimg.com/vi/Sxif8Co6W24/hqdefault.jpg",
      publishedDate: "November 2025",
      views: "2.1K",
    },
    {
      id: "vid-nh4m7OADGcc",
      title: "Ketika Ilmu Mengubah Arah Hidup — Kisah Abdul Aziz dan Langit Scholarship",
      description:
        "Perjalanan Abdul Aziz menemukan arah dan harapan baru melalui program beasiswa pembinaan santri berdaya.",
      category: "Pendidikan Santri",
      duration: "03:20",
      youtubeId: "nh4m7OADGcc",
      thumbnail: "https://i.ytimg.com/vi/nh4m7OADGcc/hqdefault.jpg",
      publishedDate: "November 2025",
      views: "1.9K",
    },
    {
      id: "vid-HfBwDozt9ro",
      title: "Mengenal Berbagai Macam Satwa Bersama Santri | Highlight SERASi Goes To Lembang Park & Zoo",
      description:
        "Momen edukasi dan rekreasi santri binaan mengenal keanekaragaman satwa dalam kebersamaan yang penuh kegembiraan.",
      category: "Aksi Relawan",
      duration: "03:09",
      youtubeId: "HfBwDozt9ro",
      thumbnail: "https://i.ytimg.com/vi/HfBwDozt9ro/hqdefault.jpg",
      publishedDate: "Februari 2026",
      views: "2.8K",
    },
    {
      id: "vid-cXx0wPJ-fG8",
      title: "Harapan yang Kembali Berdiri | Pembangunan Pondok Terdampak Kebakaran",
      description:
        "Gotong royong membangun kembali ruang tahfidz santri yang sempat terbakar agar syiar Qur'an terus menyala.",
      category: "Dokumentasi Program",
      duration: "01:21",
      youtubeId: "cXx0wPJ-fG8",
      thumbnail: "https://i.ytimg.com/vi/cXx0wPJ-fG8/hqdefault.jpg",
      publishedDate: "November 2025",
      views: "1.7K",
    },
  ],
};
