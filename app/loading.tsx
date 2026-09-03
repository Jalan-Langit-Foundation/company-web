import * as React from "react";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      aria-label="Memuat halaman..."
      role="status"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Lingkaran berputar (Spinner) */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[3px] border-[#EAF5FB] border-t-[#3C95C8] animate-spin" />
        <span className="sr-only">Memuat...</span>
      </div>
    </div>
  );
}
