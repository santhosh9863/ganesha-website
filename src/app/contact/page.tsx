"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-32">
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
