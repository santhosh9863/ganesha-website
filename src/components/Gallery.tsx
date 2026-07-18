"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import GalleryCard from "@/components/GalleryCard";
import { galleryImages } from "@/data/content";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Memories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Photo{" "}
            <span className="gold-text">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="aspect-square"
            >
              <GalleryCard
                src={img.src}
                alt={img.alt}
                category={img.category}
                onClick={() => setSelected(img.id)}
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
            className="inline-flex items-center justify-center h-12 px-7 text-[#4A453C]/70 hover:text-[#1A1A1A] font-medium rounded-[18px] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
          >
            View Full Gallery
          </Link>
        </motion.div>
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
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center"
            >
              {(() => {
                const img = galleryImages.find((g) => g.id === selected);
                return (
                  <>
                    <img
                      src={img?.src ?? ""}
                      alt={img?.alt ?? ""}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <p className="text-white font-display text-xl font-semibold">
                        {img?.alt}
                      </p>
                      <p className="text-gold-400/80 text-sm mt-1">
                        {img?.category}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                    >
                      ✕
                    </button>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
