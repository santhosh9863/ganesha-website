"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/content";

function getNextFestival(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, 8, 7);
  return now > target ? new Date(year + 1, 8, 7) : target;
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
    <div className="rounded-[28px] p-10 glass-premium shadow-md">
      <p className="text-[#4A453C]/50 text-[0.5rem] lg:text-[0.55rem] tracking-[0.25em] uppercase font-medium text-center leading-relaxed">
        Counting down to
      </p>
      <p className="font-display text-base lg:text-xl font-semibold text-gold-400 text-center mt-2">
        Ganesh Chaturthi
      </p>

      <div className="h-px bg-gold-400/10 mt-10 mb-10" />

      <div className="flex items-stretch justify-center">
        {items.map((item, i) => (
          <div key={item.label} className="flex-1 flex items-stretch justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-gold-400 tabular-nums leading-none tracking-tight">
                {String(item.value).padStart(2, "0")}
              </span>
              <p className="text-[#4A453C]/40 text-[0.4rem] lg:text-[0.5rem] xl:text-[0.55rem] mt-3 uppercase tracking-[0.15em]">
                {item.label}
              </p>
            </div>
            {i < items.length - 1 && (
              <div className="w-px bg-gold-400/10 mx-3 lg:mx-6 self-stretch" />
            )}
          </div>
        ))}
      </div>

      <p className="text-[#4A453C]/30 text-[0.45rem] lg:text-[0.5rem] xl:text-[0.55rem] text-center mt-8 lg:mt-10 tracking-wide">
        {siteConfig.festivalDate}
      </p>
    </div>
  );
}
