import { NavLink } from "@/types";

export const NAVBAR_LINKS: NavLink[] = [
  { label: "Tentang Kami", href: "/about" },
  {
    label: "Program",
    href: "/programs",
    children: [
      {
        label: "Semua Program",
        href: "/programs",
        description: "Daftar seluruh program dan inisiatif kebaikan",
      },
      {
        label: "#LangitBox",
        href: "/programs/langit-box",
        description: "Pangan & nutrisi santri, yatim, dan dhuafa",
      },
      {
        label: "#LangitScholarship",
        href: "/programs/langit-scholarship",
        description: "Beasiswa dan pembinaan generasi Qur’ani",
      },
      {
        label: "#SERASI",
        href: "/programs/serasi",
        description: "Sehari Bersama Santri, event rekreasi edukatif",
      },
      {
        label: "#HadiahKebahagiaan",
        href: "/programs/hadiah-kebahagiaan",
        description: "Paket sembako bagi pejuang nafkah jalanan",
      },
      {
        label: "#Zakat",
        href: "/programs/zakat",
        description: "Optimalisasi penyaluran dana zakat berdaya",
      },
      {
        label: "#JalanLangitPeduli",
        href: "/programs/jalan-langit-peduli",
        description: "Aksi kemanusiaan tanggap darurat & bencana",
      },
    ],
  },
  {
    label: "Berita",
    href: "/news",
    children: [
      {
        label: "Semua Berita",
        href: "/news",
        description: "Kumpulan kabar dan update terkini",
      },
      {
        label: "Kabar Yayasan",
        href: "/news?category=kabar-yayasan",
        description: "Aktivitas dan laporan penyaluran kebaikan",
      },
      {
        label: "Cerita Inspiratif",
        href: "/news?category=inspirasi",
        description: "Kisah nyata penerima manfaat dan donatur",
      },
      {
        label: "Press Release",
        href: "/news?category=press-release",
        description: "Informasi dan rilis resmi kelembagaan",
      },
    ],
  },
  { label: "Kontak", href: "/contact" },
];

export const FOOTER_PROGRAM_LINKS: NavLink[] = [
  { label: "#LangitBox", href: "/programs#langit-box" },
  { label: "#LangitScholarship", href: "/programs#langit-scholarship" },
  { label: "#SERASI", href: "/programs#serasi" },
  { label: "#HadiahKebahagiaan", href: "/programs#hadiah-kebahagiaan" },
  { label: "#Zakat", href: "/programs#zakat" },
  { label: "#JalanLangitPeduli", href: "/programs#jalan-langit-peduli" },
];

export const FOOTER_ORGANIZATION_LINKS: NavLink[] = [
  { label: "Profil Yayasan", href: "/about" },
  { label: "Perjalanan Kami", href: "/about#perjalanan-kami" },
  { label: "Visi & Misi", href: "/about#visi-misi" },
  { label: "Core Values LANGIT", href: "/about#core-values" },
  { label: "Kontribusi SDGs", href: "/about#sdgs" },
  { label: "Legalitas Resmi", href: "/about#legalitas" },
];

