"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { siteConfig } from "@/data/content";
import SocialIcon from "@/components/SocialIcon";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-8"
            >
              <div className="card card-padding">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-5">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { label: "Email", value: siteConfig.email, icon: Mail },
                    { label: "Phone", value: siteConfig.phone, icon: Phone },
                    { label: "Location", value: siteConfig.location, icon: MapPin },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gold-400/10 shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gold-400/60 text-[0.6rem] uppercase tracking-wider font-medium">{item.label}</p>
                        <p className="text-[#4A453C]/60 text-sm mt-0.5 break-words">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card card-padding">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-6">Follow Us</h3>
                <div className="flex items-center justify-center gap-4 md:gap-5">
                  <SocialIcon href={siteConfig.social.instagram} icon={<FaInstagram size={22} />} label="Instagram" />
                  <SocialIcon href={siteConfig.social.facebook} icon={<FaFacebookF size={22} />} label="Facebook" />
                  <SocialIcon href={siteConfig.social.youtube} icon={<FaYoutube size={22} />} label="YouTube" />
                  <SocialIcon href={siteConfig.social.twitter} icon={<FaXTwitter size={22} />} label="X (Twitter)" />
                  <SocialIcon href={siteConfig.social.whatsapp} icon={<FaWhatsapp size={22} />} label="WhatsApp" />
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gold-400/12 to-gold-400/5 border border-gold-400/25 card-padding shadow-lg shadow-gold-400/10">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-3">Support Our Mission</h3>
                <p className="text-[#4A453C]/50 text-sm leading-premium mb-6">Your donations help us organize this grand celebration and serve the community.</p>
                <button className="group relative inline-flex items-center justify-center gap-3 h-12 w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-bold rounded-[14px] text-sm transition-all duration-500 shadow-lg shadow-gold-400/25 hover:shadow-[0_12px_32px_rgba(200,161,74,0.4)] hover:shadow-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 overflow-hidden active:scale-[0.98]">
                  <span className="absolute inset-0 bg-gradient-to-b from-white/[0.2] to-transparent top-0 h-[30%] transition-opacity duration-300" />
                  <span className="relative z-10">Donate Now</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
