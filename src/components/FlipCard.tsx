"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  useEffect(() => {
    if (!isTouch || !active) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleOutside, { passive: true });
    return () => document.removeEventListener("click", handleOutside);
  }, [isTouch, active]);

  const toggle = useCallback(() => {
    if (isTouch) setActive((prev) => !prev);
  }, [isTouch]);

  const enter = useCallback(() => {
    if (!isTouch) setActive(true);
  }, [isTouch]);

  const leave = useCallback(() => {
    if (!isTouch) setActive(false);
  }, [isTouch]);

  return (
    <div
      ref={cardRef}
      onClick={toggle}
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        transform: active
          ? "translateY(-5px) scale(1.01)"
          : "translateY(0) scale(1)",
        boxShadow: active
          ? "0 20px 40px rgba(200,161,74,0.15)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        display: "grid",
      }}
    >
      <div
        style={{
          gridArea: "1/1",
          opacity: active ? 0 : 1,
          transition: "opacity 300ms ease",
        }}
      >
        {front}
      </div>

      <div
        style={{
          gridArea: "1/1",
          opacity: active ? 1 : 0,
          transition: "opacity 300ms ease",
          pointerEvents: active ? "auto" : "none",
        }}
      >
        {back}
      </div>
    </div>
  );
}
