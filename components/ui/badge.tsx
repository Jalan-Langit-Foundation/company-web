import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "brand"
    | "success"
    | "warning"
    | "destructive"
    | "neutral";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  primary: "bg-[#EAF5FB] text-[#3C95C8] border border-[#3C95C8]/30",
  secondary: "bg-[#f0f9fd] text-[#6EB6D6] border border-[#6EB6D6]/40",
  outline: "bg-transparent text-[#3C95C8] border-2 border-[#3C95C8]",
  brand: "bg-[#3C95C8] text-white border border-transparent font-bold",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  warning: "bg-amber-50 text-amber-800 border border-amber-200",
  destructive: "bg-rose-50 text-rose-700 border border-rose-200",
  neutral: "bg-zinc-100 text-zinc-700 border border-zinc-200",
};

const dotColors: Record<NonNullable<BadgeProps["variant"]>, string> = {
  primary: "bg-[#3C95C8]",
  secondary: "bg-[#6EB6D6]",
  outline: "bg-[#3C95C8]",
  brand: "bg-white",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  destructive: "bg-rose-500",
  neutral: "bg-zinc-400",
};

const sizeStyles: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "text-[11px] px-2 py-0.5 gap-1 font-semibold rounded-full",
  md: "text-xs px-3 py-1 gap-1.5 font-semibold rounded-full",
  lg: "text-sm px-3.5 py-1.5 gap-2 font-bold rounded-full",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      dot = false,
      dotColor,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-['Poppins',sans-serif] leading-none tracking-wide select-none transition-colors",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full shrink-0 animate-pulse",
              dotColor || dotColors[variant]
            )}
          />
        )}
        {icon && <span className="shrink-0 inline-flex">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
