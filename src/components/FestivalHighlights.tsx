"use client";

import { motion } from "framer-motion";
import { highlights } from "@/data/content";

const tierColors = ["from-gold-400/20 to-gold-400/10", "from-gold-400/10 to-transparent", "from-gold-400/5 to-transparent"];

export default function FestivalHighlights() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF8] via-[#FFFFFF] to-[#FCFBF8]" />

      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Festival Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Festival{" "}
            <span className="gold-text">Highlights</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <div className="card-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl bg-gradient-to-b ${
                  tierColors[i % 3]
                } border border-gold-400/10 card-padding hover:border-gold-400/25 hover:bg-gold-400/6 transition-all duration-500`}
              >
                <span className="text-3xl block">{item.icon}</span>
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mt-6 group-hover:text-gold-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#4A453C]/50 text-sm leading-premium mt-4">{item.description}</p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
