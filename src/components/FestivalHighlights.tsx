"use client";

import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
import { highlights } from "@/data/content";

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
                className="w-full"
              >
                <FlipCard
                  front={
                    <div className="w-full h-full bg-gradient-to-b from-[#FCFBF8] to-white rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col items-center justify-center text-center shadow-sm">
                      <span className="text-3xl mb-4">{item.icon}</span>
                      <h3 className="font-display text-lg font-bold text-[#1A1A1A]">
                        {item.title}
                      </h3>
                      <div className="w-8 h-px bg-gold-400/30 mt-4" />
                    </div>
                  }
                  back={
                    <div className="w-full h-full bg-gradient-to-b from-white to-[#FCFBF8] rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col items-center justify-center text-center shadow-lg">
                      <span className="text-2xl mb-3">{item.icon}</span>
                      <h3 className="font-display text-base font-bold text-[#1A1A1A]">
                        {item.title}
                      </h3>
                      <p className="text-[#4A453C]/50 text-sm leading-relaxed mt-3 max-w-[240px]">
                        {item.description}
                      </p>
                      <div className="w-8 h-px bg-gold-400/30 mt-4" />
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
