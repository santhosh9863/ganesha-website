"use client";

import { useState } from "react";

interface GalleryCardProps {
  src: string;
  alt: string;
  category: string;
  onClick?: () => void;
}

export default function GalleryCard({ src, alt, category, onClick }: GalleryCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group relative w-full h-full overflow-hidden rounded-3xl bg-[#FCFBF8] border border-[rgba(200,161,74,0.1)] cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
    >
      {imgError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FCFBF8] to-white">
          <span className="text-4xl opacity-15 select-none">🕉</span>
          <span className="mt-2 px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-400 text-[0.55rem] font-medium">
            {category}
          </span>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/75 backdrop-blur-sm text-[0.55rem] font-medium text-[#4A453C] shadow-sm select-none">
            {category}
          </span>
        </>
      )}
    </button>
  );
}
