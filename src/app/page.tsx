"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LegacySection from "@/components/LegacySection";
import FestivalHighlights from "@/components/FestivalHighlights";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import EventsSchedule from "@/components/EventsSchedule";
import DonationSection from "@/components/DonationSection";
import LiveStats from "@/components/LiveStats";
import CountdownTimer from "@/components/CountdownTimer";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ── Supporting proof ── */}
      <LiveStats />

      {/* ── Countdown — elegant announcement block ── */}
      <section className="pt-[152px] lg:pt-[240px] pb-20 lg:pb-24 relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FCFBF8] to-[#FFFFFF]">
        <div className="relative layout-container">
          <div className="max-w-[700px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
                Coming Soon
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
                Celebrating{" "}
                <span className="gold-text">Ganesh Chaturthi</span>
              </h2>
              <p className="text-[#4A453C]/50 max-w-[560px] mx-auto leading-premium text-sm sm:text-base mt-7">
                Join us for 5 days of devotion, culture, and community celebration
              </p>
            </motion.div>

            <div className="mt-9">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      <LegacySection />
      <FestivalHighlights />
      <Gallery />
      <VideoSection />
      <EventsSchedule />
      <DonationSection />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
