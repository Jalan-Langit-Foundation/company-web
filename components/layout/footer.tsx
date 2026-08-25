import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  SITE_CONFIG,
  FOOTER_PROGRAM_LINKS,
  FOOTER_ORGANIZATION_LINKS,
} from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2C2C2C] text-[#A0A0A0] font-['Lato',sans-serif]">
      {/* Main Footer Content */}
      <Container size="xl" className="pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Kolom 1: Profil Brand & Deskripsi */}
          <div className="flex flex-col gap-4 lg:col-span-4 lg:pr-6">
            <Link
              href="/"
              className="inline-flex items-center text-base sm:text-lg font-bold tracking-wider uppercase font-['Poppins',sans-serif] transition-opacity hover:opacity-90 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EB6D6] rounded-md"
              aria-label="Beranda Yayasan Jalan Langit"
            >
              <span className="text-white">JALAN</span>
              <span className="text-[#6EB6D6]">LANGIT</span>
              <span className="text-white ml-1.5">FOUNDATION</span>
            </Link>

            <p className="text-sm leading-relaxed text-[#A0A0A0] max-w-sm">
              {SITE_CONFIG.description}
            </p>

            {/* Social Media Pill Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {SITE_CONFIG.socialLinks.map((social) => (
                social.isExternal ? (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium font-['Poppins',sans-serif] hover:bg-[#3C95C8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EB6D6]"
                  >
                    {social.name}
                  </a>
                ) : (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium font-['Poppins',sans-serif] hover:bg-[#3C95C8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EB6D6]"
                  >
                    {social.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Sisi Kanan: 3 Kolom Navigasi (Program, Organisasi, Kontak) dengan Gap Seragam */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 lg:col-span-8">
            {/* Kolom 2: Program */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase font-['Poppins',sans-serif]">
                PROGRAM
              </h4>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
                {FOOTER_PROGRAM_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#A0A0A0] hover:text-[#6EB6D6] transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3: Organisasi */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase font-['Poppins',sans-serif]">
                ORGANISASI
              </h4>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
                {FOOTER_ORGANIZATION_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#A0A0A0] hover:text-[#6EB6D6] transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 4: Kontak */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase font-['Poppins',sans-serif]">
                KONTAK
              </h4>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-[#A0A0A0] hover:text-[#6EB6D6] transition-colors break-all inline-block"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.contact.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A0A0A0] hover:text-[#6EB6D6] transition-colors inline-block"
                  >
                    {SITE_CONFIG.contact.instagram.handle}
                  </a>
                </li>
                <li>
                  <span className="text-[#A0A0A0] leading-relaxed inline-block">
                    {SITE_CONFIG.contact.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar: Copyright & Tagline */}
      <div className="border-t border-white/10">
        <Container size="xl" className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A8A]">
            <p>© {currentYear} {SITE_CONFIG.name}. Semua hak dilindungi.</p>
            <p className="font-bold text-[#6EB6D6] font-['Poppins',sans-serif] tracking-wide">
              {SITE_CONFIG.tagline}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
