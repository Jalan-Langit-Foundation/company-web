import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Initiatives | Jalan Langit Foundation",
  description:
    "Jelajahi program-program sosial, pendidikan, dan kemanusiaan dari Yayasan Jalan Langit.",
};

export default function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}
