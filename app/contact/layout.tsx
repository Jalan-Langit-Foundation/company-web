import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Jalan Langit Foundation",
  description:
    "Hubungi Yayasan Jalan Langit untuk kolaborasi, donasi, atau informasi kemitraan.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}
