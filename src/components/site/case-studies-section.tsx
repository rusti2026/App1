"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Dna, Quote } from "lucide-react";
import {
  ALPHAFOLD_TIMELINE,
  TESTIMONIALS,
  type Testimonial,
} from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const ACCENT: Record<Testimonial["accent"], { dot: string; chip: string; line: string }> =
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
  const [openId, setOpenId] = useState<string | null>(TESTIMONIALS[0].id);

  return (
    <section
      id="case-studies"
      className="relative scroll-mt-16 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="AI & Digital Transformation case studies — Healthcare"
          description="A milestone view of breakthrough AI in healthcare, followed by what our enterprise clients say about working with LSAI Quantum."
        />

        {/* AlphaFold timeline */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Dna className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Healthcare: DeepMind&apos;s AlphaFold
            </h3>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Protein folding — predicting the 3D shape of proteins from their
            amino-acid sequences — was a grand challenge in biology. This
            process is crucial for understanding diseases and developing new
            drugs.
          </p>

          {/* Horizontal timeline */}
          <div className="mt-6 overflow-x-auto fancy-scroll pb-3">
            <div className="flex min-w-[760px] gap-0">
              {ALPHAFOLD_TIMELINE.map((m, i) => (
                <div
                  key={m.year}
                  className="relative flex-1 border-l border-border pl-5 pr-4 first:border-l-0 first:pl-0"
                >
                  {/* node */}
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-background" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {m.year}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {m.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                  {i === ALPHAFOLD_TIMELINE.length - 1 ? (
                    <p className="mt-2 inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                      Impact: accelerated drug discovery
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <Quote className="h-5 w-5 text-gold" />
            <h3 className="text-lg font-semibold text-foreground">
              Client success stories
            </h3>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((t) => {
              const open = openId === t.id;
              return (
                <TestimonialCard
                  key={t.id}
                  t={t}
                  open={open}
                  onToggle={() => setOpenId(open ? null : t.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  open,
  onToggle,
}: {
  t: Testimonial;
  open: boolean;
  onToggle: () => void;
}) {
  const a = ACCENT[t.accent];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-colors",
        open
          ? "border-primary/40 shadow-xl shadow-primary/5"
          : "border-border hover:border-primary/40",
      )}
    >
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
              {t.industry}
            </span>
          </div>
          <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">
            {t.client}
          </p>
          <p className="text-sm text-muted-foreground">
            Read the client testimonial
          </p>
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

              <div className="relative px-8">
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  {t.quote}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                    {t.client.slice(0, 1)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.client}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {t.industry}
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
