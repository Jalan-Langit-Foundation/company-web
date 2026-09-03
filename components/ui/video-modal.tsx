"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
  title?: string;
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function VideoModal({
  isOpen,
  onClose,
  youtubeId,
  title = "Video Player",
}: VideoModalProps) {
  const isClient = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  React.useEffect(() => {
    if (!isOpen) return;

    // Kunci scroll body saat modal aktif
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !youtubeId || !isClient) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-sm animate-fadeIn cursor-pointer"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Floating Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Tutup Video"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer backdrop-blur-md border border-white/20 shadow-lg"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Pure 16:9 Video Player */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black cursor-default z-[9999]"
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    </div>,
    document.body
  );
}
