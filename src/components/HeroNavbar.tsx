"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: easePremium }}
      style={{ paddingRight: "env(safe-area-inset-right, 0px)" }}
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

      <div className="mx-auto w-full max-w-[1280px] py-4 lg:py-[18px] flex items-center justify-center px-5 sm:px-8 lg:px-10">
        <h1
          className="font-[family-name:var(--font-kannada)] font-extrabold select-none text-center shrink-0 gold-text-header"
          style={{
            fontSize: "clamp(1.1rem, 4.3vw, 1.75rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.4,
          }}
        >
          ಶ್ರೀ ಗೌರಿ ಗಣೇಶ ಗೆಳೆಯರ ಬಳಗ
        </h1>
      </div>
    </motion.header>
  );
}
