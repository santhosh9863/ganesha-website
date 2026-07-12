"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FlipCard from "@/components/FlipCard";
import { galleryImages } from "@/data/content";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const preview = galleryImages.slice(0, 8);

  return (
    <section id="gallery-section" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FCFBF8] to-[#FFFFFF]" />

      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Memories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Photo{" "}
            <span className="gold-text">Gallery</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <div className="card-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {preview.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`w-full ${
                  i === 0 || i === 7 ? "aspect-[4/3] row-span-2" : "aspect-square"
                }`}
              >
                <FlipCard
                  front={
                    <div className="w-full h-full bg-gradient-to-br from-gold-400/10 to-gold-400/5 rounded-3xl border border-[rgba(200,161,74,0.18)] flex flex-col items-center justify-center text-center shadow-sm">
                      <span className="text-5xl sm:text-6xl opacity-20 select-none">🕉</span>
                      <span className="mt-3 px-3 py-1 rounded-full bg-gold-400/10 text-gold-400 text-[0.6rem] font-medium">
                        {img.category}
                      </span>
                      <div className="w-8 h-px bg-gold-400/30 mt-4" />
                    </div>
                  }
                  back={
                    <div
                      className="w-full h-full bg-gradient-to-b from-white to-[#FCFBF8] rounded-3xl border border-[rgba(200,161,74,0.18)] p-6 flex flex-col items-center justify-center text-center shadow-lg cursor-pointer"
                      onClick={() => setSelected(img.id)}
                    >
                      <span className="text-2xl opacity-20 select-none mb-3">🕉</span>
                      <p className="font-display text-sm font-bold text-[#1A1A1A] leading-snug max-w-[200px]">
                        {img.alt}
                      </p>
                      <p className="text-gold-400/60 text-[0.6rem] mt-2 uppercase tracking-wide">
                        {img.category}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[0.6rem] font-medium hover:bg-gold-400/20 transition-colors">
                        View Photo
                      </div>
                      <div className="w-8 h-px bg-gold-400/30 mt-4" />
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="stack-cards-cta text-center"
          >
            <Link
              href="/gallery"
              className="inline-flex px-8 py-3.5 border border-gold-400/25 hover:border-gold-400/40 text-[#4A453C]/70 hover:text-[#1A1A1A] font-medium rounded-full transition-all duration-500 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gold-400/20 to-gold-400/10 border border-gold-400/15 flex items-center justify-center"
            >
              <span className="text-[8rem] sm:text-[12rem] opacity-15 select-none">🕉</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-white font-display text-xl font-semibold">
                  {galleryImages.find((g) => g.id === selected)?.alt}
                </p>
                <p className="text-gold-400/80 text-sm mt-1">
                  {galleryImages.find((g) => g.id === selected)?.category}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
