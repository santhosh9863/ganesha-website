"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { legacyTimeline } from "@/data/content";

function TimelineItem({
  item,
  index,
}: {
  item: (typeof legacyTimeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col sm:flex-row gap-4 sm:gap-0 ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      <div className="flex-1" />
      <div className="hidden sm:flex flex-col items-center shrink-0 w-16">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-0.5 flex-1 bg-gradient-to-b from-gold-400/30 to-transparent origin-top"
        />
        <div className="w-4 h-4 rounded-full bg-gold-400 border-[3px] border-[#FFFFFF] shadow-lg shadow-gold-400/20 ring-1 ring-gold-400/30" />
        <div className="w-0.5 flex-1 bg-gradient-to-b from-gold-400/30 to-transparent" />
      </div>
      <div className="flex-1 pb-16 lg:pb-20">
        <div className="card card-padding">
          <span className="text-gold-400 text-sm font-bold tracking-wider">{item.year}</span>
          <h3 className="font-display text-xl font-bold text-[#1A1A1A] mt-1 mb-3">{item.title}</h3>
          <p className="text-[#4A453C]/50 text-sm leading-premium">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function LegacyTimeline() {
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
            Our Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            The{" "}
            <span className="gold-text">Legacy</span> Timeline
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/20 via-gold-400/10 to-transparent -translate-x-px" />

            {legacyTimeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
