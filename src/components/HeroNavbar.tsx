"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

      <div className="mx-auto w-full max-w-[1280px] flex items-center justify-between h-[68px] lg:h-[72px] px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
            <div className="flex flex-col items-start leading-none select-none">
              <span
                className="font-[family-name:var(--font-kannada)] text-gold-400 font-semibold tracking-wide"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)",
                  textShadow: "0 1px 6px rgba(200,161,74,0.25), 0 0 20px rgba(200,161,74,0.10)",
                }}
              >
                ಶ್ರೀ ಗೌರಿ ಗಣೇಶ
              </span>
              <span
                className="font-[family-name:var(--font-kannada)] text-gold-400 font-semibold tracking-wide"
                style={{
                  fontSize: "clamp(0.7rem, 1.3vw, 0.95rem)",
                  textShadow: "0 1px 6px rgba(200,161,74,0.25), 0 0 20px rgba(200,161,74,0.10)",
                }}
              >
                ಗೆಳೆಯರ ಬಳಗ
              </span>
            </div>
          </Link>
        </div>
    </motion.header>
  );
}
