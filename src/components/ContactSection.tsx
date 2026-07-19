"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contributionSchema, type ContributionFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/Button";
import { Heart, Users, Lightbulb, Palette } from "lucide-react";

const contributionTypes = [
  "Volunteering",
  "Sponsorship",
  "Cultural Programs",
  "Decorations & Materials",
  "Professional Services",
  "Food & Refreshments",
  "Ideas & Suggestions",
  "Other",
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContributionFormData>({
    resolver: zodResolver(contributionSchema),
  });

  const onSubmit = async (data: ContributionFormData) => {
    const msg = `New Contribution Request\n\nName: ${data.name}\nPhone: ${data.phone}\nContribution Type: ${data.contributionType}\nDetails: ${data.details}`;
    window.open(`https://wa.me/919916304636?text=${encodeURIComponent(msg)}`, "_blank");
    reset();
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FCFBF8] to-[#FFFFFF]" />

      <div className="relative layout-container">
        <div className="max-w-[860px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Contribute With Purpose
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
              Every Contribution{" "}
              <span className="gold-text">Has Value</span>
            </h2>
            <p className="text-[#4A453C]/50 max-w-[600px] mx-auto leading-relaxed text-sm sm:text-base mt-7">
              Financial support is just one way to help. If you&apos;d like to contribute your time, skills, resources, cultural programs, sponsorship, decorations, volunteering, or ideas — we&apos;d be delighted to hear from you.
            </p>
          </motion.div>

          {/* Ways to contribute — icon strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-6 sm:gap-10 mt-10 mb-12"
          >
            {[
              { icon: Users, label: "Volunteer" },
              { icon: Heart, label: "Sponsor" },
              { icon: Palette, label: "Perform" },
              { icon: Lightbulb, label: "Ideas" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold-400/8 border border-gold-400/15 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-gold-400/70" />
                </div>
                <span className="text-[10px] text-[#4A453C]/40 font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl border border-gold-400/10 shadow-[0_2px_16px_rgba(0,0,0,0.03)] p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Full Name</label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  className="w-full h-11 px-4 bg-[#FCFBF8] border border-gold-400/12 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 transition-all duration-300 text-sm"
                />
                {errors.name && <p className="text-red-400/80 text-xs px-1">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Phone Number</label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full h-11 px-4 bg-[#FCFBF8] border border-gold-400/12 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 transition-all duration-300 text-sm"
                />
                {errors.phone && <p className="text-red-400/80 text-xs px-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-5">
              <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">
                How would you like to contribute?
              </label>
              <select
                {...register("contributionType")}
                className="w-full h-11 px-4 bg-[#FCFBF8] border border-gold-400/12 rounded-xl text-[#1A1A1A] focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 transition-all duration-300 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select an option</option>
                {contributionTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.contributionType && <p className="text-red-400/80 text-xs px-1">{errors.contributionType.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5 mt-5">
              <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Tell Us More</label>
              <textarea
                {...register("details")}
                rows={4}
                placeholder="Share how you'd like to contribute — your skills, availability, ideas, or anything else..."
                className="w-full px-4 py-3.5 bg-[#FCFBF8] border border-gold-400/12 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 transition-all duration-300 text-sm resize-none"
              />
              {errors.details && <p className="text-red-400/80 text-xs px-1">{errors.details.message}</p>}
            </div>

            <div className="mt-6">
              <Button type="submit" disabled={isSubmitting} variant="primary" size="md" className="w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </motion.form>

          {/* Closing note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-[#4A453C]/35 text-xs text-center max-w-[480px] mx-auto leading-relaxed mt-8"
          >
            Whether it&apos;s an hour of your time, a cultural performance, a sponsorship, or simply a thoughtful idea — every gesture strengthens our celebration.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
