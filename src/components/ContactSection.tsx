"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { siteConfig } from "@/data/content";

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
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
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
              className="flex flex-col gap-6"
            >
              <div className="card-grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Your Name</label>
                  <input {...register("name")} type="text" placeholder="Enter your name" className="w-full h-12 px-5 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm" />
                  {errors.name && <p className="text-red-400/80 text-xs px-1">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Your Email</label>
                  <input {...register("email")} type="email" placeholder="Enter your email" className="w-full h-12 px-5 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm" />
                  {errors.email && <p className="text-red-400/80 text-xs px-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Subject</label>
                <input {...register("subject")} type="text" placeholder="What is this about?" className="w-full h-12 px-5 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm" />
                {errors.subject && <p className="text-red-400/80 text-xs px-1">{errors.subject.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Message</label>
                <textarea {...register("message")} rows={5} placeholder="Share your thoughts with us..." className="w-full px-5 py-4 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm resize-none" />
                {errors.message && <p className="text-red-400/80 text-xs px-1">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10 py-4 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-xl transition-all duration-500 shadow-lg shadow-gold-400/20 cursor-pointer disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-6"
            >
              <div className="card card-padding">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { label: "Email", value: siteConfig.email },
                    { label: "Phone", value: siteConfig.phone },
                    { label: "Location", value: siteConfig.location },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-gold-400/60 text-xs uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-[#4A453C]/60 text-sm mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card card-padding">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-6">Follow Us</h3>
                <div className="flex gap-3">
                  {["instagram", "facebook", "youtube", "twitter", "whatsapp"].map((social) => (
                    <a key={social} href={siteConfig.social[social as keyof typeof siteConfig.social]} className="w-12 h-12 rounded-full bg-gold-400/6 hover:bg-gold-400/15 hover:border-gold-400/30 border border-gold-400/10 flex items-center justify-center text-[#4A453C]/50 hover:text-gold-400 transition-all duration-300 text-xs capitalize focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2">
                      {social[0].toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gold-400/10 to-gold-400/5 border border-gold-400/20 card-padding">
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-4">🙏 Support Our Mission</h3>
                <p className="text-[#4A453C]/50 text-sm leading-premium mb-6">Your donations help us organize this grand celebration.</p>
                <button className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-full text-sm transition-all duration-500 shadow-lg shadow-gold-400/20 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2">Donate Now</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
