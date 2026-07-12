"use client";

import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
import { events } from "@/data/content";

export default function EventsSchedule() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#F8F6F2] to-[#FFFFFF]" />

      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            5-Day Schedule
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
            Daily{" "}
            <span className="gold-text">Events</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/20 via-gold-400/10 to-transparent -translate-x-px" />

            <div className="space-y-10 lg:space-y-16">
              {events.map((event, i) => (
                <motion.div
                  key={event.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`lg:flex items-center gap-8 ${
                    i % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <FlipCard
                      front={
                        <div className="w-full h-full bg-gradient-to-b from-[#FCFBF8] to-white rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 text-sm font-bold border border-gold-400/15">
                              D{event.day}
                            </span>
                            <span className="text-gold-400/60 text-xs tracking-wide">{event.time}</span>
                          </div>
                          <h3 className="font-display text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-3">
                            {event.title}
                          </h3>
                          <p className="text-[#4A453C]/50 text-sm leading-premium flex-1 line-clamp-3">
                            {event.description}
                          </p>
                          <div className="w-8 h-px bg-gold-400/30 mt-4" />
                        </div>
                      }
                      back={
                        <div className="w-full h-full bg-gradient-to-b from-white to-[#FCFBF8] rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col justify-between shadow-lg">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 text-sm font-bold border border-gold-400/15">
                                D{event.day}
                              </span>
                              <span className="text-gold-400/60 text-xs tracking-wide">{event.time}</span>
                            </div>
                            <h3 className="font-display text-base font-bold text-[#1A1A1A] mb-3">
                              {event.title}
                            </h3>
                            <p className="text-[#4A453C]/50 text-sm leading-premium mb-6">
                              {event.description}
                            </p>
                          </div>
                          <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {event.highlights.map((h) => (
                                <span
                                  key={h}
                                  className="px-3 py-1 rounded-full bg-gold-400/8 border border-gold-400/15 text-gold-400 text-xs"
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
                            <div className="w-8 h-px bg-gold-400/30" />
                          </div>
                        </div>
                      }
                    />
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-16 shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gold-400 border-[3px] border-[#F8F6F2] shadow-lg shadow-gold-400/20 ring-1 ring-gold-400/30" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
