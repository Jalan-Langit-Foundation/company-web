export interface CollaborationItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  persona: string;
  description: string;
  highlight: string;
  keyPoints: string[];
  ctaText: string;
  ctaHref: string;
  iconName: "Building2" | "Users" | "HeartHandshake" | "GraduationCap";
  accentColor: {
    badgeBg: string;
    badgeText: string;
    border: string;
    glow: string;
  };
}

export const COLLABORATION_DATA = {
  eyebrow: "KOLABORASI KEBAIKAN",
  headline: {
    prefix: "Kebaikan Tumbuh",
    highlight: "Saat Kita Berjalan Bersama",
  },
  supportingCopy:
    "Kami percaya dampak yang lebih besar lahir dari kolaborasi. JLF membuka ruang bagi individu, komunitas, lembaga, perusahaan, dan berbagai pihak untuk bersama-sama menghadirkan kebermanfaatan.",
  globalCtas: {
    primary: {
      label: "Ajak Kolaborasi",
      href: "https://wa.me/6281234567890?text=Halo%20Jalan%20Langit%20Foundation,%20kami%20ingin%20mengajak%20kolaborasi",
    },
    secondary: {
      label: "Gabung Kebaikan",
      href: "https://wa.me/6281234567890?text=Halo%20Jalan%20Langit%20Foundation,%20saya%20ingin%20menjadi%20bagian%20dari%20kebaikan",
    },
  },
  items: [
    {
      id: "mitra-brand",
      number: "01",
      title: "Kolaborasi Mitra & Brand",
      subtitle: "CSR & Corporate Giving",
      persona: "Perusahaan & Korporasi",
      description:
        "Menggandeng pelaku usaha dan korporasi untuk menghadirkan dampak sosial yang nyata. Kami memfasilitasi program berbagi bagi karyawan hingga penyaluran dana CSR (Corporate Social Responsibility) secara transparan, akuntabel, dan tepat sasaran.",
      highlight:
        "Bersama JLF, setiap langkah bisnis Anda dapat menjadi jembatan kebaikan yang berkesinambungan.",
      keyPoints: [
        "Penyaluran CSR transparan & terukur",
        "Program employee giving & volunteerism",
        "Laporan akuntabilitas dampak sosial resmi",
      ],
      ctaText: "Ajukan Kemitraan CSR",
      ctaHref:
        "https://wa.me/6281234567890?text=Halo%20Jalan%20Langit%20Foundation,%20saya%20tertarik%20berkolaborasi%20program%20CSR%20Mitra/Brand",
      iconName: "Building2",
      accentColor: {
        badgeBg: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
        badgeText: "text-blue-700 dark:text-blue-300",
        border: "hover:border-blue-500/40",
        glow: "from-blue-500/15 via-transparent to-transparent",
      },
    },
    {
      id: "komunitas",
      number: "02",
      title: "Kolaborasi Komunitas",
      subtitle: "Community Partnership",
      persona: "Komunitas & Gerakan Sosial",
      description:
        "Bergerak bersama komunitas untuk memperluas jangkauan kebaikan. Baik melalui aksi fundraising kolektif maupun kolaborasi penyaluran program di lapangan—di mana JLF siap menopang kebutuhan pendanaan—kita menyatukan energi dan jaringan demi mengukir senyum di tengah masyarakat.",
      highlight:
        "Menyatukan energi dan jaringan komunitas demi kebaikan yang lebih luas.",
      keyPoints: [
        "Aksi fundraising kolektif & kampanye bersama",
        "Kolaborasi aksi penyaluran langsung di lapangan",
        "Dukungan pendanaan & logistik dari JLF",
      ],
      ctaText: "Kolaborasi Komunitas",
      ctaHref:
        "https://wa.me/6281234567890?text=Halo%20Jalan%20Langit%20Foundation,%20kami%20dari%20komunitas%20ingin%20berkolaborasi",
      iconName: "Users",
      accentColor: {
        badgeBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
        badgeText: "text-emerald-700 dark:text-emerald-300",
        border: "hover:border-emerald-500/40",
        glow: "from-emerald-500/15 via-transparent to-transparent",
      },
    },
    {
      id: "relawan",
      number: "03",
      title: "Relawan Kemanusiaan",
      subtitle: "Volunteering",
      persona: "Individu & Relawan Aktif",
      description:
        "Memanggil jiwa-jiwa peduli untuk mendedikasikan waktu, pikiran, dan energi terbaiknya. Sebagai bagian dari relawan JLF, Anda tidak hanya menjadi penggerak di lapangan, tetapi juga menjadi simpul harapan bagi saudara-saudara kita yang sedang berjuang.",
      highlight:
        "Mendedikasikan waktu dan energi terbaik untuk menjadi simpul harapan bagi sesama.",
      keyPoints: [
        "Turun langsung aksi ke lapangan & distribusi",
        "Pelatihan kerelawanan & pengalaman aksi sosial",
        "Jaringan relawan positif & penuh kebersamaan",
      ],
      ctaText: "Gabung Jadi Relawan",
      ctaHref:
        "https://wa.me/6281234567890?text=Halo%20Jalan%20Langit%20Foundation,%20saya%20ingin%20mendaftar%20sebagai%20Relawan%20JLF",
      iconName: "HeartHandshake",
      accentColor: {
        badgeBg: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
        badgeText: "text-amber-700 dark:text-amber-300",
        border: "hover:border-amber-500/40",
        glow: "from-amber-500/15 via-transparent to-transparent",
      },
    },
    {
      id: "magang",
      number: "04",
      title: "Program Magang Berdampak",
      subtitle: "Impactful Internship",
      persona: "Mahasiswa & Talenta Muda",
      description:
        "Wadah bagi mahasiswa dan talenta muda untuk mengasah potensi sekaligus bertumbuh dalam ekosistem kebaikan. Peserta magang dapat membangun portofolio profesional secara nyata baik di garis depan penyaluran lapangan maupun di balik layar melalui penguatan strategi CRM, IT, Web Development, dan manajemen program.",
      highlight:
        "Membangun portofolio profesional nyata di garis depan lapangan maupun digital & IT.",
      keyPoints: [
        "Portofolio nyata IT, Web Development, CRM & Media",
        "Pengalaman manajemen program & ekosistem sosial",
        "Sertifikat resmi magang & bimbingan mentor",
      ],
      ctaText: "Daftar Program Magang",
      ctaHref:
        "https://wa.me/6281234567890?text=Halo%20Jalan%20Langit%20Foundation,%20saya%20ingin%20mendaftar%20Program%20Magang%20Berdampak",
      iconName: "GraduationCap",
      accentColor: {
        badgeBg: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60",
        badgeText: "text-purple-700 dark:text-purple-300",
        border: "hover:border-purple-500/40",
        glow: "from-purple-500/15 via-transparent to-transparent",
      },
    },
  ] satisfies CollaborationItem[],
};
