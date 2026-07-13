"use client";

import { motion } from "framer-motion";
import { events } from "@/data/content";

function EventChips({ highlights }: { highlights: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-5 sm:mt-6">
      {highlights.map((h) => (
        <span
          key={h}
          className="shrink-0 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] font-medium bg-gold-400/8 text-gold-400 whitespace-nowrap leading-none"
        >
          {h}
        </span>
      ))}
    </div>
  );
}

export default function EventsSchedule() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Daily{" "}
            <span className="gold-text">Events</span>
          </h2>
        </motion.div>

        <div className="mt-12 lg:mt-14">
          <div className="mx-auto max-w-[900px]">
            <div className="flex flex-col gap-7 sm:gap-8 lg:gap-9">
              {events.map((event, i) => (
                <motion.div
                  key={event.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div
                    className="bg-white border border-[#ECE8DF] shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-gold-400/25 transition-all duration-300 rounded-[28px] p-5 sm:p-7 lg:p-8 min-h-[180px] sm:min-h-[220px]"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gold-400/10 text-gold-400 text-[0.65rem] font-semibold leading-none shrink-0">
                        D{event.day}
                      </span>
                      <span className="text-[0.65rem] sm:text-[0.7rem] font-medium text-[#4A453C]/40 leading-none">
                        {event.time}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1A1A1A] leading-[1.15] lg:leading-[1.2] tracking-tight line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-[#4A453C]/55 text-sm sm:text-base leading-[1.7] lg:leading-[1.8] max-w-[600px] mt-5 sm:mt-6 line-clamp-2">
                      {event.description}
                    </p>

                    {event.highlights && <EventChips highlights={event.highlights} />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
