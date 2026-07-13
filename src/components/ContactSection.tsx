"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { siteConfig } from "@/data/content";
import SocialIcon from "@/components/SocialIcon";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import PremiumDonateButton from "@/components/PremiumDonateButton";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    reset();
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FCFBF8] to-[#FFFFFF]" />

      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
            Connect{" "}
            <span className="gold-text">With Us</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <div className="card-grid grid-cols-1 lg:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="card-grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Your Name</label>
                  <input {...register("name")} type="text" placeholder="Enter your name" className="w-full h-11 sm:h-12 px-4 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm" />
                  {errors.name && <p className="text-red-400/80 text-xs px-1">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Your Email</label>
                  <input {...register("email")} type="email" placeholder="Enter your email" className="w-full h-11 sm:h-12 px-4 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm" />
                  {errors.email && <p className="text-red-400/80 text-xs px-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Subject</label>
                <input {...register("subject")} type="text" placeholder="What is this about?" className="w-full h-11 sm:h-12 px-4 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm" />
                {errors.subject && <p className="text-red-400/80 text-xs px-1">{errors.subject.message}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Message</label>
                <textarea {...register("message")} rows={4} placeholder="Share your thoughts with us..." className="w-full px-4 py-3.5 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm resize-none" />
                {errors.message && <p className="text-red-400/80 text-xs px-1">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto h-12 px-9 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-[18px] transition-all duration-500 shadow-lg shadow-gold-400/20 cursor-pointer disabled:opacity-50 text-sm focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-8"
            >
              <div className="card p-8 sm:p-10 lg:p-12 text-center">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-4">Follow Us</h3>
                <p className="text-[#4A453C]/50 text-sm leading-premium mb-6">Stay connected through our social media channels for the latest updates and event highlights.</p>
                <div className="flex items-center justify-center gap-6 md:gap-8">
                  <SocialIcon href={siteConfig.social.instagram} icon={<FaInstagram size={26} />} label="Instagram" />
                  <SocialIcon href={siteConfig.social.whatsapp} icon={<FaWhatsapp size={26} />} label="WhatsApp" />
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-gold-400/12 to-gold-400/5 border border-gold-400/25 p-8 sm:p-10 lg:p-12 shadow-lg shadow-gold-400/10 text-center">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-3">Support Our Mission</h3>
                <p className="text-[#4A453C]/50 text-sm leading-premium mb-6">Your donations help us organize this grand celebration and serve the community.</p>
                <div className="flex justify-center">
                  <PremiumDonateButton onClick={() => {}}>
                    Donate Now
                  </PremiumDonateButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
