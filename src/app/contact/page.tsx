"use client";

import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <>
      <FloatingBackButton />
      <main>
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
