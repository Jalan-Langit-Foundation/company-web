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
        label: "#HadiahKebahagiaan",
        href: "/programs/hadiah-kebahagiaan",
        description: "Bantuan kebahagiaan untuk anak yatim dan dhuafa",
      },
      {
        label: "#LangitkanIlmu",
        href: "/programs/langitkan-ilmu",
        description: "Beasiswa dan sarana pendidikan pelosok",
      },
      {
        label: "#TemuKebaikan",
        href: "/programs/temu-kebaikan",
        description: "Aksi kemanusiaan tanggap darurat dan logistik",
      },
      {
        label: "#PeduliSesama",
        href: "/programs/peduli-sesama",
        description: "Pemberdayaan sosial & ekonomi umat",
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
  { label: "#HadiahKebahagiaan", href: "/programs#hadiah-kebahagiaan" },
  { label: "#LangitkanIlmu", href: "/programs#langitkan-ilmu" },
  { label: "#TemuKebaikan", href: "/programs#temu-kebaikan" },
  { label: "#PeduliSesama", href: "/programs#peduli-sesama" },
];

export const FOOTER_ORGANIZATION_LINKS: NavLink[] = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Visi & Misi", href: "/about#visi-misi" },
  { label: "Core Values", href: "/about#core-values" },
  { label: "Sejarah", href: "/about#sejarah" },
  { label: "Mitra", href: "/about#mitra" },
];
