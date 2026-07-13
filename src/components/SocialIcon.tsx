"use client";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <div className="group relative inline-flex items-center justify-center">
      <div className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-[6px] bg-[#1A1A1A] text-white text-[11px] font-medium rounded-[10px] whitespace-nowrap opacity-0 translate-y-[2px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none shadow-lg shadow-black/20 select-none">
        {label}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#FCFBF8] border border-[rgba(200,161,74,0.18)] shadow-[0_8px_24px_rgba(0,0,0,0.06)] text-[#4A453C]/60 hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-gold-400 hover:border-gold-400 hover:shadow-[0_12px_32px_rgba(200,161,74,0.3)] focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 active:scale-[0.95]"
        aria-label={label}
      >
        {icon}
      </a>
    </div>
  );
}
