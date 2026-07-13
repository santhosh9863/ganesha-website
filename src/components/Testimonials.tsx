"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "This celebration has become the highlight of our year. The entire neighborhood comes together — it's a feeling of unity that's hard to describe.",
    author: "Community Member",
    role: "Resident, Local Area",
  },
  {
    quote: "The 5-day festival is incredibly well organized. Every year it gets better. The cultural programs, the food, the devotion — it's all beautiful.",
    author: "Annual Visitor",
    role: "Devotee",
  },
  {
    quote: "As a volunteer, I've seen firsthand how much effort goes into making this celebration special. It's not just an event; it's a labor of love.",
    author: "Volunteer",
    role: "Organizing Team",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-[#FFFFFF] to-[#F8F6F2]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px]" />

      <div className="relative layout-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Voices of the Community
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
              What Our Community{" "}
              <span className="gold-text">Says</span>
            </h2>
          </motion.div>

          <div className="stack-desc-cards">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="px-4"
              >
                <p className="font-display text-xl sm:text-2xl lg:text-3xl text-[#4A453C]/70 leading-relaxed italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-display text-gold-400 font-semibold">{testimonials[current].author}</p>
                  <p className="text-[#4A453C]/40 text-sm mt-1">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    i === current ? "w-8 bg-gold-400" : "w-2 bg-[#EDE8E2] hover:bg-gold-400/50"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
