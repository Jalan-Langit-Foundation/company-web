"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProgramGallery({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // ganti foto tiap 4 detik

    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-96 bg-brand-soft rounded-xl overflow-hidden">
        <Image
          src={images[current]}
          alt={`Dokumentasi ${current + 1}`}
          fill
          className="object-cover"
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-9 h-9 flex items-center justify-center shadow"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-9 h-9 flex items-center justify-center shadow"
      >
        ›
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-primary-blue" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}