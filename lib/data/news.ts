export interface NewsTableRow {
  label: string;
  value: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  beneficiaries: string;
  program: string;
  excerpt: string;
  content: string[]; // tiap elemen array = 1 paragraf
  table?: {
    rows: NewsTableRow[];
    totalLabel: string;
    totalValue: string;
  };
  ctaText: string;
  ctaButtonLabel: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    id: "serasi-dufan",
    title:
      "Sehari Bersama Santri: Menghadirkan Kebahagiaan dan Pengalaman Baru melalui Program SERASI",
    category: "Kolaborasi",
    date: "6 Agustus 2026",
    location: "Jakarta",
    beneficiaries: "80 santri",
    program: "SERASI — Sehari Bersama Santri",
    excerpt:
      "Sebanyak 80 santri mengikuti Program SERASI di Dunia Fantasi dan SeaWorld Jakarta, menikmati pengalaman rekreatif, edukatif, dan kebersamaan yang menjadi kenangan berharga bagi mereka.",
    content: [
      "Jakarta, 6 Agustus 2026 — Program SERASI (Sehari Bersama Santri) kembali menghadirkan ruang kebahagiaan bagi para santri melalui pengalaman yang berbeda dari keseharian mereka di lingkungan pesantren.",
      "Bagi Jalan Langit Foundation (JLF), SERASI bukan sekadar perjalanan wisata atau agenda rekreasi. Program ini dirancang untuk memberikan kesempatan kepada para santri untuk mendapatkan pengalaman baru, memperluas wawasan di luar lingkungan pesantren, sekaligus menciptakan kenangan indah yang dapat mereka bawa pulang.",
      "Sebanyak 80 santri mengikuti kegiatan yang dilaksanakan di Dunia Fantasi (Dufan) dan SeaWorld Jakarta. Sejak pagi, antusiasme telah terasa dalam perjalanan menuju lokasi. Keceriaan semakin terlihat ketika para santri mulai mengeksplorasi berbagai wahana dalam kelompok-kelompok kecil.",
      "Berbagai pengalaman menjadi bagian dari perjalanan tersebut. Mulai dari keberanian mencoba wahana permainan untuk pertama kalinya, berbagi tawa dan kegembiraan bersama teman-teman, hingga menikmati pengalaman edukatif dengan melihat beragam kehidupan laut di SeaWorld.",
      "Lebih dari sekadar hiburan, momen-momen tersebut menjadi kesempatan bagi para santri untuk menikmati masa muda mereka dalam suasana yang penuh kebersamaan dan kepedulian.",
      "Selama kegiatan berlangsung, para santri mendapatkan pendampingan dari tim JLF bersama para mitra yang turut mendukung pelaksanaan program. Kebersamaan kemudian ditutup dengan makan bersama dan pembagian bingkisan sederhana sebagai kenang-kenangan.",
      "Senyum lebar dan rasa terima kasih yang disampaikan para santri menjadi salah satu momen paling berkesan dari perjalanan ini. Bagi JLF, pengalaman tersebut menjadi pengingat bahwa kebahagiaan sederhana dapat menghadirkan dampak yang mendalam, terutama ketika diberikan melalui kepedulian dan kebersamaan.",
      "Melalui SERASI, JLF berharap dapat terus menghadirkan ruang bagi para santri untuk belajar, bermain, dan menikmati pengalaman baru — sekaligus merasakan bahwa ada banyak pihak yang peduli dan berjalan bersama mereka.",
      "Karena setiap anak berhak memiliki cerita indah untuk dikenang.",
    ],
    ctaText:
      "Mari terus bergandengan tangan untuk menghadirkan lebih banyak pengalaman bermakna bagi para santri.",
    ctaButtonLabel: "Dukung Program SERASI",
    image: "/images/news/serasi-dufan.jpg",
  },
  {
    id: "langit-box-192",
    title: "Langit Box Salurkan 265 Nasi Box untuk Santri di 7 Pondok di Bandung",
    category: "Kebutuhan Pangan",
    date: "13 Agustus 2026",
    location: "Bandung",
    beneficiaries: "265 santri",
    program: "Langit Box",
    excerpt:
      "Melalui program Langit Box, sebanyak 265 nasi box disalurkan kepada santri di tujuh pondok di Bandung untuk mendukung kebutuhan berbuka puasa sunnah Kamis.",
    content: [
      "Bandung, 13 Agustus 2026 — Jalan Langit Foundation kembali menyalurkan bantuan pangan melalui program Langit Box. Pada penyaluran kali ini, sebanyak 265 nasi box diberikan kepada para santri yang tersebar di tujuh pondok di wilayah Bandung.",
      "Bantuan ini ditujukan untuk mendukung kebutuhan konsumsi para santri dalam kegiatan berbuka puasa sunnah Kamis. Melalui Langit Box, JLF berupaya menghadirkan bantuan pangan yang sederhana namun dapat dirasakan secara langsung oleh penerima manfaat.",
      "Penyaluran dilakukan sebagai bagian dari komitmen JLF untuk terus mendukung kebutuhan para santri melalui bantuan yang dekat dengan keseharian mereka.",
      "Bagi sebagian orang, satu kotak makanan mungkin terlihat sederhana. Namun bagi penerimanya, bantuan tersebut dapat menjadi bentuk perhatian yang nyata — terlebih ketika diberikan pada waktu yang tepat dan dibutuhkan.",
      "Melalui Langit Box, JLF ingin terus mempertemukan kebaikan dari para donatur dengan kebutuhan masyarakat secara langsung. Setiap nasi box yang tersalurkan bukan hanya tentang makanan, tetapi juga tentang pesan bahwa masih ada kepedulian yang hadir dan berbagi bersama mereka.",
      "JLF mengucapkan terima kasih kepada seluruh pihak yang telah mengambil bagian dalam penyaluran ini. Semoga setiap kebaikan yang diberikan dapat terus melahirkan manfaat dan menjadi bagian dari keberlanjutan gerakan kebaikan bersama.",
      "Satu kotak kebaikan, satu bentuk kepedulian yang sampai kepada mereka yang membutuhkan.",
    ],
    table: {
      rows: [
        { label: "PTQ Maqdis", value: "49 pax" },
        { label: "Daarul Adzkar Uber", value: "33 pax" },
        { label: "Daarul Adzkar Bubat", value: "27 pax" },
        { label: "PTQ Al Qolam", value: "23 pax" },
        { label: "Nurul Ilmi", value: "50 pax" },
        { label: "Pondok Madinatul Ulum Metro", value: "57 pax" },
        { label: "RTQ Madinatul Husaini", value: "26 pax" },
      ],
      totalLabel: "Total",
      totalValue: "265 pax",
    },
    ctaText: "Mari terus berbagi melalui Langit Box dan hadirkan manfaat dari hal sederhana.",
    ctaButtonLabel: "Dukung Langit Box",
    image: "/images/news/langit-box-192.jpg",
  },
];

export function getNewsById(id: string): NewsItem | undefined {
  return news.find((n) => n.id === id);
}