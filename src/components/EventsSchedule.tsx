"use client";

import { motion } from "framer-motion";
import { events } from "@/data/content";

function EventChips({ highlights }: { highlights: string[] }) {
  const visible = highlights.slice(0, 3);
  const remaining = highlights.length - 3;

  return (
    <div className="flex flex-nowrap items-center gap-1.5 overflow-hidden">
      {visible.map((h) => (
        <span
          key={h}
          className="shrink-0 px-2 py-0.5 rounded-full text-[0.55rem] leading-none font-medium bg-gold-400/8 text-gold-400 whitespace-nowrap"
        >
          {h}
        </span>
      ))}
      {remaining > 0 && (
        <span className="shrink-0 px-2 py-0.5 rounded-full text-[0.55rem] leading-none font-medium bg-gold-400/6 text-gold-400/60 whitespace-nowrap">
          +{remaining}
        </span>
      )}
    </div>
  );
}

export default function EventsSchedule() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
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
                  <div className="bg-white rounded-3xl border border-gold-400/[0.06] p-5 sm:p-6 shadow-[0_1px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                    <div className="flex items-center gap-1.5 mb-4">
                      <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-md bg-gold-400/10 text-gold-400 text-[0.65rem] font-semibold leading-none">
                        D{event.day}
                      </span>
                      <span className="text-[#4A453C]/20 select-none" aria-hidden="true">•</span>
                      <span className="text-[0.65rem] font-medium text-[#4A453C]/40">
                        {event.time}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-[1.3] tracking-tight line-clamp-2 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-[#4A453C]/55 text-sm leading-[1.6] line-clamp-2 mb-4">
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
