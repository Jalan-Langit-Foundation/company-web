"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NAVBAR_LINKS, SITE_CONFIG } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<Record<string, boolean>>({});

  // Close menus on route change
  React.useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle scroll effect for elevation
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (href: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        isScrolled
          ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-b border-slate-100/80"
          : "shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-slate-100"
      )}
    >
      <Container size="xl" as="nav" aria-label="Navigasi Utama">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Sisi Kiri: Logo */}
          <Link
            href="/"
            className="group flex items-center transition-transform duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8] rounded-lg"
            aria-label="Beranda Yayasan Jalan Langit"
          >
            <Image
              src="/images/logo-navbar.png"
              alt="Logo Yayasan Jalan Langit"
              width={140}
              height={34}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Bagian Tengah: Desktop Navigation Links */}
          <ul className="hidden md:flex h-full items-center gap-7 list-none m-0 p-0">
            {NAVBAR_LINKS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href)) ||
                (item.children?.some(
                  (child) => pathname === child.href || (child.href !== "/" && pathname.startsWith(child.href))
                ) ?? false);

              if (hasChildren) {
                const isMenuOpen = activeDropdown === item.href;

                return (
                  <li
                    key={item.href}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setActiveDropdown(item.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 font-['Poppins',sans-serif] leading-none py-2 px-1",
                        "hover:text-[#3C95C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8] rounded-md",
                        isActive ? "text-[#3C95C8]" : "text-[#555555]"
                      )}
                      aria-expanded={isMenuOpen}
                      aria-haspopup="true"
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="inline-block leading-none">{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 shrink-0 transition-transform duration-200 opacity-70",
                          isMenuOpen ? "rotate-180 text-[#3C95C8]" : ""
                        )}
                        aria-hidden="true"
                      />
                    </Link>

                    {/* Desktop Dropdown Panel (Sejajar Kiri Navlink & Tepat di Bawah Navbar) */}
                    <div
                      className={cn(
                        "absolute left-0 top-full pt-1.5 w-72 transition-all duration-200 z-50",
                        isMenuOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="bg-white rounded-2xl p-2 shadow-xl border border-slate-100 ring-1 ring-black/5 flex flex-col gap-1">
                        {item.children?.map((child) => {
                          const isChildActive = pathname === child.href;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex flex-col px-3.5 py-2.5 rounded-xl transition-colors group",
                                isChildActive
                                  ? "bg-[#EAF5FB]"
                                  : "hover:bg-[#EAF5FB]/70"
                              )}
                            >
                              <span
                                className={cn(
                                  "text-sm font-medium transition-colors font-['Poppins',sans-serif]",
                                  isChildActive
                                    ? "text-[#3C95C8] font-semibold"
                                    : "text-[#2C2C2C] group-hover:text-[#3C95C8]"
                                )}
                              >
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-xs text-[#777777] group-hover:text-[#555555] transition-colors mt-0.5 line-clamp-1 font-['Lato',sans-serif]">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href} className="h-full flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center text-sm font-medium transition-colors duration-200 font-['Poppins',sans-serif] leading-none py-2 px-1",
                      "hover:text-[#3C95C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8] rounded-md",
                      isActive ? "text-[#3C95C8]" : "text-[#555555]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="inline-block leading-none">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Sisi Kanan: Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="md"
                href={SITE_CONFIG.contact.donationUrl}
                external
                leftIcon={<Heart className="w-4 h-4 fill-white/20" />}
                className="shadow-sm hover:shadow-md transition-all font-semibold"
              >
                Donasi Sekarang
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex md:hidden items-center justify-center p-2 rounded-xl text-[#555555]",
                "hover:text-[#3C95C8] hover:bg-[#EAF5FB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8]"
              )}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100",
            isOpen ? "max-h-[80vh] overflow-y-auto pb-6 pt-4 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
          )}
        >
          <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
            {NAVBAR_LINKS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href)) ||
                (item.children?.some(
                  (child) => pathname === child.href || (child.href !== "/" && pathname.startsWith(child.href))
                ) ?? false);

              if (hasChildren) {
                const isExpanded = mobileExpanded[item.href] ?? isActive;

                return (
                  <li key={item.href} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex-1 px-4 py-2.5 rounded-xl text-base font-medium transition-colors font-['Poppins',sans-serif]",
                          isActive
                            ? "text-[#3C95C8] font-semibold"
                            : "text-[#555555] hover:text-[#3C95C8]"
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.href)}
                        className="p-2.5 text-[#555555] hover:text-[#3C95C8] focus:outline-none"
                        aria-label={`Toggle submenu ${item.label}`}
                      >
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isExpanded ? "rotate-180 text-[#3C95C8]" : ""
                          )}
                        />
                      </button>
                    </div>

                    {/* Mobile Submenu Items */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200 pl-4 flex flex-col gap-1 border-l-2 border-[#3C95C8]/20 ml-4",
                        isExpanded ? "max-h-96 py-1 opacity-100" : "max-h-0 py-0 opacity-0"
                      )}
                    >
                      {item.children?.map((child) => {
                        const isChildActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "px-3 py-2 rounded-lg text-sm transition-colors font-['Poppins',sans-serif]",
                              isChildActive
                                ? "bg-[#EAF5FB] text-[#3C95C8] font-semibold"
                                : "text-[#555555] hover:bg-slate-50 hover:text-[#3C95C8]"
                            )}
                          >
                            <div>{child.label}</div>
                            {child.description && (
                              <div className="text-xs text-[#888888] font-normal font-['Lato',sans-serif]">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-2.5 rounded-xl text-base font-medium transition-colors font-['Poppins',sans-serif]",
                      isActive
                        ? "bg-[#EAF5FB] text-[#3C95C8]"
                        : "text-[#555555] hover:bg-slate-50 hover:text-[#3C95C8]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-3 border-t border-slate-100 px-1">
            <Button
              variant="primary"
              size="md"
              href={SITE_CONFIG.contact.donationUrl}
              external
              leftIcon={<Heart className="w-4 h-4 fill-white/20" />}
              rightIcon={<ExternalLink className="w-3.5 h-3.5 opacity-70" />}
              className="w-full justify-center shadow-sm font-semibold py-3"
            >
              Donasi Sekarang
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
