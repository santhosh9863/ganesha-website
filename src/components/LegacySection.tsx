"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import CountUp from "react-countup";
import { siteConfig } from "@/data/content";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const opening = {
  overline: "Our Legacy",
  title: "14 Years of Devotion",
  subtitle: `A story told across ${siteConfig.yearsOfLegacy} years of unwavering faith and community spirit.`,
};

interface Stat {
  end: number;
  suffix: string;
  label: string;
}

interface Milestone {
  year: number;
  text: string;
}

interface Chapter {
  id: string;
  chapter: string;
  yearLabel: string;
  subtitle: string;
  title: string;
  paragraphs: string[];
  emphasis: string;
  stat?: Stat;
  milestones?: Milestone[];
  visualVariant: "light" | "dark" | "warm";
}

const chapters: Chapter[] = [
  {
    id: "genesis",
    chapter: "Chapter I",
    yearLabel: "2012",
    subtitle: "Where It Began",
    title: "The First Gathering",
    paragraphs: [
      "It started quietly. A handful of families in our neighborhood who shared a deep devotion for Lord Ganesha decided to celebrate together. There was no grand plan \u2014 just a desire to bring the community closer through faith.",
      "That first gathering was small, but the feeling it created was unforgettable. It planted a seed that would grow far beyond what anyone imagined.",
    ],
    emphasis: "Just a handful of families \u2014 united by devotion.",
    stat: { end: 14, suffix: "+", label: "Years of Unbroken Tradition" },
    visualVariant: "light",
  },
  {
    id: "growth",
    chapter: "Chapter II",
    yearLabel: "2015 \u2014 2019",
    subtitle: "Roots That Grew",
    title: "Word Spread Through the Streets",
    paragraphs: [
      "What began as a single evening of prayer grew into a multi-day celebration. More families joined each year. Streets were decorated. Cultural programs were introduced. The celebration became something the entire community looked forward to.",
      "By 2019, our small gathering had transformed into a five-day street festival that brought together thousands. Each year added a new chapter to our story.",
    ],
    milestones: [
      { year: 2015, text: "First community feast" },
      { year: 2016, text: "Moved to the streets" },
      { year: 2017, text: "Cultural programs began" },
      { year: 2018, text: "Annadanam food drive" },
      { year: 2019, text: "Expanded to 5 days" },
    ],
    emphasis: "From one evening to five days of celebration.",
    stat: { end: 5000, suffix: "+", label: "Devotees Served Every Year" },
    visualVariant: "warm",
  },
  {
    id: "resilience",
    chapter: "Chapter III",
    yearLabel: "2020 \u2014 2022",
    subtitle: "Through Every Season",
    title: "Resilience",
    paragraphs: [
      "When the world paused, our devotion didn\u2019t. We adapted with intimate ceremonies, maintaining the sacred thread of tradition even in the most challenging times.",
      "Those years taught us something profound: this celebration was never about grandeur \u2014 it was about continuity. The spirit of the community, tested but unbroken.",
    ],
    emphasis: "The celebration adapted. The spirit remained unbroken.",
    visualVariant: "dark",
  },
  {
    id: "tradition",
    chapter: "Chapter IV",
    yearLabel: "2023 \u2014 2026",
    subtitle: "A Community Institution",
    title: "A Tradition That Belongs to Everyone",
    paragraphs: [
      "Today, the celebration spans five days and transforms our streets into a space of devotion, culture, and service. It takes hundreds of volunteers working year-round to serve thousands of devotees.",
      "It has become a tradition that families pass down \u2014 a legacy of faith, community, and giving that belongs to everyone who takes part.",
    ],
    milestones: [
      { year: 2023, text: "10 Year Milestone" },
      { year: 2024, text: "Expanded community programs" },
      { year: 2025, text: "Record participation" },
      { year: 2026, text: "14 Years of Legacy" },
    ],
    emphasis: "A tradition that belongs to the entire community.",
    stat: { end: 1000, suffix: "+", label: "Dedicated Volunteers" },
    visualVariant: "warm",
  },
];

const closing = {
  quote:
    "Every year, we choose to continue this tradition \u2014 not out of habit, but because it brings people together in ways that nothing else does.",
  cta: "Read Our Full Story",
  ctaHref: "/about",
};

function SectionProgress({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-400/0 via-gold-400 to-gold-400/0 origin-left z-50 pointer-events-none"
    />
  );
}

