import { FoundationContact } from "@/types";

export const SITE_CONFIG = {
  name: "Jalan Langit Foundation",
  legalName: "Yayasan Jalan Langit",
  tagline: "#BergandenganLangitkanKebaikan",
  description:
    "NGO Muslim Indonesia yang menghadirkan program kebaikan bernilai dan berdampak berkelanjutan melalui optimalisasi dana infak, sedekah, dan kemanusiaan.",
  contact: {
    email: "jalanlangitfoundation@gmail.com",
    address: {
      text: "Jl. Saturnus Tengah I No.1, Manjahlega, Rancasari, Bandung 40286",
      mapsUrl: "https://maps.app.goo.gl/bPVZ75H55M8tGzzk8",
    },
    instagram: {
      handle: "@jalanlangit.official",
      url: "https://instagram.com/jalanlangit.official",
    },
    donationUrl: "https://yayasanjalanlangitpeduli.amalsholeh.com/",
  } satisfies FoundationContact,
  socialLinks: [
    {
      name: "Instagram",
      href: "https://instagram.com/jalanlangit.official",
      isExternal: true,
    },
    {
      name: "Email",
      href: "mailto:jalanlangitfoundation@gmail.com",
      isExternal: true,
    },
    {
      name: "Alamat",
      href: "https://maps.app.goo.gl/bPVZ75H55M8tGzzk8",
      isExternal: true,
    },
  ],
};
