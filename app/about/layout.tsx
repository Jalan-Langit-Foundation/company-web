import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Jalan Langit Foundation",
  description:
    "Pelajari lebih lanjut tentang visi, misi, nilai, dan tim Yayasan Jalan Langit dalam menebarkan kebaikan.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}
