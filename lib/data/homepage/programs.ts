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
  headline: {
    prefix: string;
    highlight: string;
  };
  supportingCopy: string;
  categories: {
    key: "all" | "pangan" | "pendidikan" | "sosial";
    label: string;
  }[];
  programs: ProgramItem[];
} = {
  headline: {
    prefix: "Program Kebaikan",
    highlight: "Jalan Langit Foundation",
  },
  supportingCopy:
    "Setiap program dirancang untuk menghadirkan kebermanfaatan yang nyata dan berkelanjutan bagi penerima manfaat.",
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
        "Program distribusi paket pangan bergizi dan nutrisi tambahan berupa makanan siap saji, buah-buahan segar, dan susu untuk santri penghafal Al-Qur'an, anak yatim, dhuafa, serta para pejuang kebaikan pada momentum buka puasa sunnah rutin setiap hari Senin dan Kamis. Inisiatif ini hadir guna memastikan pemenuhan gizi yang seimbang serta menghadirkan kebahagiaan bagi mereka yang berpuasa.",
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
      badge: "Pembinaan 1 Tahun",
      description:
        "Program beasiswa pendidikan dan pembinaan komprehensif selama 1 tahun penuh yang dirancang khusus untuk mencetak generasi muda Qur'ani yang berkarakter kokoh. Melalui kurikulum tahfizh terarah, pelatihan kepemimpinan berakhlak mulia, serta penguatan keterampilan vokasi, kami mendampingi santri agar siap menjadi teladan umat yang mandiri secara ekonomi dan sosial.",
      highlightTag: "Generasi Qur'ani",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/langit-scholarship",
      isFlagship: true,
    },
    {
      id: "prog-serasi",
      slug: "serasi",
      title: "SERASI (Sehari Bersama Santri)",
      category: "Event Edukasi",
      categoryKey: "pendidikan",
      badge: "Event Santri",
      description:
        "Program edukasi interaktif dan rekreatif yang dirancang untuk menghadirkan kehangatan serta keceriaan bagi santri dan anak-anak yatim. Kegiatan ini menggabungkan sesi fun learning, workshop keterampilan kreatif, pemutaran video inspiratif, hingga permainan kelompok edukatif yang bertujuan menumbuhkan rasa percaya diri, memperluas wawasan kebangsaan, serta menguatkan ukhuwah.",
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
        "Wujud apresiasi dan kepedulian nyata berupa paket sembako lengkap dan bantuan kebutuhan pokok untuk meringankan beban para pejuang nafkah jalanan seperti pengemudi ojek online, buruh harian, pedagang kecil, dan keluarga prasejahtera. Program ini menjadi ikhtiar bersama dalam menjaga asa mereka yang terus gigih berjuang menjemput rezeki halal untuk keluarganya.",
      highlightTag: "Apresiasi Pejuang Jalanan",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/hadiah-kebahagiaan",
    },
    {
      id: "prog-zakat",
      slug: "zakat",
      title: "Zakat JLF",
      category: "Sosial & Zakat",
      categoryKey: "sosial",
      badge: "Zakat Fitrah & Maal",
      description:
        "Layanan pengelolaan dan pendistribusian dana zakat fitrah maupun zakat maal yang dilaksanakan secara profesional, transparan, dan sesuai syariat Islam. Kami memprioritaskan penyaluran tepat sasaran kepada delapan asnaf, dengan fokus pada program pemberdayaan ekonomi mustahik, perlindungan sosial fakir miskin, serta peningkatan kualitas taraf hidup penerima manfaat.",
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
        "Inisiatif aksi kemanusiaan dan tanggap bencana yang bergerak cepat menyalurkan bantuan darurat bagi saudara-saudara kita yang terdampak krisis kemanusiaan, bencana alam di berbagai pelosok tanah air, hingga solidaritas kemanusiaan untuk Palestina. Pendistribusian mencakup posko logistik makanan, tenda darurat, layanan medis kesehatan, serta pemulihan pascabencana.",
      highlightTag: "Aksi Tanggap Darurat",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop",
      donationUrl: "https://donasi.jalanlangit.org/campaign/jalan-langit-peduli",
    },
  ],
};
