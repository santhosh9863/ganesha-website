"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/content";
import Image from "next/image";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 8,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-400/8"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.02, 0.1, 0.02],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-[#FCF8F0]">
      {/* ═══ Layer 1: Atmosphere ═══ */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[90vw] sm:w-[800px] h-[50vh] sm:h-[600px] bg-gold-400/8 rounded-full blur-[250px]" />
        <div className="absolute top-[15%] right-[-5%] w-[50vw] sm:w-[400px] h-[40vh] sm:h-[400px] bg-gold-400/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-emerald-900/[0.02] rounded-full blur-[180px]" />
        <div className="absolute top-[25%] right-[15%] w-[180px] h-[180px] bg-amber-300/[0.03] rounded-full blur-[100px]" />
      </div>

      {mounted && <Particles />}

      {/* ═══ Layer 2: Artwork — fills the hero ═══ */}
      <div className="absolute inset-0 z-10 flex items-start justify-center">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to bottom, black 25%, black 45%, transparent 78%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 25%, black 45%, transparent 78%)",
            }}
          >
            <Image
              src="/images/hero.png"
              alt=""
              fill
              className="object-contain object-top sm:object-contain md:object-contain"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* ═══ Layer 3: Gradient veil for text readability ═══ */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#FCF8F0] via-[#FCF8F0]/60 to-transparent z-20" />

      {/* ═══ Layer 4: Content ═══ */}
      <div className="relative z-30 flex flex-col justify-end flex-1 layout-container pb-12 sm:pb-16 lg:pb-20 pt-32 sm:pt-40 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: easePremium }}
          className="max-w-[580px]"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easePremium }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-premium text-[0.6rem] text-[#4A453C]/70 tracking-wide uppercase font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_6px_rgba(200,161,74,0.4)]" />
            Since {siteConfig.foundedYear}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: easePremium }}
            className="font-display text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.08] tracking-tight mt-5 text-[#1A1A1A]"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: easePremium }}
            className="text-[#4A453C]/55 leading-[1.75] mt-5 text-[15px] sm:text-[17px] lg:text-[18px] max-w-[520px]"
          >
            We bring the community together to celebrate Lord Ganesha through cultural performances, spiritual discourses, and community service — continuing a {siteConfig.yearsOfLegacy}-year tradition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6, ease: easePremium }}
            className="flex flex-col sm:flex-row items-start gap-4 mt-8"
          >
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2.5 h-[56px] px-9 rounded-[16px] bg-gold-400 hover:bg-gold-500 text-white text-sm font-semibold transition-all duration-300 active:scale-[0.97] shadow-lg shadow-gold-400/15 hover:shadow-gold-400/25 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              Explore Our Legacy
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-2.5 h-[56px] px-9 rounded-[16px] border border-gold-400/25 hover:border-gold-400/40 text-[#4A453C]/60 hover:text-[#1A1A1A] text-sm font-medium transition-all duration-300 active:scale-[0.97] bg-white/60 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              View Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
