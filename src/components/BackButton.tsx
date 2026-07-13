"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center gap-3 h-[48px] w-[120px] md:w-[140px] px-5 rounded-[16px] bg-[#FCFBF8] border border-[rgba(200,161,74,0.18)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,161,74,0.2)] active:scale-[0.98] overflow-hidden focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
      aria-label="Go back"
    >
      <span className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/8 transition-all duration-[250ms] rounded-[16px]" />

      <span className="relative z-10 w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center shrink-0 overflow-hidden transition-all duration-[250ms] group-hover:shadow-lg group-hover:shadow-gold-400/20">
        <span className="absolute inset-0 rounded-full bg-gold-400 scale-100 group-hover:scale-[1.35] transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
        <ArrowLeft className="relative z-10 w-4 h-4 text-white transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5" />
      </span>

      <span className="relative z-10 text-[16px] font-semibold text-[#1A1A1A] tracking-tight transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-gold-400">
        Back
      </span>
    </button>
  );
}
