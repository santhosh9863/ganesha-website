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

      <div className="mx-auto w-full max-w-[1280px] h-[60px] lg:h-[64px] flex items-center justify-center px-4 lg:px-8">
        <h1
          className="font-[family-name:var(--font-kannada)] font-bold select-none text-center leading-none whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
          style={{
            fontSize: "clamp(1.2rem, 4.2vw, 1.75rem)",
            letterSpacing: "0.06em",
            background: "linear-gradient(145deg, #D4AF37 0%, #E8D48B 20%, #F7E7A1 40%, #D4AF37 55%, #C89B3C 75%, #D4AF37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 1px 2px rgba(212, 175, 55, 0.15))",
          }}
        >
          ಶ್ರೀ ಗೌರಿ ಗಣೇಶ ಗೆಳೆಯರ ಬಳಗ
        </h1>
      </div>
    </motion.header>
  );
}
