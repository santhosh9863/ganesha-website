"use client";

import { motion } from "framer-motion";
import { events } from "@/data/content";

const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
};

const lineVariants = {
  hidden: { scaleY: 0, transformOrigin: "top" as const },
  visible: { scaleY: 1, transition: { duration: 1.8, ease: easePremium } },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: easePremium },
  }),
};

const tagStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.25 },
  },
};

const tagItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easePremium } },
};

export default function EventsSchedule() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="relative layout-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Daily{" "}
            <span className="gold-text">Events</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 lg:mt-20 mx-auto max-w-[1200px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
            className="hidden lg:block absolute left-[200px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold-400/15 to-transparent origin-top"
          />

          {events.map((event, i) => (
            <div key={event.day} className="relative pb-16 lg:pb-20 last:pb-0">
              <div className="hidden lg:block absolute top-0 left-[200px] right-0 h-px bg-gold-400/8" />

              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5 lg:gap-0 pt-12 lg:pt-16 first:pt-0">
                <div className="relative flex lg:flex-col items-center lg:items-end gap-3 lg:gap-0">
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={dotVariants}
                    className="hidden lg:block absolute right-[-8px] top-[5px] w-[17px] h-[17px] rounded-full border-[3px] border-gold-400 bg-white shadow-sm shadow-gold-400/10 z-10"
                  />

                  <span className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold-400/10 text-gold-400 text-xs font-bold shrink-0">
                    D{event.day}
                  </span>

                  <div className="lg:text-right lg:pr-8">
                    <p className="text-gold-400 text-[0.55rem] lg:text-[0.6rem] tracking-[0.25em] uppercase font-semibold">
                      D{event.day} &mdash; {event.time}
                    </p>
                    <p className="text-[#4A453C]/30 text-[0.5rem] lg:text-[0.55rem] mt-1 lg:mt-2 tracking-[0.15em] uppercase hidden lg:block">
                      Day {event.day}
                    </p>
                  </div>
                </div>

                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={contentVariants}
                  className="lg:pl-12"
                >
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-[1.15] lg:leading-[1.2] tracking-tight">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="text-[#4A453C]/55 text-sm sm:text-base leading-[1.8] mt-4 lg:mt-5 max-w-[580px]">
                      {event.description}
                    </p>
                  )}

                  {event.highlights && event.highlights.length > 0 && (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={tagStagger}
                      className="flex flex-wrap gap-2 lg:gap-2.5 mt-5 lg:mt-6"
                    >
                      {event.highlights.map((h) => (
                        <motion.span
                          key={h}
                          variants={tagItem}
                          className="inline-flex items-center px-3 py-1 rounded-full text-[0.5rem] sm:text-[0.55rem] font-medium bg-gold-400/8 text-gold-400/70 tracking-[0.08em] uppercase"
                        >
                          {h}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {i < events.length - 1 && (
                <div className="lg:hidden mt-6 border-t border-gold-400/8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
