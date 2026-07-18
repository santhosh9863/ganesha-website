"use client";

import { type ReactNode } from "react";
import { HandHeart } from "lucide-react";

interface PremiumDonateButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export default function PremiumDonateButton({
  onClick,
  children = "Donate",
}: PremiumDonateButtonProps) {
  return (
    <div className="donate-button-wrapper">
      <button
        onClick={onClick}
        className="group cursor-pointer transition-all duration-300 hover:brightness-110 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "72px",
          borderRadius: "9999px",
          paddingInline: "40px",
          gap: "14px",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: 1,
          color: "#ffffff",
          border: "none",
          background: "linear-gradient(135deg, #D8B75B 0%, #C89F45 50%, #B8852F 100%)",
          boxShadow: "0 12px 30px rgba(200, 161, 74, 0.22)",
        }}
      >
        <HandHeart
          style={{ width: "28px", height: "28px", flexShrink: 0 }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span style={{ whiteSpace: "nowrap" }}>{children}</span>
      </button>
    </div>
  );
}
