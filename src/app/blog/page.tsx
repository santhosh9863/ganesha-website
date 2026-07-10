"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/content";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Stories & Updates</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Our{" "}
              <span className="gold-text">Blog</span>
            </h1>
            <p className="text-[#4A453C]/50 mt-6 max-w-text mx-auto">Stories, articles, and updates about our journey and traditions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl card-padding border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 shadow-sm group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold-400/10 text-gold-400 text-xs font-medium">{post.category}</span>
                  <span className="text-[#4A453C]/30 text-xs">{post.date}</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-gold-400 transition-colors duration-300">{post.title}</h2>
                <p className="text-[#4A453C]/50 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#4A453C]/30 text-xs">By {post.author}</span>
                  <span className="text-gold-400/60 text-sm group-hover:text-gold-400 transition-colors duration-300">Read More →</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
