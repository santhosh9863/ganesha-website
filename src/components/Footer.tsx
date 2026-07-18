"use client";

import Link from "next/link";
import { useCallback } from "react";
import { motion } from "framer-motion";
import { siteConfig, navLinks } from "@/data/content";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const scrollToDonation = useCallback(() => {
    const el = document.getElementById("donation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <footer className="relative bg-[#1A1A1A] border-t border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gold-400/6 to-transparent pointer-events-none" />

      <div className="relative layout-container py-8 lg:py-14 pb-[max(20px,env(safe-area-inset-bottom))] lg:pb-[max(32px,env(safe-area-inset-bottom))]">
        {/* Top: Brand + Links + Contact — 3-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">🕉</span>
              <div>
                <p className="font-display text-base text-white font-semibold">{siteConfig.shortName}</p>
                <p className="text-[9px] text-gold-400/60 tracking-[0.2em] uppercase">{siteConfig.badge}</p>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-[220px]">
              {siteConfig.yearsOfLegacy} years of devotion, unity, and grand Ganesha festivities.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 }}
          >
            <h4 className="font-display text-white/70 font-medium mb-3 text-[11px] tracking-wider uppercase">Links</h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/35 hover:text-gold-400 text-xs transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={scrollToDonation}
                  className="text-gold-400/50 hover:text-gold-400 text-xs transition-colors duration-300 cursor-pointer"
                >
                  Donate
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact + Social */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <h4 className="font-display text-white/70 font-medium mb-3 text-[11px] tracking-wider uppercase">Connect</h4>
            <div className="space-y-2">
              <a
                href={siteConfig.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/30 text-xs hover:text-gold-400 transition-colors duration-300"
              >
                <MapPin className="w-3 h-3 text-gold-400/40 shrink-0" />
                <span>{siteConfig.location}</span>
              </a>
              {siteConfig.email && !siteConfig.email.startsWith("hello@") && (
                <div className="flex items-center gap-2 text-white/30 text-xs">
                  <Mail className="w-3 h-3 text-gold-400/40 shrink-0" />
                  <span>{siteConfig.email}</span>
                </div>
              )}
              {siteConfig.phone && !siteConfig.phone.includes("XXXXX") && (
                <div className="flex items-center gap-2 text-white/30 text-xs">
                  <Phone className="w-3 h-3 text-gold-400/40 shrink-0" />
                  <span>{siteConfig.phone}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/25 hover:text-gold-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
                <span className="text-xs">Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-[10px]">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a
            href="https://portfolio-nine-ebon-19.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400/35 hover:text-gold-400/60 text-[10px] font-display tracking-wider transition-colors duration-300"
          >
            Built by Santhosh Krishna.R
          </a>
        </div>
      </div>
    </footer>
  );
}
