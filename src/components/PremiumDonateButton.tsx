"use client";

import { type ReactNode } from "react";
import { HandHeart } from "lucide-react";

interface PremiumDonateButtonProps {
  onClick?: () => void
  children?: ReactNode
  className?: string
  fullWidth?: boolean
}

export default function PremiumDonateButton({
  onClick,
  children = "Donate",
  className = "",
  fullWidth = false,
}: PremiumDonateButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[18px] font-bold text-sm text-white transition-all duration-500 ease-out focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
        fullWidth ? "w-full" : "w-[85%] sm:w-auto sm:px-9"
      } ${className}`}
      style={{
        background: "linear-gradient(135deg, #D8B75B 0%, #C89F45 50%, #B8852F 100%)",
      }}
    >
      <span
        className="absolute inset-0 transition-all duration-500 ease-out -translate-x-full group-hover:translate-x-0"
        style={{
          background: "linear-gradient(90deg, #C89F45 0%, #EFD48B 50%, #C89F45 100%)",
        }}
      />
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #EFD48B 0%, #D8B75B 35%, #C89F45 65%, #B8852F 100%)",
        }}
      />
      <span className="absolute inset-0 bg-gradient-to-b from-white/[0.22] to-transparent top-0 h-[25%] pointer-events-none" />
      <span className="relative z-10 inline-flex items-center justify-center gap-2.5 h-12 px-7">
        <HandHeart className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <span className="whitespace-nowrap">{children}</span>
      </span>
    </button>
  );
}
