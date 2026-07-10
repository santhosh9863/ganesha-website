"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { volunteerSchema, type VolunteerFormData } from "@/lib/schemas";

export default function VolunteerRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    reset();
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FCFBF8] to-[#FFFFFF]" />

      <div className="relative layout-container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Join the Movement</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Become a{" "}
              <span className="gold-text">Volunteer</span>
            </h2>
          </motion.div>

          <div className="stack-desc-cards">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 }}
              onSubmit={handleSubmit(onSubmit)}
              className="card card-padding flex flex-col gap-6"
            >
              <div className="card-grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Full Name</label>
                  <input {...register("name")} type="text" placeholder="Enter your name" className="w-full h-12 px-5 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 transition-all duration-300 text-sm" />
                  {errors.name && <p className="text-red-400/80 text-xs mt-1.5 px-1">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Email Address</label>
                  <input {...register("email")} type="email" placeholder="Enter your email" className="w-full h-12 px-5 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 transition-all duration-300 text-sm" />
                  {errors.email && <p className="text-red-400/80 text-xs mt-1.5 px-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Phone Number</label>
                <input {...register("phone")} type="tel" placeholder="Enter your phone number" className="w-full h-12 px-5 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 transition-all duration-300 text-sm" />
                {errors.phone && <p className="text-red-400/80 text-xs mt-1.5 px-1">{errors.phone.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">Area of Interest</label>
                <select {...register("interest")} className="w-full h-12 px-5 bg-white border border-gold-400/15 rounded-xl text-[#4A453C]/70 focus:outline-none focus:border-gold-400 transition-all duration-300 text-sm appearance-none cursor-pointer">
                  <option value="" className="bg-white">Select an area</option>
                  <option value="decoration" className="bg-white">Decoration</option>
                  <option value="food" className="bg-white">Food & Prasadam</option>
                  <option value="logistics" className="bg-white">Logistics</option>
                  <option value="cultural" className="bg-white">Cultural Programs</option>
                  <option value="donations" className="bg-white">Donations</option>
                  <option value="general" className="bg-white">General Support</option>
                </select>
                {errors.interest && <p className="text-red-400/80 text-xs mt-1.5 px-1">{errors.interest.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4A453C]/50 text-xs tracking-wide uppercase font-medium">About You</label>
                <textarea {...register("message")} rows={3} placeholder="Tell us about yourself and why you'd like to volunteer" className="w-full px-5 py-4 bg-white border border-gold-400/15 rounded-xl text-[#1A1A1A] placeholder-[#4A453C]/30 focus:outline-none focus:border-gold-400 transition-all duration-300 text-sm resize-none" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10 py-4 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-xl transition-all duration-500 shadow-lg shadow-gold-400/20 cursor-pointer disabled:opacity-50">
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
