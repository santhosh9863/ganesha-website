"use client";

import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
import { statCards } from "@/data/content";

export default function LiveStats() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-[#FFFFFF] to-[#F8F6F2]" />

      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            By The Numbers
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Our{" "}
            <span className="gold-text">Impact</span>
          </h2>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:max-w-3xl mx-auto">
            {statCards.slice(0, 3).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-full"
              >
                <FlipCard
                  front={
                    <div className="w-full h-full bg-gradient-to-b from-[#FCFBF8] to-white rounded-3xl border border-[rgba(200,161,74,0.18)] p-5 flex flex-col items-center justify-center text-center shadow-sm">
                      <span className="text-2xl mb-3">{stat.icon}</span>
                      <p className="font-display text-xl sm:text-2xl font-bold gold-text leading-none">
                        {stat.value}
                      </p>
                      <p className="text-[#4A453C]/45 text-[0.8rem] mt-2">
                        {stat.label}
                      </p>
                    </div>
                  }
                  back={
                    <div className="w-full h-full bg-gradient-to-b from-white to-[#FCFBF8] rounded-3xl border border-[rgba(200,161,74,0.18)] p-5 flex flex-col items-center justify-center text-center shadow-lg">
                      <span className="text-lg mb-2">{stat.icon}</span>
                      <p className="font-display text-xs font-bold text-[#1A1A1A]">
                        {stat.backTitle}
                      </p>
                      <p className="text-[#4A453C]/50 text-xs leading-relaxed mt-2 max-w-[90%]">
                        {stat.backDescription}
                      </p>
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
