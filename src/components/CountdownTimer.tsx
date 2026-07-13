"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/content";

function getNextFestival(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, 8, 16);
  return now > target ? new Date(year + 1, 8, 16) : target;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = getNextFestival();
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div>
      <p className="text-[#4A453C]/50 text-[0.5rem] lg:text-[0.55rem] tracking-[0.25em] uppercase font-medium text-center leading-relaxed mb-3">
        Counting down to
      </p>
      <p className="font-display text-sm lg:text-base font-semibold text-gold-400 text-center mb-8">
        Ganesh Chaturthi
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-[24px] bg-white border border-gold-400/10 shadow-sm"
          >
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400 tabular-nums leading-none tracking-tight">
              {String(item.value).padStart(2, "0")}
            </span>
            <p className="text-[#4A453C]/40 text-[0.5rem] lg:text-[0.55rem] mt-3 uppercase tracking-[0.15em]">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[#4A453C]/30 text-[0.5rem] lg:text-[0.55rem] text-center mt-10 tracking-wide">
        {siteConfig.festivalDate}
      </p>
    </div>
  );
}
