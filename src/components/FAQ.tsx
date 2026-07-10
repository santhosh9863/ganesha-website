"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/content";
import { HiChevronDown } from "react-icons/hi";

function AccordionItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gold-400/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
      >
        <span className="text-[#4A453C]/70 group-hover:text-[#1A1A1A] font-medium text-sm transition-colors duration-300 pr-4">
          {faq.q}
        </span>
        <HiChevronDown
          className={`w-4 h-4 text-gold-400/60 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#4A453C]/50 text-sm leading-premium max-w-[640px]">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-[#FFFFFF] to-[#F8F6F2]" />

      <div className="relative layout-container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Got Questions?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Frequently Asked{" "}
              <span className="gold-text">Questions</span>
            </h2>
          </motion.div>

          <div className="stack-desc-cards">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 }}
              className="card card-padding"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
