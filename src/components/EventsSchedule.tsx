"use client";

import { motion } from "framer-motion";
import { events } from "@/data/content";

function EventChips({ highlights }: { highlights: string[] }) {
  return (
    <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
      {highlights.map((h) => (
        <span
          key={h}
          className="shrink-0 px-2 py-0.5 rounded-full text-[0.55rem] leading-none font-medium bg-gold-400/8 text-gold-400 whitespace-nowrap"
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
            <div className="flex flex-col gap-5 sm:gap-6">
              {events.map((event, i) => (
                <motion.div
                  key={event.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="card !rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center justify-center w-[24px] h-[24px] rounded-md bg-gold-400/10 text-gold-400 text-[0.6rem] font-semibold leading-none shrink-0">
                        D{event.day}
                      </span>
                      <span className="text-[0.6rem] sm:text-[0.65rem] font-medium text-[#4A453C]/40 leading-none">
                        {event.time}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-xl lg:text-2xl font-bold text-[#1A1A1A] leading-[1.25] tracking-tight line-clamp-2 mb-2">
                      {event.title}
                    </h3>

                    <p className="text-[#4A453C]/55 text-xs sm:text-sm leading-[1.5] line-clamp-2 mb-3">
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
