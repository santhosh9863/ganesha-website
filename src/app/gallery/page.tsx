"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import GalleryCard from "@/components/GalleryCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import { galleryImages } from "@/data/content";

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <FloatingBackButton />
      <main className="pt-16 lg:pt-20 pb-8 lg:pb-20">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10 md:mb-12"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Our Memories</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Photo{" "}
              <span className="gold-text">Gallery</span>
            </h1>
            <p className="text-[#4A453C]/50 mt-5 max-w-content">
              Relive the beautiful moments from 14 years of celebrations.
            </p>
          </motion.div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.03 }}
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
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <GalleryLightbox selectedId={selected} onClose={() => setSelected(null)} />

      <Footer />
    </>
  );
}
