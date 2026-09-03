import type { Metadata, Viewport } from "next";
import { Poppins, Lato } from "next/font/google";
import { Navbar, Footer, FloatingCtaBar, FloatingWhatsappButton } from "@/components/layout";
import { PageLoader } from "@/components/ui/page-loader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="id" className={`${poppins.variable} ${lato.variable}`} suppressHydrationWarning>
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

