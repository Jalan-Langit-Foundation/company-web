import * as React from "react";
import { Heart, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FINAL_CTA_CONFIG } from "@/lib/data/homepage";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-label="Ajakan Berbagi Kebaikan"
      className="w-full bg-[#FAFCFE] py-12 sm:py-20 lg:py-24 border-t border-slate-100 relative overflow-hidden"
    >
      {/* Decorative Background Accents matching other sections */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />

      <Container size="lg" className="relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Main Headline: Mari Bergandengan & (Hitam) + Langitkan Kebaikan (Biru) */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] tracking-tight leading-tight">
            {FINAL_CTA_CONFIG.headline.line1}
            <br />
            <span className="text-[#3C95C8]">
              {FINAL_CTA_CONFIG.headline.line2}
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="mt-3 text-sm sm:text-base text-[#555555] font-['Lato',sans-serif] max-w-xl mx-auto leading-relaxed">
            {FINAL_CTA_CONFIG.description}
          </p>

          {/* Action Buttons: Berdonasi (Primary) & Berkolaborasi (Secondary) */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              href={FINAL_CTA_CONFIG.primaryAction.href}
              external={FINAL_CTA_CONFIG.primaryAction.isExternal}
              leftIcon={<Heart className="w-4 h-4 fill-white" />}
              className="w-full sm:w-auto shadow-sm hover:shadow-md transition-all font-semibold text-sm px-6"
            >
              {FINAL_CTA_CONFIG.primaryAction.label}
            </Button>

            <Button
              variant="outline"
              size="md"
              href={FINAL_CTA_CONFIG.secondaryAction.href}
              leftIcon={<Handshake className="w-4 h-4 text-[#3C95C8]" />}
              className="w-full sm:w-auto bg-transparent text-[#3C95C8] border-2 border-[#3C95C8] hover:bg-[#EAF5FB] shadow-sm hover:shadow-md transition-all font-semibold text-sm px-6"
            >
              {FINAL_CTA_CONFIG.secondaryAction.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
