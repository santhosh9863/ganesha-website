"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegacyTimeline from "@/components/LegacyTimeline";
import LiveStats from "@/components/LiveStats";
import FlipCard from "@/components/FlipCard";
import BackButton from "@/components/BackButton";
import { siteConfig, statCards } from "@/data/content";

export default function AboutPage() {
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
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-full"
              >
                <FlipCard
                  front={
                    <div className="w-full h-full bg-gradient-to-b from-[#FCFBF8] to-white rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col items-center justify-center text-center shadow-sm">
                      <span className="text-3xl mb-3">{stat.icon}</span>
                      <p className="font-display text-3xl sm:text-4xl font-bold gold-text leading-none">
                        {stat.value}
                      </p>
                      <p className="text-[#4A453C]/45 text-sm mt-2.5">
                        {stat.label}
                      </p>
                      <div className="w-8 h-px bg-gold-400/30 mt-4" />
                    </div>
                  }
                  back={
                    <div className="w-full h-full bg-gradient-to-b from-white to-[#FCFBF8] rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col items-center justify-center text-center shadow-lg">
                      <span className="text-xl mb-2.5">{stat.icon}</span>
                      <p className="font-display text-base font-bold text-[#1A1A1A]">
                        {stat.backTitle}
                      </p>
                      <p className="text-[#4A453C]/50 text-sm leading-relaxed mt-3 max-w-[200px]">
                        {stat.backDescription}
                      </p>
                      <div className="w-8 h-px bg-gold-400/30 mt-4" />
                    </div>
                  }
                />
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
                <div key={item.title} className="w-full">
                  <FlipCard
                    front={
                      <div className="w-full h-full bg-gradient-to-b from-[#FCFBF8] to-white rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col items-center justify-center text-center shadow-sm">
                        <span className="text-4xl mb-4">{item.icon}</span>
                        <h3 className="font-display text-lg font-bold text-[#1A1A1A]">
                          {item.title}
                        </h3>
                        <div className="w-8 h-px bg-gold-400/30 mt-4" />
                      </div>
                    }
                    back={
                      <div className="w-full h-full bg-gradient-to-b from-white to-[#FCFBF8] rounded-3xl border border-[rgba(200,161,74,0.18)] p-7 flex flex-col items-center justify-center text-center shadow-lg">
                        <span className="text-2xl mb-3">{item.icon}</span>
                        <h3 className="font-display text-base font-bold text-[#1A1A1A]">
                          {item.title}
                        </h3>
                        <p className="text-[#4A453C]/50 text-sm leading-relaxed mt-3 max-w-[280px]">
                          {item.desc}
                        </p>
                        <div className="w-8 h-px bg-gold-400/30 mt-4" />
                      </div>
                    }
                  />
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
