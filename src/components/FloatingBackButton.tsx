"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function FloatingBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-7 left-7 z-[100] w-11 h-11 rounded-full bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5 text-[#4A453C]" />
    </button>
  );
}
