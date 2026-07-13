"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

      <div className="mx-auto w-full max-w-[1280px] flex items-center justify-between h-[72px] lg:h-[90px] px-6 md:px-12">
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

          <button
            onClick={scrollToDonation}
            className={`relative group flex items-center gap-2.5 h-12 px-7 rounded-full 
              bg-gradient-to-r from-gold-400 to-gold-500 text-white font-semibold text-sm lg:text-[15px] 
              border border-white/20 shadow-lg shadow-gold-400/20 
              transition-all duration-250 cursor-pointer shrink-0
              hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl hover:shadow-gold-400/30
              active:scale-[0.98]
              ${pulse ? "animate-[pulse-glow_2s_ease-in-out]" : ""}
            `}
          >
            <span>Contribute</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-0.5" />
          </button>
        </div>
    </motion.header>
  );
}
