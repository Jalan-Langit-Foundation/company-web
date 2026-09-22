import * as React from "react";
import { Heart, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FINAL_CTA_CONFIG } from "@/lib/data/homepage";

export function FinalCtaSection() {
  return (
    <section
      id="kontak"
      aria-label="Ajakan Berbagi Kebaikan"
      className="w-full bg-[#FAFCFE] py-12 sm:py-20 lg:py-24 border-t border-slate-100 relative overflow-hidden scroll-mt-16"
    >
      <div id="final-cta" className="absolute top-0 scroll-mt-16" />
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

          {/* Supporting Copy (Satu paragraf dengan ganti baris tanpa space antar alinea) */}
          <p className="mt-3 text-sm sm:text-base text-[#555555] font-['Lato',sans-serif] max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {FINAL_CTA_CONFIG.description}
          </p>

          {/* Action Buttons: Berdonasi (Primary), Berkolaborasi (Secondary) & Chat CS */}
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
              external={FINAL_CTA_CONFIG.secondaryAction.isExternal}
              leftIcon={<Handshake className="w-4 h-4 text-[#3C95C8]" />}
              className="w-full sm:w-auto bg-transparent text-[#3C95C8] border-2 border-[#3C95C8] hover:bg-[#EAF5FB] shadow-sm hover:shadow-md transition-all font-semibold text-sm px-6"
            >
              {FINAL_CTA_CONFIG.secondaryAction.label}
            </Button>

            <Button
              variant="outline"
              size="md"
              href={FINAL_CTA_CONFIG.csAction.href}
              external={FINAL_CTA_CONFIG.csAction.isExternal}
              leftIcon={
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-[#25D366]"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              }
              className="w-full sm:w-auto bg-transparent text-[#25D366] border-2 border-[#25D366] hover:bg-[#EAFBF1] shadow-sm hover:shadow-md transition-all font-semibold text-sm px-6"
            >
              {FINAL_CTA_CONFIG.csAction.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
