"use client";

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ open, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[rgba(252,251,248,0.82)] backdrop-blur-[20px] border border-[#ECE3D2] shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-90 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <div className="relative w-5 h-[18px]">
        <span
          className="absolute left-0 top-0 w-full h-[2px] rounded-full bg-[#2A2A2A] transition-all duration-300"
          style={{
            transform: open
              ? "rotate(45deg) translateY(8px)"
              : "rotate(0) translateY(0)",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] rounded-full bg-[#2A2A2A] transition-all duration-300"
          style={{
            opacity: open ? 0 : 1,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <span
          className="absolute left-0 bottom-0 w-full h-[2px] rounded-full bg-[#2A2A2A] transition-all duration-300"
          style={{
            transform: open
              ? "rotate(-45deg) translateY(-8px)"
              : "rotate(0) translateY(0)",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </button>
  );
}
