import type { Metadata, Viewport } from "next";
import { Navbar, Footer, FloatingCtaBar, FloatingWhatsappButton } from "@/components/layout";
import { PageLoader } from "@/components/ui/page-loader";
import "./fonts.css";
import "./globals.css";

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
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
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

