"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/content";
import Image from "next/image";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 12 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-400/6"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.02, 0.08, 0.02],
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

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
    >
      <span className="text-[10px] text-[#4A453C]/25 tracking-[0.2em] uppercase font-medium">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-3.5 h-3.5 text-[#4A453C]/20" />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-dvh bg-[#FCF8F0] overflow-hidden flex flex-col">
      {/* ── Layer 1: Atmosphere & ambient glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[90vw] lg:w-[800px] h-[50vh] lg:h-[600px] bg-gold-400/8 rounded-full blur-[250px]" />
        <div className="absolute top-[15%] right-[-5%] w-[40vw] lg:w-[400px] h-[35vh] lg:h-[400px] bg-gold-400/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] bg-gold-400/3 rounded-full blur-[200px]" />
      </div>

      {/* ── Layer 2: Subtle paper texture ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Layer 3: Warm glow behind idol (desktop) ── */}
      <div className="absolute z-[2] top-[5%] right-[5%] w-[45%] h-[70%] bg-amber-300/6 rounded-full blur-[200px] pointer-events-none hidden lg:block" />
      <div className="absolute z-[2] top-[10%] right-[10%] w-[30%] h-[50%] bg-gold-400/8 rounded-full blur-[140px] pointer-events-none hidden lg:block" />
      <div className="absolute z-[2] top-[15%] right-[18%] w-[15%] h-[25%] bg-yellow-200/10 rounded-full blur-[60px] pointer-events-none hidden lg:block" />

      {/* ── Layer 4: Decorative mandala (desktop) ── */}
      <div className="absolute z-[2] top-[-2%] right-[5%] w-[50%] h-[100%] pointer-events-none overflow-hidden hidden lg:block">
        <div
          className="absolute top-[5%] right-[10%] w-[360px] h-[360px] opacity-[0.04]"
          style={{
            background: `radial-gradient(circle at center, transparent 32%, #c8a14a 32.5%, transparent 33%, transparent 38%, #c8a14a 38.5%, transparent 39%, transparent 44%, #c8a14a 44.5%, transparent 45%, transparent 50%, #c8a14a 50.5%, transparent 51%)`,
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute top-[7%] right-[18%] w-[220px] h-[220px] opacity-[0.02]"
          style={{
            background: `conic-gradient(from 0deg, transparent, #c8a14a, transparent, #c8a14a, transparent, #c8a14a, transparent)`,
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ── Layer 5: Idol — Desktop (composed right-column scene) ── */}
      <div className="absolute right-[3%] top-[16%] bottom-0 w-[46%] z-10 hidden lg:block pointer-events-none">
        <div className="relative w-full h-full">
          {/* Warm glow behind idol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[85%] bg-amber-300/9 rounded-full blur-[180px]" />
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[100%] h-[55%] bg-gold-400/10 rounded-full blur-[130px]" />
          {/* Soft shadow under idol */}
          <div className="absolute bottom-[8%] left-[20%] right-[20%] h-8 bg-black/4 rounded-full blur-[28px]" />
          {/* Image with breathing room */}
          <div className="absolute left-[6%] right-[6%] top-[2%] bottom-[4%]">
            <Image
              src="/images/hero.png"
              alt=""
              fill
              className="object-contain object-bottom"
              priority
              sizes="46vw"
            />
          </div>
        </div>
      </div>

      {mounted && <Particles />}

      {/* ── Layer 6: Idol — Mobile (above text, full width, visual centerpiece) ── */}
      <div className="relative z-10 lg:hidden h-[48vh] shrink-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-contain object-bottom"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FCF8F0] to-transparent pointer-events-none" />
      </div>

      {/* ── Layer 7: Text content ── */}
      <div className="relative z-20 layout-container flex-1 flex flex-col lg:min-h-dvh">
        <div className="flex flex-col justify-center flex-1 lg:w-[48%] py-12 lg:pt-36 lg:pb-28 text-center lg:text-left">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: easePremium }}
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-10"
          >
            Since {siteConfig.foundedYear} &bull; {siteConfig.yearsOfLegacy} Years of Devotion
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: easePremium }}
            className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold leading-[1.12] lg:leading-[1.08] tracking-tight text-[#1A1A1A] max-w-[90%] lg:max-w-none mx-auto lg:mx-0"
          >
            14 Years of Devotion,<br />Culture & Unity
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease: easePremium }}
            className="text-[#666] leading-relaxed text-sm sm:text-base lg:text-lg max-w-[520px] mt-12 mx-auto lg:mx-0"
          >
            For fourteen years, our community has come together to celebrate faith, culture, service, and togetherness through the blessings of Lord Ganesha.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6, ease: easePremium }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-16 justify-center lg:justify-start"
          >
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center gap-3 h-12 px-7 w-full sm:w-auto sm:min-w-[200px] rounded-[18px] text-white text-sm sm:text-[15px] font-bold transition-all duration-300 active:scale-[0.97] shadow-[0_12px_30px_rgba(200,161,74,0.22)] hover:shadow-[0_20px_40px_rgba(200,161,74,0.30)] hover:-translate-y-0.5 overflow-hidden focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
              style={{
                background:
                  "linear-gradient(135deg, #EFD48B 0%, #D8B75B 35%, #C89F45 65%, #B8852F 100%)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white/[0.28] to-transparent top-0 h-[20%] transition-opacity duration-300" />
              <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Explore Our Legacy</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="group relative inline-flex items-center justify-center gap-3 h-12 px-7 w-full sm:w-auto sm:min-w-[200px] rounded-[18px] border-[1.5px] border-[#DCC58A] text-[#8E6E2C] text-sm sm:text-[15px] font-bold bg-transparent transition-all duration-300 active:scale-[0.97] hover:bg-[rgba(200,161,74,0.08)] hover:border-[#C89F45] hover:-translate-y-0.5 overflow-hidden focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              <span className="relative z-10">View Gallery</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      {mounted && <ScrollIndicator />}
    </section>
  );
}
