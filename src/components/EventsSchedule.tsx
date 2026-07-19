"use client";

import { motion } from "framer-motion";
import { events } from "@/data/content";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EventsSchedule() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Daily{" "}
            <span className="gold-text">Events</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-[1400px] mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="group bg-white rounded-2xl border border-gold-400/10 p-6 flex flex-col hover:border-gold-400/25 hover:shadow-lg hover:shadow-gold-400/5 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold-400/10 text-gold-400 text-sm font-bold shrink-0">
                  D{event.day}
                </span>
                <span className="text-[0.55rem] text-gold-400/60 tracking-[0.2em] uppercase font-medium">
                  {event.time}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-[#1A1A1A] leading-snug">
                {event.title}
              </h3>

              {event.description && (
                <p className="text-[#4A453C]/50 text-sm leading-relaxed mt-3 flex-1">
                  {event.description}
                </p>
              )}

              {event.highlights && event.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gold-400/8">
                  {event.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.5rem] font-medium bg-gold-400/8 text-gold-400/70 tracking-[0.06em] uppercase"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
