"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-[#FFFFFF] to-[#F8F6F2]" />

      <div className="relative layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Cinematic Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-6 leading-tight">
            Festival{" "}
            <span className="gold-text">Highlights</span>
          </h2>
        </motion.div>

        <div className="stack-desc-cards">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="card-grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="aspect-[9/16] rounded-3xl overflow-hidden relative group cursor-pointer bg-black" onClick={togglePlay}>
              {!error && (
                <video
                  ref={videoRef}
                  src="/videos/festival-highlights.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  loop
                  onError={() => setError(true)}
                />
              )}
              {(!playing || error) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-500">
                  <div className="text-center">
                    <span className="text-5xl mb-3 block text-white/80 group-hover:text-white transition-opacity duration-500">▶</span>
                    <p className="text-white/60 text-sm">2024 Festival Highlights</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
