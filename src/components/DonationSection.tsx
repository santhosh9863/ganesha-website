"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/data/content";

const amounts = [
  { label: "₹501", desc: "Prasadam", shortDesc: "Bless a family with sacred prasadam", recommended: false },
  { label: "₹1,001", desc: "Flower Donation", shortDesc: "Support temple-style floral decorations", recommended: false },
  { label: "₹5,001", desc: "Annadanam", shortDesc: "Provide a full meal for 100+ devotees", recommended: true },
];

export default function DonationSection() {
  const [selected, setSelected] = useState("₹5,001");

  return (
    <section className="section-spacing relative overflow-hidden">
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
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Make a{" "}
              <span className="gold-text">Donation</span>
            </h2>
            <p className="text-[#4A453C]/50 max-w-[600px] mx-auto leading-premium text-sm sm:text-base mt-5">
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
                Your <span className="font-semibold text-gold-400">₹5,001</span> donation feeds <span className="font-semibold text-gold-400">100+</span> devotees
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
                    className={`group relative text-left w-full rounded-2xl p-6 sm:p-7 border cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
                      isSelected
                        ? "border-gold-400 bg-gold-400/[0.04] shadow-lg shadow-gold-400/10"
                        : "border-gold-400/10 bg-white hover:border-gold-400/25 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {amount.recommended && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold-400 text-white text-[0.5rem] rounded-full font-medium tracking-wide whitespace-nowrap">
                        Most Popular
                      </span>
                    )}
                    <div className="flex items-start justify-between">
                      <div>
                        <p className={`font-display text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                          isSelected ? "gold-text" : "text-[#1A1A1A] group-hover:text-gold-400"
                        }`}>
                          {amount.label}
                        </p>
                        <p className="text-[#4A453C]/60 text-sm font-medium mt-0.5">{amount.desc}</p>
                        <p className="text-[#4A453C]/40 text-xs mt-3 leading-relaxed">{amount.shortDesc}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 transition-all duration-300 ${
                        isSelected
                          ? "border-gold-400 bg-gold-400"
                          : "border-gold-400/25"
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
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
              className={`group w-full rounded-2xl p-6 border cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
                selected === "Custom"
                  ? "border-gold-400 bg-gold-400/[0.04] shadow-lg shadow-gold-400/10"
                  : "border-gold-400/10 bg-white hover:border-gold-400/25 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className={`font-display text-lg sm:text-xl font-bold transition-colors duration-300 ${
                    selected === "Custom" ? "gold-text" : "text-[#1A1A1A] group-hover:text-gold-400"
                  }`}>
                    Custom Amount
                  </p>
                  <p className="text-[#4A453C]/40 text-xs mt-1">Donate any amount you wish</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                  selected === "Custom"
                    ? "border-gold-400 bg-gold-400"
                    : "border-gold-400/25"
                }`}>
                  {selected === "Custom" && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
            </button>
          </motion.div>

          {/* Donate CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="stack-cards-cta text-center"
          >
            <button className="group relative inline-flex items-center justify-center gap-2.5 h-14 sm:h-16 px-10 sm:px-12 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-500 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 hover:shadow-xl text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2">
              Donate {selected === "Custom" ? "Now" : selected}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Trust Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="stack-group flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          >
            {[
              { icon: Shield, text: "100% Secure" },
              { icon: Heart, text: "Tax-Exempt Contribution" },
              { icon: Check, text: "Direct Community Impact" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-gold-400/60" />
                <span className="text-[#4A453C]/30 text-xs">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Transparency Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="stack-group text-[#4A453C]/15 text-xs text-center max-w-[500px] mx-auto leading-premium"
          >
            Your donations are used entirely for the festival and community service programs — from prasadam distribution and floral decorations to cultural events and charitable initiatives. We maintain complete transparency in how every rupee is utilized.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
