"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Quote, TrendingUp } from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const ACCENT: Record<CaseStudy["accent"], { dot: string; chip: string; line: string }> =
  {
    primary: {
      dot: "bg-primary",
      chip: "bg-primary/10 text-primary",
      line: "from-primary/0 via-primary/40 to-primary/0",
    },
    gold: {
      dot: "bg-gold",
      chip: "bg-gold/15 text-gold-foreground",
      line: "from-gold/0 via-gold/50 to-gold/0",
    },
    rose: {
      dot: "bg-rose",
      chip: "bg-rose/15 text-rose-foreground",
      line: "from-rose/0 via-rose/50 to-rose/0",
    },
  };

export function CaseStudiesSection() {
  const [openId, setOpenId] = useState<string | null>(CASE_STUDIES[0].id);

  return (
    <section
      id="case-studies"
      className="relative scroll-mt-16 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Outcomes our corporate clients repeat"
          description="Click a card to expand the testimonial. Each case file pairs a measurable outcome with the engineering partners who ran it."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => {
            const open = openId === cs.id;
            return (
              <CaseCard
                key={cs.id}
                cs={cs}
                open={open}
                onToggle={() => setOpenId(open ? null : cs.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  cs,
  open,
  onToggle,
}: {
  cs: CaseStudy;
  open: boolean;
  onToggle: () => void;
}) {
  const a = ACCENT[cs.accent];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-colors",
        open ? "border-primary/40 shadow-xl shadow-primary/5" : "border-border hover:border-primary/40",
      )}
    >
      {/* Top accent line */}
      <div className={cn("h-1 w-full bg-gradient-to-r", a.line)} />

      <button
        type="button"
        onClick={onToggle}
        className="flex items-start justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={cn("h-2 w-2 rounded-full", a.dot)} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {cs.industry}
            </span>
          </div>
          <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">
            {cs.client}
          </p>
          <p className="text-sm text-muted-foreground">{cs.scenario}</p>
          <p className="mt-1 text-[13px] font-medium text-foreground/80">
            {cs.headline}
          </p>

          {/* Metric chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {cs.metrics.map((m) => (
              <span
                key={m.label}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                  a.chip,
                )}
              >
                <TrendingUp className="h-3 w-3" />
                {m.value} {m.label}
              </span>
            ))}
          </div>
        </div>

        <span
          className={cn(
            "mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300",
            open ? "rotate-180 border-primary/40" : "group-hover:border-primary/40",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {/* Expandable quote */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="quote"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="relative border-t border-dashed border-border px-6 py-5">
              {/* Speech marks — animated */}
              <motion.span
                aria-hidden
                className="speech-mark-animate absolute left-5 top-3 select-none font-serif text-5xl leading-none text-gold/40"
              >
                &ldquo;
              </motion.span>
              <motion.span
                aria-hidden
                className="speech-mark-animate absolute bottom-2 right-5 select-none font-serif text-5xl leading-none text-gold/40"
                style={{ animationDelay: "0.08s" }}
              >
                &rdquo;
              </motion.span>

              <div className="relative pl-8 pr-8">
                <Quote className="absolute -left-1 top-1 h-4 w-4 text-gold/50" />
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  {cs.quote}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                    {cs.speaker.slice(0, 1)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {cs.speaker}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {cs.role} · cohort {cs.cohort}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