function PhotoPlaceholder({
  variant,
  year,
}: {
  variant: "light" | "dark" | "warm";
  year?: string;
}) {
  const gradients: Record<string, string> = {
    light: "from-gold-400/8 via-gold-400/3 to-transparent",
    dark: "from-gold-400/5 via-gold-400/2 to-transparent",
    warm: "from-gold-400/10 via-gold-400/4 to-transparent",
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F0EBE4]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[variant]}`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[6rem] sm:text-[8rem] lg:text-[10rem] text-gold-400/15 select-none leading-none">
          &#x1F549;
        </span>
      </div>
      {year && (
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
          <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[#4A453C]/30 font-medium">
            {year}
          </span>
        </div>
      )}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
        <div className="w-6 h-6 rounded-full border border-gold-400/10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400/50" />
        </div>
      </div>
    </div>
  );
}

function AnimatedStat({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      <span className="font-display text-[clamp(1.75rem,6vw,3rem)] sm:text-4xl lg:text-5xl font-semibold text-gold-400 tabular-nums tracking-tight">
        {isInView ? (
          <CountUp
            end={stat.end}
            duration={2.5}
            separator=","
            easingFn={(t) => 1 - Math.pow(1 - t, 3)}
          />
        ) : (
          0
        )}
        {stat.suffix}
      </span>
      <p className="text-[#4A453C]/50 text-xs sm:text-sm mt-1.5 leading-premium max-w-[14rem] lg:max-w-none">
        {stat.label}
      </p>
    </motion.div>
  );
}

function MilestoneStrip({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="card-grid grid-cols-2 sm:grid-cols-5 py-6 sm:py-10 border-y border-gold-400/10 my-6 sm:my-10">
      {milestones.map((m, i) => (
        <motion.div
          key={m.year}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
          className="group"
        >
          <span className="font-display text-base sm:text-lg lg:text-xl text-gold-400/70 tabular-nums">
            {m.year}
          </span>
          <p className="text-[0.65rem] sm:text-xs text-[#4A453C]/40 mt-1 leading-snug sm:leading-relaxed group-hover:text-[#1A1A1A]/60 transition-colors duration-300">
            {m.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function ChapterScene({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      className="card-grid grid-cols-1 lg:grid-cols-2 items-center"
    >
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <PhotoPlaceholder variant={chapter.visualVariant} year={chapter.yearLabel} />
      </div>

      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div className="max-w-xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <span className="text-[0.6rem] sm:text-[0.55rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gold-400/60 font-medium">
              {chapter.chapter}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold-400/20 to-transparent" />
            <span className="text-[0.6rem] sm:text-[0.55rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#4A453C]/30 font-mono tabular-nums">
              {chapter.yearLabel}
            </span>
          </div>

          <h3 className="font-display text-[clamp(1.35rem,4.5vw,2rem)] sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] leading-[1.15] sm:leading-[1.1] tracking-tight">
            {chapter.title}
          </h3>

          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
            {chapter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[#4A453C]/65 text-[0.9375rem] sm:text-base leading-premium"
              >
                {p}
              </p>
            ))}
          </div>

          {chapter.milestones && (
            <MilestoneStrip milestones={chapter.milestones} />
          )}

          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
            className="font-display text-[clamp(0.95rem,3.5vw,1.125rem)] sm:text-lg lg:text-xl text-[#4A453C]/80 leading-snug italic border-l-[3px] sm:border-l-2 border-gold-400/30 pl-4 sm:pl-6 my-8 sm:my-10"
          >
            &ldquo;{chapter.emphasis}&rdquo;
          </motion.p>

          {chapter.stat && (
            <div className="pt-10 border-t border-gold-400/10">
              <AnimatedStat stat={chapter.stat} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function LegacySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionProgress containerRef={sectionRef} />

      <section
        ref={sectionRef}
        className="section-spacing relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF8] via-[#FFFFFF] to-[#FCFBF8] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gold-400/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gold-400/4 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative layout-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              className="text-gold-400/60 text-[0.6rem] sm:text-xs tracking-[0.25em] uppercase font-medium"
            >
              {opening.overline}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-semibold text-[#1A1A1A] mt-6 leading-[1.05] tracking-tight max-w-[820px] mx-auto"
            >
              {opening.title}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 sm:gap-4 mt-6"
            >
              <span className="font-display text-lg sm:text-xl lg:text-2xl text-gold-400/40 tabular-nums">
                2012
              </span>
              <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-gold-400/0 via-gold-400/40 to-gold-400/0" />
              <span className="font-display text-lg sm:text-xl lg:text-2xl text-gold-400/40 tabular-nums">
                2026
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[#4A453C]/50 text-sm sm:text-base max-w-[760px] mx-auto mt-10 leading-premium"
            >
              {opening.subtitle}
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="stack-desc-cards flex flex-col items-center gap-3"
            >
              <span className="text-[0.55rem] sm:text-[0.5rem] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#4A453C]/20">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: easeOut }}
                className="w-px h-8 sm:h-10 bg-gradient-to-b from-gold-400/40 to-transparent"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="stack-group space-y-28 lg:space-y-40"
          >
            {chapters.map((chapter, i) => (
              <ChapterScene key={chapter.id} chapter={chapter} index={i} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="stack-group text-center"
          >
            <motion.div
              variants={fadeUp}
              className="max-w-2xl mx-auto"
            >
              <div className="w-16 h-px bg-gold-400/30 mx-auto mb-10" />

              <p className="font-display text-[clamp(1.15rem,4vw,1.5rem)] sm:text-2xl lg:text-3xl text-[#4A453C]/70 leading-[1.6] sm:leading-relaxed px-2 sm:px-0">
                &ldquo;{closing.quote}&rdquo;
              </p>

              <div className="stack-cards-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={closing.ctaHref}
                  className="group w-full sm:w-auto inline-flex items-center justify-center h-12 sm:h-11 px-7 rounded-lg bg-gold-400/10 border border-gold-400/20 hover:bg-gold-400/20 hover:border-gold-400/40 text-gold-400 text-sm font-medium transition-all duration-500 active:scale-[0.97]"
                >
                  {closing.cta}
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 active:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
