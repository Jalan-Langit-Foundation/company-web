import type { Metadata, Viewport } from "next";
import { Poppins, Lato, Caveat } from "next/font/google";
import { Navbar, Footer, FloatingCtaBar, FloatingWhatsappButton } from "@/components/layout";
import { PageLoader } from "@/components/ui/page-loader";
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
  title: "Jalan Langit Foundation | Bergandengan Langitkan Kebaikan",
  description:
    "Situs resmi Yayasan Jalan Langit (Jalan Langit Foundation) - #BergandenganLangitkanKebaikan",
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
