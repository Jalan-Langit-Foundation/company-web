import { SITE_CONFIG } from "@/lib/data/site";

export const FINAL_CTA_CONFIG = {
  headline: {
    line1: "Mari Bergandengan &",
    line2: "Langitkan Kebaikan",
  },
  description:
    "Setiap orang punya cara untuk berbuat baik.\nDana, waktu, tenaga, keahlian, jaringan, atau kepedulian, semuanya dapat menjadi bagian dari sebuah perubahan.\nMari temukan cara kita untuk bergerak bersama dan menghadirkan dampak nyata bagi lebih banyak orang.",
  primaryAction: {
    label: "Donasi Sekarang",
    href: SITE_CONFIG.contact.donationUrl,
    isExternal: true,
  },
  secondaryAction: {
    label: "Berkolaborasi",
    href: "https://api.whatsapp.com/send/?phone=628999979400&text=Assalamualaikum+kak+Tedi%2C+saya+ingin+berkolaborasi&type=phone_number&app_absent=0",
    isExternal: true,
  },
  csAction: {
    label: "Chat Customer Service",
    href: "https://wa.me/6285173473189?text=Assalamualaikum%20kak%20Ayu%2C%20saya%20ingin%20bertanya%20seputar%20program%20kebaikan%20boleh%3F",
    isExternal: true,
  },
};
