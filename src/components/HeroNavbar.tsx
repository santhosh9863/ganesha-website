"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, X, Home, Info, Images, Calendar, BookOpen, Phone, Heart } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";
import HamburgerButton from "@/components/HamburgerButton";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("click", handleOutside, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: easePremium }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
      </div>

      <div className="layout-container">
        <div className="flex items-center justify-between h-[72px] lg:h-[90px]">
          <Link href="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-xl bg-gradient-to-br from-gold-400/25 to-gold-400/8 border border-gold-400/25 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-lg group-hover:shadow-gold-400/15">
              <span className="text-gold-400 text-sm lg:text-[17px] font-display font-bold">
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
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white text-sm font-semibold rounded-[18px] transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
              >
                Join Our Celebration
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </nav>

          <div ref={btnRef} className="lg:hidden relative">
            <HamburgerButton
              open={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden bg-[rgba(0,0,0,0.12)]"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              ref={menuRef}
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[72px] right-5 z-50 lg:hidden"
            >
              <div className="relative">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute -top-3 -right-3 z-10 w-7 h-7 rounded-full bg-[#FCFBF8] border border-[#EDE6D7] flex items-center justify-center text-[#4A453C]/40 hover:text-[#1A1A1A] hover:border-gold-400/30 transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
                  aria-label="Close menu"
                >
                  <X className="w-[13px] h-[13px]" />
                </button>

                <div
                  className="w-[250px] max-w-[85vw] p-6 rounded-[24px] bg-[#FCFBF8] border border-[#EDE6D7] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation menu"
                >
                  <nav className="flex flex-col">
                    {[
                      { label: "Home", href: "/", icon: Home },
                      { label: "About", href: "/about", icon: Info },
                      { label: "Gallery", href: "/gallery", icon: Images },
                      { label: "Events", href: "/events", icon: Calendar },
                      { label: "Blog", href: "/blog", icon: BookOpen },
                      { label: "Contact", href: "/contact", icon: Phone },
                      { label: "Donate", href: "#", icon: Heart },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`group flex items-center gap-[14px] py-[14px] px-[18px] rounded-[14px] transition-all duration-[150ms] ease-out focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 ${
                            isActive
                              ? "bg-[#F8E8B5] text-gold-400"
                              : "text-[#1A1A1A] hover:bg-[rgba(200,161,74,0.10)] hover:text-gold-400"
                          }`}
                        >
                          <Icon className="w-[18px] h-[18px] shrink-0 transition-all duration-[150ms]" />
                          <span className="flex-1 text-[17px] font-medium tracking-[-0.01em] transition-all duration-[150ms] group-hover:translate-x-[4px]">
                            {item.label}
                          </span>
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-4 pt-4 border-t border-[rgba(200,161,74,0.10)]">
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="mx-4 mb-5 group relative flex items-center justify-center gap-2.5 h-12 rounded-[14px] bg-gradient-to-b from-gold-400 to-[#b08a30] text-white text-[15px] font-semibold overflow-hidden transition-all duration-200 active:scale-[0.97] shadow-lg shadow-gold-400/20 hover:shadow-xl hover:shadow-gold-400/30 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
                    >
                      <span className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <Heart className="relative z-10 w-[18px] h-[18px]" />
                      <span className="relative z-10">Join Our Celebration</span>
                      <ArrowRight className="relative z-10 w-[14px] h-[14px] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
