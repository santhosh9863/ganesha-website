"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isTouch || !flipped) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setFlipped(false);
      }
    };
    document.addEventListener("click", handleOutside, { passive: true });
    return () => document.removeEventListener("click", handleOutside);
  }, [isTouch, flipped]);

  const toggle = useCallback(() => {
    if (isTouch) setFlipped((prev) => !prev);
  }, [isTouch]);

  const enter = useCallback(() => {
    if (!isTouch) setFlipped(true);
  }, [isTouch]);

  const leave = useCallback(() => {
    if (!isTouch) setFlipped(false);
  }, [isTouch]);

  return (
    <div
      ref={cardRef}
      className={`group perspective-[800px] ${className}`}
      onClick={toggle}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
      tabIndex={0}
      role="button"
      aria-label="Flip card for more information"
    >
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped
            ? "translateY(-4px) scale(1.02) rotateY(180deg)"
            : "translateY(0) scale(1) rotateY(0deg)",
          transition: `transform ${reducedMotion ? "1ms" : "600ms"} cubic-bezier(0.22, 1, 0.36, 1), box-shadow 600ms cubic-bezier(0.22, 1, 0.36, 1)`,
          willChange: "transform",
        }}
      >
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0.01px)",
          }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(0.01px)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
