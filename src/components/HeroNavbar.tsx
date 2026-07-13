"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToDonation = useCallback(() => {
    const el = document.getElementById("donation");
    if (!el) return;
    const offset = 90;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: easePremium }}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)", paddingRight: "env(safe-area-inset-right, 0px)" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1280px] flex items-center h-[68px] lg:h-[72px] px-4 md:px-12">
          <Link href="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
            <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-gold-400/25 to-gold-400/8 border border-gold-400/25 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-lg group-hover:shadow-gold-400/15">
              <span className="text-gold-400 text-base lg:text-lg font-display font-bold">
                SG
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs lg:text-sm font-display text-[#1A1A1A] font-bold tracking-wide leading-tight">
                {siteConfig.shortName}
              </p>
              <p className="text-[9px] lg:text-[10px] text-gold-400/80 tracking-[0.25em] uppercase leading-tight mt-0.5">
                Since {siteConfig.foundedYear}
              </p>
            </div>
          </Link>
        </div>

        <button
          onClick={scrollToDonation}
          className={`group fixed top-4 right-4 lg:top-5 lg:right-5 z-[60] inline-flex items-center justify-center h-12 px-6 rounded-[18px] text-white text-[11px] font-bold transition-all duration-300 active:scale-[0.97] shadow-[0_12px_30px_rgba(200,161,74,0.22)] hover:shadow-[0_20px_40px_rgba(200,161,74,0.30)] hover:-translate-y-0.5 overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${pulse ? "animate-[pulse-glow_2s_ease-in-out]" : ""}`}
          style={{
            background:
              "linear-gradient(135deg, #EFD48B 0%, #D8B75B 35%, #C89F45 65%, #B8852F 100%)",
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-b from-white/[0.28] to-transparent top-0 h-[20%] transition-opacity duration-300" />
          <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 whitespace-nowrap shrink-0">Contribute</span>
        </button>
    </motion.header>
  );
}
