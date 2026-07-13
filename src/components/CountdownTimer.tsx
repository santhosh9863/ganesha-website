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
      <p className="text-[#4A453C]/50 text-[0.5rem] lg:text-[0.55rem] tracking-[0.25em] uppercase font-medium text-center leading-relaxed mb-4">
        Counting down to
      </p>
      <p className="font-display text-sm lg:text-base font-semibold text-gold-400 text-center mb-10">
        Ganesh Chaturthi
      </p>

      <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center p-4 sm:p-5 lg:p-7 rounded-2xl bg-white border border-gold-400/10 shadow-sm min-h-[90px] sm:min-h-[110px] lg:min-h-[130px]"
          >
            <span className="font-display text-sm sm:text-2xl lg:text-4xl font-bold text-gold-400 tabular-nums leading-none tracking-tight">
              {String(item.value).padStart(2, "0")}
            </span>
            <p className="text-[#4A453C]/40 text-[0.4rem] sm:text-[0.5rem] lg:text-[0.55rem] mt-2 sm:mt-3 uppercase tracking-[0.15em]">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gold-400/70 text-[0.6rem] lg:text-[0.65rem] text-center mt-28 lg:mt-32 tracking-[0.15em] font-medium">
        {siteConfig.festivalDate}
      </p>
    </div>
  );
}
