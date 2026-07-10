"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/content";

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/#gallery-section"
              className="group inline-flex items-center gap-2 text-[#4A453C]/50 hover:text-[#1A1A1A] text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Our Memories</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Photo{" "}
              <span className="gold-text">Gallery</span>
            </h1>
            <p className="text-[#4A453C]/50 mt-6 max-w-text mx-auto">
               Relive the beautiful moments from 14 years of celebrations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
                  activeCategory === cat
                    ? "bg-gold-400 text-white"
                    : "bg-white border border-gold-400/10 text-[#4A453C]/60 hover:text-[#1A1A1A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => setSelected(img.id)}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-white border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 shadow-sm"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-15 select-none">🕉</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white/80 text-xs font-medium px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">View</span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white/60 text-xs truncate px-1">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

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
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden glass-gold border border-white/10 flex items-center justify-center"
            >
              <span className="text-[8rem] sm:text-[12rem] opacity-15 select-none">🕉</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-white font-display text-xl font-semibold">{galleryImages.find((g) => g.id === selected)?.alt}</p>
                <p className="text-gold-400/80 text-sm mt-1">{galleryImages.find((g) => g.id === selected)?.category}</p>
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition-colors focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2">✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
