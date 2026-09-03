"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScrollIndicatorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId?: string;
  label?: string;
  variant?: "white" | "primary" | "dark";
  showMouse?: boolean;
  showChevron?: boolean;
}

const variantStyles = {
  white: {
    container: "text-white/75 hover:text-white",
    mouseBorder: "border-white/60 group-hover:border-white",
    mouseDot: "bg-white",
    chevron: "text-white/60 group-hover:text-white",
    text: "text-white/80 group-hover:text-white",
  },
  primary: {
    container: "text-[#3C95C8]/80 hover:text-[#3C95C8]",
    mouseBorder: "border-[#3C95C8]/60 group-hover:border-[#3C95C8]",
    mouseDot: "bg-[#3C95C8]",
    chevron: "text-[#3C95C8]/60 group-hover:text-[#3C95C8]",
    text: "text-[#3C95C8]/90 group-hover:text-[#3C95C8]",
  },
  dark: {
    container: "text-slate-600 hover:text-slate-900",
    mouseBorder: "border-slate-400 group-hover:border-slate-800",
    mouseDot: "bg-slate-700",
    chevron: "text-slate-400 group-hover:text-slate-800",
    text: "text-slate-600 group-hover:text-slate-900",
  },
};

export const ScrollIndicator = React.forwardRef<
  HTMLAnchorElement,
  ScrollIndicatorProps
>(
  (
    {
      targetId = "impact-snapshot",
      label = "Scroll",
      variant = "white",
      showMouse = true,
      showChevron = true,
      className,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const styles = variantStyles[variant];
    const targetHref = href || (targetId ? `#${targetId.replace(/^#/, "")}` : "#");

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
        return;
      }

      if (targetId) {
        const element = document.getElementById(targetId.replace(/^#/, ""));
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    return (
      <a
        ref={ref}
        href={targetHref}
        onClick={handleClick}
        aria-label={label ? `Scroll ke bagian ${label}` : "Scroll ke bawah"}
        className={cn(
          "group inline-flex flex-col items-center gap-1.5 select-none transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8] rounded-lg p-1",
          styles.container,
          className
        )}
        {...props}
      >
        {label && (
          <span
            className={cn(
              "text-[10px] font-semibold tracking-widest uppercase font-['Poppins',sans-serif] transition-opacity",
              styles.text
            )}
          >
            {label}
          </span>
        )}

        {showMouse && (
          <div
            className={cn(
              "w-5 h-8 rounded-full border-2 flex items-start justify-center p-1 transition-colors shadow-sm",
              styles.mouseBorder
            )}
          >
            <div
              className={cn(
                "w-1 h-2 rounded-full animate-bounce mt-0.5",
                styles.mouseDot
              )}
            />
          </div>
        )}

        {showChevron && (
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-colors -mt-0.5",
              styles.chevron
            )}
          />
        )}
      </a>
    );
  }
);

ScrollIndicator.displayName = "ScrollIndicator";
