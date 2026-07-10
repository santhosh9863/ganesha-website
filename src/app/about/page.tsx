"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegacyTimeline from "@/components/LegacyTimeline";
import LiveStats from "@/components/LiveStats";
import { siteConfig, stats } from "@/data/content";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[#4A453C]/50 hover:text-[#1A1A1A] text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Our Legacy</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              About{" "}
              <span className="gold-text">Us</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {siteConfig.yearsOfLegacy} Years of Devotion & Community Service
              </h2>
              <p className="text-[#4A453C]/50 leading-relaxed">
                {siteConfig.name} was founded in {siteConfig.foundedYear} with a simple vision — to bring the community together in celebrating Lord Ganesha. What started as a small gathering has blossomed into one of the most anticipated annual events.
              </p>
              <p className="text-[#4A453C]/50 leading-relaxed">
                Over {siteConfig.yearsOfLegacy} years, we have grown from a handful of families to a community of thousands. Our 5-day street festival includes cultural performances, spiritual discourses, community games, food festivals, donation drives, and the grand Visarjan procession.
              </p>
              <p className="text-[#4A453C]/50 leading-relaxed">
                Our team comprises dedicated volunteers who work tirelessly to ensure every celebration is more memorable than the last.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
                <div className="aspect-square rounded-2xl glass-gold flex items-center justify-center p-8">
                  <span className="text-[10rem] sm:text-[14rem] opacity-15 select-none">🕉</span>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold-400/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gold-400/8 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-8 mb-24"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl py-8 px-6 text-center border border-gold-400/10 shadow-sm"
              >
                <p className="font-display text-3xl sm:text-4xl font-bold gold-text mb-2">{stat.value}</p>
                <p className="text-[#4A453C]/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Preserve Tradition", desc: "Keep alive the rich cultural and spiritual traditions associated with Ganesha celebrations.", icon: "🪷" },
                { title: "Build Community", desc: "Bring people together through events, feasts, and shared experiences of devotion.", icon: "🤝" },
                { title: "Serve Selflessly", desc: "Organize donation drives, food festivals, and community service initiatives.", icon: "❤️" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl card-padding border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 shadow-sm">
                  <span className="text-4xl block">{item.icon}</span>
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A] mt-5">{item.title}</h3>
                  <p className="text-[#4A453C]/50 text-sm leading-relaxed mt-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <LegacyTimeline />
        <LiveStats />
      </main>
      <Footer />
    </>
  );
}
