import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Articles | Jalan Langit Foundation",
  description:
    "Kabar terbaru, artikel, dan dokumentasi kegiatan aksi sosial dari Yayasan Jalan Langit.",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}
