import { SITE_CONFIG } from "@/lib/data/site";

export const FINAL_CTA_CONFIG = {
  headline: {
    line1: "Mari Bergandengan &",
    line2: "Langitkan Kebaikan",
  },
  description:
    "Bersama JLF, kontribusimu dapat menjadi bagian dari dampak nyata bagi lebih banyak penerima manfaat.",
  primaryAction: {
    label: "Berdonasi",
    href: SITE_CONFIG.contact.donationUrl,
    isExternal: true,
  },
  secondaryAction: {
    label: "Berkolaborasi",
    href: "/contact",
    isExternal: false,
  },
};

