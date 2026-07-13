"use client";

import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function StandardNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FCFBF8] shadow-sm">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(200,161,74,0.12)]" />

      <div className="layout-container">
        <div className="flex items-center justify-between h-[72px] lg:h-[90px]">
          <Link href="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-xl bg-gradient-to-br from-gold-400/25 to-gold-400/8 border border-gold-400/25 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-lg group-hover:shadow-gold-400/15">
              <span className="text-gold-400 text-sm lg:text-[17px] font-display font-bold">
                SG
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm lg:text-base font-display text-[#1A1A1A] font-semibold tracking-wide leading-tight">
                {siteConfig.shortName}
              </p>
              <p className="text-[9px] lg:text-[10px] text-gold-400/60 tracking-[0.25em] uppercase leading-tight mt-0.5 lg:mt-1">
                Since {siteConfig.foundedYear}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
