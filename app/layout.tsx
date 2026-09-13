import type { Metadata, Viewport } from "next";
import { Poppins, Lato, Caveat } from "next/font/google";
import { Navbar, Footer, FloatingCtaBar, FloatingWhatsappButton } from "@/components/layout";
import { PageLoader } from "@/components/ui/page-loader";
import { SITE_CONFIG } from "@/lib/data";
import "./fonts.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Bergandengan Langitkan Kebaikan`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Jalan Langit Foundation",
    "Yayasan Jalan Langit",
    "Langit Box",
    "Jalan Langit Scholarship",
    "Sedekah Santri Bandung",
    "Donasi Pesantren Jawa Barat",
    "Zakat Bandung",
    "Infaq Shadaqah",
    "Lembaga Sosial Bandung",
    "NGO Muslim Indonesia",
    "Aksi Kemanusiaan Bandung",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Bergandengan Langitkan Kebaikan`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/logo/logo-navbar.png",
        width: 800,
        height: 200,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Bergandengan Langitkan Kebaikan`,
    description: SITE_CONFIG.description,
    images: ["/images/logo/logo-navbar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_CONFIG.name,
  legalName: SITE_CONFIG.legalName,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logo/logo-navbar.png`,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Saturnus Tengah I No.1, Manjahlega, Rancasari",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    postalCode: "40286",
    addressCountry: "ID",
  },
  sameAs: [
    SITE_CONFIG.contact.instagram.url,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${poppins.variable} ${lato.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <PageLoader />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingCtaBar />
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
