import { SITE_CONFIG } from "@/lib/data/site";

export const FINAL_CTA_CONFIG = {
  headline: {
    line1: "Mari Bergandeng &",
    line2: "Langitkan Kebaikan",
  },
  description:
    "Bersama JLF, kontribusimu menjadi dampak nyata bagi ribuan penerima manfaat. Bergabunglah sebagai donatur, mitra program, atau relawan kami.",
  primaryAction: {
    label: "Hubungi Kami",
    href: "/contact",
  },
  secondaryAction: {
    label: "Donasi Sekarang",
    href: SITE_CONFIG.contact.donationUrl,
    isExternal: true,
  },
};
