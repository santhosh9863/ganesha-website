"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12", label: "Years Completed", suffix: "+" },
  { value: "50K", label: "Visitors Served", suffix: "+" },
  { value: "100", label: "Events Organized", suffix: "+" },
];

export default function LiveStats() {
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
            By The Numbers
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Our{" "}
            <span className="gold-text">Impact</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <div className="card-grid grid-cols-2 md:grid-cols-3 md:max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card card-padding text-center"
              >
                <p className="font-display text-4xl sm:text-5xl font-bold gold-text mb-3">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-[#4A453C]/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
