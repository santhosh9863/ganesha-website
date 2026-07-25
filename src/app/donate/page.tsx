"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { upiConfig } from "@/data/payment";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import { HandHeart, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function DonatePage() {
  const [copiedUpi, setCopiedUpi] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  return (
    <>
      <FloatingBackButton />
      <main className="pt-16 lg:pt-20 min-h-screen">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Support Our Mission
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Make a{" "}
              <span className="gold-text">Donation</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white rounded-2xl border border-[#4A453C]/8 shadow-sm p-8 text-center">
              {/* QR Code */}
              <div className="relative w-56 h-56 mx-auto mb-6">
                <Image
                  src="/images/qr-code.png"
                  alt="Donation QR Code"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* UPI Details */}
              <div className="space-y-4">
                <div className="text-left">
                  <p className="text-[#4A453C]/50 text-xs uppercase tracking-wider mb-1">UPI ID</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-mono text-[#1A1A1A] bg-[#F8F6F2] px-3 py-1.5 rounded-lg flex-1 truncate">
                      {upiConfig.upiId}
                    </code>
                    <button
                      onClick={() => copyToClipboard(upiConfig.upiId)}
                      className="shrink-0 p-2 rounded-lg bg-gold-400/6 border border-gold-400/10 hover:bg-gold-400/10 transition-colors"
                    >
                      {copiedUpi ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gold-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-[#4A453C]/50 text-xs uppercase tracking-wider mb-1">Payee Name</p>
                  <p className="text-lg font-display font-bold text-[#1A1A1A]">{upiConfig.payeeName}</p>
                </div>
              </div>

              {/* Devotional Quote */}
              <div className="mt-8 pt-6 border-t border-[#4A453C]/8">
                <div className="flex items-start gap-3">
                  <HandHeart className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="text-[#4A453C]/70 text-sm leading-relaxed italic">
                      &ldquo;Every rupee you give is a seed of devotion — it feeds the hungry, 
                      lights the lamp, and brings a smile to someone&rsquo;s heart.&rdquo;
                    </p>
                    <p className="text-[#4A453C]/50 text-xs leading-relaxed italic mt-2">
                      &ldquo;In the service of the divine, no offering is too small — 
                      each contribution carries the weight of a thousand prayers.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#4A453C]/40 text-[10px] sm:text-xs text-center max-w-[450px] mx-auto leading-relaxed mt-6">
              Scan the QR code using any UPI app (PhonePe, GPay, Paytm) to make your donation. 
              Your contributions directly support the festival and community service programs.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
