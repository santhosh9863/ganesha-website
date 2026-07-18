"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import CountdownTimer from "@/components/CountdownTimer";
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

export default function EventsPage() {
  return (
    <>
      <FloatingBackButton />
      <main className="pt-16 lg:pt-20 pb-8 lg:pb-20">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-14"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-tight">
              Event{" "}
              <span className="gold-text">Schedule</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto mb-12"
          >
            <CountdownTimer />
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-0">
              {events.map((event, i) => (
                <div key={event.day}>
                  {i > 0 && (
                    <div className="my-8 sm:my-10 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-[#1A1A1A]/15 to-transparent" />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="bg-white rounded-3xl border border-gold-400/[0.06] p-6 sm:p-8 shadow-[0_1px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                      <div className="flex items-center gap-2 mb-5">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gold-400/10 text-gold-400 text-[0.65rem] font-semibold leading-none">D{event.day}</span>
                        <span className="text-[#4A453C]/20 select-none" aria-hidden="true">•</span>
                        <span className="text-[0.65rem] font-medium text-[#4A453C]/40">{event.time}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-[1.3] tracking-tight mb-4">{event.title}</h3>
                      <p className="text-[#4A453C]/55 text-sm leading-[1.7] mb-5">{event.description}</p>
                      {event.highlights && <EventChips highlights={event.highlights} />}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
