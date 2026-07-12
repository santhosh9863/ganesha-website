"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import BackButton from "@/components/BackButton";
import { events } from "@/data/content";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-32 section-padding">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-6 md:mb-8">
            <BackButton />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">5-Day Celebration</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Event{" "}
              <span className="gold-text">Schedule</span>
            </h1>
            <p className="text-[#4A453C]/50 mt-6 max-w-text mx-auto">
              From grand inaugurations to the emotional visarjan, every day is filled with devotion and community spirit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto mb-16"
          >
            <CountdownTimer />
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/20 via-gold-400/10 to-transparent -translate-x-px" />

            <div className="space-y-8 lg:space-y-12">
              {events.map((event, i) => (
                <motion.div
                  key={event.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`lg:flex items-center gap-8 ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl card-padding border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 text-sm font-bold border border-gold-400/15">D{event.day}</span>
                        <span className="text-gold-400/60 text-xs tracking-wide">{event.time}</span>
                      </div>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-4">{event.title}</h3>
                      <p className="text-[#4A453C]/50 text-sm leading-relaxed mb-6">{event.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((h) => (
                          <span key={h} className="px-3 py-1 rounded-full bg-gold-400/8 border border-gold-400/15 text-gold-400 text-xs">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-16 shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gold-400 border-[3px] border-[#FFFFFF] shadow-lg shadow-gold-400/20 ring-1 ring-gold-400/30" />
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
