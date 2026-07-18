"use client";

import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/content";

interface GalleryLightboxProps {
  selectedId: number | null;
  onClose: () => void;
}

export default function GalleryLightbox({ selectedId, onClose }: GalleryLightboxProps) {
  const img = galleryImages.find((g) => g.id === selectedId);

  return (
    <AnimatePresence>
      {selectedId && img && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <p className="text-white font-display text-xl font-semibold">{img.alt}</p>
              <p className="text-gold-400/80 text-sm mt-1">{img.category}</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition-colors focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
