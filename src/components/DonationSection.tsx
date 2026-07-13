"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Check } from "lucide-react";
import { siteConfig } from "@/data/content";
import PremiumDonateButton from "@/components/PremiumDonateButton";

const amounts = [
  { label: "₹101", desc: "Simple Offering", shortDesc: "Support the daily rituals and prayers throughout the festival", recommended: false },
  { label: "₹501", desc: "Prasadam", shortDesc: "Bless a family with sacred prasadam on the day of the festival", recommended: true },
  { label: "₹1,001", desc: "Flower Donation", shortDesc: "Help us decorate the temple with fresh flowers for the celebrations", recommended: false },
];

const impactMessages: Record<string, string> = {
  "₹101": "supports the daily rituals and prayers throughout the festival",
  "₹501": "blesses a family with sacred prasadam on the day of the festival",
  "₹1,001": "helps decorate the temple with fresh flowers for the celebrations",
  "Custom": "supports the festival and community service programs",
};

export default function DonationSection() {
  const [selected, setSelected] = useState("₹501");

  return (
    <section id="donation" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-[#FFFFFF] to-[#F8F6F2]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-400/6 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-400/4 rounded-full blur-[150px]" />

      <div className="relative layout-container">
        <div className="max-w-[860px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Support Our Mission
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
              Make a{" "}
              <span className="gold-text">Donation</span>
            </h2>
            <p className="text-[#4A453C]/50 max-w-[600px] mx-auto leading-premium text-sm sm:text-base mt-7 break-words">
              Your generosity brings our 5-day celebration to life — from food and flowers to cultural events and community service. Every contribution directly supports this {siteConfig.yearsOfLegacy}-year tradition.
            </p>
          </motion.div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="stack-desc-cards text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-gold-400/8 border border-gold-400/15">
              <Heart className="w-4 h-4 text-gold-400" />
              <span className="text-[#4A453C]/60 text-xs sm:text-sm">
                Your <span className="font-semibold text-gold-400">{selected}</span> donation {impactMessages[selected]}
              </span>
            </div>
          </motion.div>

          {/* Donation Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="stack-desc-cards"
          >
            <div className="card-grid grid-cols-1 sm:grid-cols-3">
              {amounts.map((amount) => {
                const isSelected = selected === amount.label;
                return (
                  <button
                    key={amount.label}
                    onClick={() => setSelected(amount.label)}
                    className={`relative flex flex-col items-center justify-center w-full rounded-2xl border cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 p-5 sm:p-6 ${
                      isSelected
                        ? "border-gold-400 bg-gold-400/[0.04] shadow-md"
                        : amount.recommended
                          ? "border-gold-400/20 bg-gold-400/[0.03] shadow-sm hover:border-gold-400/30 hover:shadow-md"
                          : "border-gold-400/8 bg-white shadow-sm hover:border-gold-400/20 hover:shadow-md"
                    }`}
                  >
                    {amount.recommended && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center px-5 py-1.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-white text-[0.65rem] font-bold leading-none rounded-full border border-white/30 shadow-[0_4px_16px_rgba(200,161,74,0.35)] z-10 tracking-[0.04em] whitespace-nowrap">
                        ★ Most Popular ★
                      </span>
                    )}

                    <p className={`font-display font-bold text-[#1A1A1A] leading-none ${
                      amount.recommended ? "mt-2 text-3xl sm:text-4xl" : "mt-1 text-2xl sm:text-3xl"
                    }`}>
                      {amount.label}
                    </p>
                    <p className="text-sm font-medium text-[#4A453C]/55 mt-2.5">
                      {amount.desc}
                    </p>
                    <p className="text-xs text-[#4A453C]/40 mt-2.5 leading-relaxed line-clamp-2 max-w-[85%]">
                      {amount.shortDesc}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Custom Donation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="stack-group"
          >
            <button
              onClick={() => setSelected("Custom")}
              className={`relative w-full rounded-2xl p-5 sm:p-6 border cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
                selected === "Custom"
                  ? "border-gold-400 bg-gold-400/[0.03] shadow-md"
                  : "border-gold-400/8 bg-white shadow-sm hover:border-gold-400/20 hover:shadow-md"
              }`}
            >
              <div className="flex flex-col items-center gap-1.5">
                <p className="font-display text-base sm:text-xl font-bold text-[#1A1A1A]">
                  Custom Amount
                </p>
                <p className="text-xs text-[#4A453C]/40">Donate any amount you wish</p>
              </div>
            </button>
          </motion.div>

          {/* Donate CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="stack-group text-center"
          >
            <PremiumDonateButton onClick={() => {}}>
              Donate {selected === "Custom" ? "Now" : selected}
            </PremiumDonateButton>
          </motion.div>

          {/* Trust Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="stack-group flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {[
              { icon: Shield, text: "100% Secure" },
              { icon: Heart, text: "Tax-Exempt Contribution" },
              { icon: Check, text: "Direct Community Impact" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-gold-400/60" />
                <span className="text-[#4A453C]/60 text-xs">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Transparency Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="stack-group text-[#4A453C]/50 text-xs text-center max-w-[500px] mx-auto leading-premium"
          >
            Your donations are used entirely for the festival and community service programs — from prasadam distribution and floral decorations to cultural events and charitable initiatives. We maintain complete transparency in how every rupee is utilized.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
