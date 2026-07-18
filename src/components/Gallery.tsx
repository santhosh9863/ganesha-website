"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GalleryCard from "@/components/GalleryCard";
import GalleryLightbox from "@/components/GalleryLightbox";
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

      <GalleryLightbox selectedId={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
