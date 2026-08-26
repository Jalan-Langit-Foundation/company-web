"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/data";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "jlf_sticky_cta_dismissed";

export function FloatingCtaBar() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isDismissed, setIsDismissed] = React.useState(true); // default true until checked

  React.useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem(STORAGE_KEY) === "true";
    if (dismissed) {
      setIsDismissed(true);
      return;
    }
    setIsDismissed(false);

    const handleScroll = () => {
      // Trigger once after scrolling 300px and stay visible
      if (window.scrollY > 300) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
  };

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Ajakan Donasi"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 hidden md:block overflow-hidden",
        "bg-[linear-gradient(110deg,#3C95C8_0%,#3483B0_30%,#469FD3_50%,#3483B0_70%,#3C95C8_100%)]",
        "animate-gradient-flow text-white",
        "shadow-[0_-4px_16px_rgba(0,0,0,0.08)] border-t border-white/10",
        "transition-all duration-300 ease-out transform",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <Container size="xl">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Sisi Kiri: Pesan Sederhana */}
          <p className="text-sm font-medium text-white font-['Poppins',sans-serif]">
            Bantu kami jangkau lebih banyak penerima manfaat. Setiap kontribusi berarti.
          </p>

          {/* Sisi Kanan: Action Button & Close Icon */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="white"
              size="md"
              href={SITE_CONFIG.contact.donationUrl}
              external
              className="shadow-sm hover:shadow-md transition-all font-semibold"
            >
              Salurkan Kebaikan
            </Button>

            <button
              type="button"
              onClick={handleDismiss}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label="Tutup bar ajakan donasi"
              title="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </aside>
  );
}
