"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, ImageIcon, Calendar, FileText, Phone, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";

const navIcons: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  About: <Info className="w-4 h-4" />,
  Gallery: <ImageIcon className="w-4 h-4" />,
  Events: <Calendar className="w-4 h-4" />,
  Blog: <FileText className="w-4 h-4" />,
  Contact: <Phone className="w-4 h-4" />,
};

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const showGlass = scrolled || !isHome;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showGlass
          ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          showGlass ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
      </div>

      <div className="layout-container">
        <div className="flex items-center justify-between h-[72px] lg:h-[90px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
            <div className="w-9 h-9 lg:w-[46px] lg:h-[46px] rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-400/5 border border-gold-400/20 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-gold-400/40 group-hover:shadow-lg group-hover:shadow-gold-400/10">
              <span className="text-gold-400 text-sm lg:text-base font-display font-bold">
                SG
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm lg:text-base font-display text-[#1A1A1A] font-semibold tracking-wide leading-tight">
                {siteConfig.shortName}
              </p>
              <p className="text-[9px] lg:text-[10px] text-gold-400/60 tracking-[0.25em] uppercase leading-tight mt-0.5 lg:mt-1">
                Since {siteConfig.foundedYear}
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 lg:px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
                    isActive
                      ? "text-gold-400"
                      : "text-[#4A453C]/70 hover:text-[#1A1A1A]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold-400 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold-400/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              )}
            </Link>
              );
            })}

            <div className="ml-8 lg:ml-10 pl-8 lg:pl-10 border-l border-[#EDE8E2]">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
              >
                Join Our Celebration
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-gold-400/6 hover:bg-gold-400/12 transition-colors active:scale-95 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-5 h-5 text-[#1A1A1A]" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] lg:hidden z-40"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="relative bg-white/95 backdrop-blur-2xl border-b border-gold-400/10 shadow-xl"
            >
              <div className="layout-container py-6">
                {/* Logo at top of drawer */}
                <div className="flex items-center gap-3 pb-6 border-b border-[#EDE8E2]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-400/5 border border-gold-400/20 flex items-center justify-center">
                    <span className="text-gold-400 text-sm font-display font-bold">SG</span>
                  </div>
                  <div>
                    <p className="text-sm font-display text-[#1A1A1A] font-semibold">{siteConfig.shortName}</p>
                    <p className="text-[9px] text-gold-400/60 tracking-[0.25em] uppercase">Since {siteConfig.foundedYear}</p>
                  </div>
                </div>

                {/* Navigation links */}
                <div className="py-4 space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, ease: easeOut }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-4 px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
                            isActive
                              ? "bg-gold-400/10 text-gold-400 border border-gold-400/15"
                              : "text-[#4A453C]/70 hover:bg-[#F0EBE4]/50 hover:text-[#1A1A1A]"
                          }`}
                        >
                          <span
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isActive
                                ? "bg-gold-400/10 text-gold-400"
                                : "bg-[#F0EBE4]/50 text-[#4A453C]/40"
                            }`}
                          >
                            {navIcons[link.label]}
                          </span>
                          <span className="flex-1">{link.label}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, ease: easeOut }}
                  className="pt-4 border-t border-[#EDE8E2]"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gold-400 hover:bg-gold-500 text-white text-sm font-semibold active:scale-[0.98] transition-all duration-300 shadow-lg shadow-gold-400/20 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
                  >
                    Join Our Celebration
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
