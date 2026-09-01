export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryKey: "all" | "pangan" | "pendidikan" | "sosial";
  badge: string;
  description: string;
  highlightTag: string;
  image: string;
  donationUrl: string;
  isFlagship?: boolean;
}

export const PROGRAMS_SECTION_DATA: {
  eyebrow: string;
  headline: {
    prefix: string;
    highlight: string;
  };
  supportingCopy: string;
  viewAllText: string;
  viewAllUrl: string;
  categories: {
    key: "all" | "pangan" | "pendidikan" | "sosial";
    label: string;
  }[];
  programs: ProgramItem[];
} = {
  eyebrow: "PROGRAM KAMI",
  headline: {
    prefix: "Program Kebaikan",
    highlight: "Jalan Langit Foundation",
  },
  supportingCopy:
    "Setiap program dirancang untuk menghadirkan kebermanfaatan yang nyata dan berkelanjutan bagi penerima manfaat.",
  viewAllText: "Lihat Semua Program",
  viewAllUrl: "/programs",
  categories: [
    { key: "all", label: "Semua Program" },
    { key: "pangan", label: "Pangan & Nutrisi" },
    { key: "pendidikan", label: "Pendidikan & Santri" },
    { key: "sosial", label: "Zakat & Kemanusiaan" },
  ],
  programs: [
    {
      id: "prog-langit-box",
      slug: "langit-box",
      title: "Langit Box",
      category: "Pangan & Nutrisi",
      categoryKey: "pangan",
      badge: "Rutin Buka Puasa",
      description:
        "Program distribusi pangan dan nutrisi tambahan berupa buah dan susu yang diperuntukkan bagi anak sekolah, yatim, dhuafa, dan hamba pilihan Allah. Penyaluran dilakukan rutin pada momen buka puasa sunnah Senin dan Kamis.",
      highlightTag: "Pangan & Nutrisi",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/langit-box",
      isFlagship: true,
    },
    {
      id: "prog-langit-scholarship",
      slug: "langit-scholarship",
      title: "Langit Scholarship",
      category: "Pendidikan Santri",
      categoryKey: "pendidikan",
      badge: "Beasiswa 1 Tahun",
      description:
        "Program beasiswa dan pembinaan terpadu selama satu tahun bagi pelajar untuk membentuk generasi Qur’ani yang kuat dalam hafalan, unggul dalam akhlak, terampil dalam soft skill, dan memiliki kemandirian ekonomi.",
      highlightTag: "Generasi Qur'ani",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/langit-scholarship",
      isFlagship: true,
    },
    {
      id: "prog-serasi",
      slug: "serasi",
      title: "SERASI — Sehari Bersama Santri",
      category: "Event Edukasi",
      categoryKey: "pendidikan",
      badge: "Event Santri",
      description:
        "Program berbasis event yang bertujuan menghadirkan kebahagiaan dan pengalaman edukatif kepada anak dan pelajar melalui kegiatan menyenangkan seperti games, nonton bersama, dan rekreasi edukatif.",
      highlightTag: "Fun Learning & Edukasi",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/serasi",
    },
    {
      id: "prog-hadiah-kebahagiaan",
      slug: "hadiah-kebahagiaan",
      title: "Hadiah Kebahagiaan",
      category: "Sembako Pejuang",
      categoryKey: "pangan",
      badge: "Pejuang Nafkah",
      description:
        "Wujud apresiasi bagi para pejuang nafkah di jalanan. Hadiah Kebahagiaan menghadirkan paket sembako untuk menguatkan langkah para driver ojek online, pedagang kecil, dan keluarga prasejahtera yang terus berjuang tanpa menyerah.",
      highlightTag: "Apresiasi Pejuang Jalanan",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/hadiah-kebahagiaan",
    },
    {
      id: "prog-zakat",
      slug: "zakat",
      title: "Zakat",
      category: "Sosial & Zakat",
      categoryKey: "sosial",
      badge: "Zakat Fitrah & Maal",
      description:
        "Menyalurkan dana zakat secara tepat sasaran untuk menghadirkan perubahan nyata dan keberdayaan bagi sesama yang membutuhkan.",
      highlightTag: "Penyaluran Tepat Sasaran",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/zakat",
    },
    {
      id: "prog-jalan-langit-peduli",
      slug: "jalan-langit-peduli",
      title: "Jalan Langit Peduli",
      category: "Kemanusiaan & Bencana",
      categoryKey: "sosial",
      badge: "Tanggap Darurat",
      description:
        "Inisiatif aksi kemanusiaan dan tanggap bencana yang bergerak cepat menyalurkan bantuan darurat bagi saudara-saudara kita yang terdampak bencana alam dan krisis kemanusiaan.",
      highlightTag: "Aksi Tanggap Darurat",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/jalan-langit-peduli",
    },
  ],
};
