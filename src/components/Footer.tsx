"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, navLinks } from "@/data/content";
import SocialIcon from "@/components/SocialIcon";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] border-t border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gold-400/8 to-transparent pointer-events-none" />

      <div className="relative layout-container py-20 lg:py-24">
        <div className="card-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🕉</span>
              <div>
                <p className="font-display text-lg text-white font-semibold">{siteConfig.shortName}</p>
                <p className="text-[10px] text-gold-400/70 tracking-[0.2em] uppercase">{siteConfig.badge}</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-premium max-w-xs">
              {siteConfig.yearsOfLegacy} years of devotion, unity, and grand Ganesha festivities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <h4 className="font-display text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-gold-400 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-white font-semibold mb-5 text-sm tracking-wide">Connect</h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/40">{siteConfig.email}</p>
              <p className="text-white/40">{siteConfig.phone}</p>
              <p className="text-white/40">{siteConfig.location}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="font-display text-white font-semibold mb-5 text-sm tracking-wide">Follow Us</h4>
            <div className="flex items-center justify-center md:justify-start gap-3.5 md:gap-[18px]">
              <SocialIcon href={siteConfig.social.instagram} icon={<FaInstagram size={20} />} label="Instagram" />
              <SocialIcon href={siteConfig.social.facebook} icon={<FaFacebookF size={20} />} label="Facebook" />
              <SocialIcon href={siteConfig.social.youtube} icon={<FaYoutube size={20} />} label="YouTube" />
              <SocialIcon href={siteConfig.social.twitter} icon={<FaXTwitter size={20} />} label="X (Twitter)" />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-gold-400/50 text-xs font-display tracking-wider">
            {siteConfig.yearsOfLegacy} Years of Legacy
          </p>
        </div>
      </div>
    </footer>
  );
}
