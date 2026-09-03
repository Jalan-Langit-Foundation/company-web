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
    href: "https://wa.me/6285173473189?text=Halo%20Jalan%20Langit%20Foundation,%20saya%20ingin%20berkolaborasi",
    isExternal: true,
  },
};

