"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import BackButton from "@/components/BackButton";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-6 md:mb-8">
            <BackButton />
          </div>
        </div>
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
