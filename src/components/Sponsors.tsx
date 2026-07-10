"use client";

import { motion } from "framer-motion";
import { sponsors } from "@/data/content";

const tierColors: Record<string, string> = {
  Platinum: "border-gold-400/30 bg-gradient-to-b from-gold-400/10 to-gold-400/5",
  Gold: "border-gold-400/15 bg-gradient-to-b from-gold-400/5 to-transparent",
  Silver: "border-gold-400/8 bg-white",
  Bronze: "border-gold-400/5 bg-white",
};

export default function Sponsors() {
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
            Our Supporters
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Sponsors &{" "}
            <span className="gold-text">Partners</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <div className="flex flex-wrap justify-center gap-4">
            {["Platinum", "Gold", "Silver", "Bronze"].map((tier) => (
              <div key={tier} className="w-full">
                <p className="text-gold-400/60 text-xs tracking-[0.2em] uppercase mb-5 text-center font-medium">
                  {tier}
                </p>
                <div className="flex flex-wrap justify-center gap-5 mb-10">
                  {sponsors
                    .filter((s) => s.tier === tier)
                    .map((sponsor, i) => (
                      <motion.div
                        key={sponsor.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className={`px-6 py-4 rounded-xl border ${tierColors[tier]} hover:border-gold-400/40 transition-all duration-500 cursor-default`}
                      >
                        <p className="font-display text-lg font-semibold gold-text">{sponsor.name}</p>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
