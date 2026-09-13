import { SITE_CONFIG } from "@/lib/data/site";

export const FINAL_CTA_CONFIG = {
  headline: {
    line1: "Mari Bergandengan &",
    line2: "Langitkan Kebaikan",
  },
  description:
    "Bersama JLF, kontribusimu dapat menjadi bagian dari dampak nyata bagi lebih banyak penerima manfaat.",
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
};
