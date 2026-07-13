"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-[#FFFFFF] to-[#F8F6F2]" />

      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Cinematic Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
            Festival{" "}
            <span className="gold-text">Highlights</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="card-grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="aspect-video rounded-3xl glass-gold flex items-center justify-center group cursor-pointer hover:border-gold-400/30 transition-all duration-500">
              <div className="text-center">
                <span className="text-5xl mb-3 block opacity-40 group-hover:opacity-60 transition-opacity duration-500">▶</span>
                <p className="text-[#4A453C]/40 text-sm">2025 Festival Highlights</p>
              </div>
            </div>
            <div className="aspect-video rounded-3xl glass-gold flex items-center justify-center group cursor-pointer hover:border-gold-400/30 transition-all duration-500">
              <div className="text-center">
                <span className="text-5xl mb-3 block opacity-40 group-hover:opacity-60 transition-opacity duration-500">▶</span>
                <p className="text-[#4A453C]/40 text-sm">14 Years Journey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
