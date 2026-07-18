"use client";

import { type ReactNode } from "react";
import { HandHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
      <Button
        onClick={onClick}
        variant="primary"
        className="w-full h-[72px] rounded-full px-10 gap-3.5 text-[28px] font-bold leading-none"
      >
        <HandHeart className="w-7 h-7 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <span className="whitespace-nowrap">{children}</span>
      </Button>
    </div>
  );
}
