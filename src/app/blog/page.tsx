"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import FlipCard from "@/components/FlipCard";
import { blogPosts } from "@/data/content";

export default function BlogPage() {
  return (
    <>
      <FloatingBackButton />
      <main className="pt-16 lg:pt-20 pb-8 lg:pb-20">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Stories & Updates</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-5 leading-tight">
              Our{" "}
              <span className="gold-text">Blog</span>
            </h1>
            <p className="text-[#4A453C]/50 mt-5 max-w-content">Stories, articles, and updates about our journey and traditions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-full h-full"
              >
                <FlipCard
                  className="h-full"
                  front={
                    <div className="w-full h-full bg-gradient-to-b from-[#FCFBF8] to-white rounded-3xl border border-[rgba(200,161,74,0.18)] p-6 flex flex-col text-left shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-400 text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-[#4A453C]/30 text-xs">{post.date}</span>
                      </div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-[#4A453C]/50 text-xs leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="w-8 h-px bg-gold-400/30 mt-4" />
                    </div>
                  }
                  back={
                    <div className="w-full h-full bg-gradient-to-b from-white to-[#FCFBF8] rounded-3xl border border-[rgba(200,161,74,0.18)] p-6 flex flex-col justify-between shadow-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-400 text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-[#4A453C]/30 text-xs">{post.date}</span>
                        </div>
                        <h2 className="font-display text-sm font-bold text-[#1A1A1A] mb-2 leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-[#4A453C]/50 text-xs leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[#4A453C]/30 text-xs">By {post.author}</span>
                          <span className="text-gold-400/60 text-xs group-hover:text-gold-400 transition-colors duration-300">
                            Read More →
                          </span>
                        </div>
                        <div className="w-8 h-px bg-gold-400/30 mt-3" />
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
