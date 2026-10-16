"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  SKILLS,
  EXPERIENCES,
  type SkillKey,
  type Experience,
} from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ACCENT_RING: Record<Experience["accent"], string> = {
  primary: "text-primary",
  gold: "text-gold-foreground",
  rose: "text-rose-foreground",
};
const ACCENT_DOT: Record<Experience["accent"], string> = {
  primary: "bg-primary",
  gold: "bg-gold",
  rose: "bg-rose",
};
const ACCENT_BADGE: Record<Experience["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  gold: "bg-gold/15 text-gold-foreground",
  rose: "bg-rose/15 text-rose-foreground",
};

export function ExperiencesSection() {
  const [active, setActive] = useState<SkillKey | null>(null);

  // Reorder so matching experiences float to the top when a skill is hovered.
  const ordered = useMemo(() => {
    if (!active) return EXPERIENCES;
    return [...EXPERIENCES].sort((a, b) => {
      const aMatch = a.skill === active ? 0 : 1;
      const bMatch = b.skill === active ? 0 : 1;
      return aMatch - bMatch;
    });
  }, [active]);

  return (
    <section
      id="experiences"
      className="relative scroll-mt-16 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experiences"
          title="Scenarios engineered around a single team skill"
          description="Hover a skill tag to bring matching scenarios to the front. Each one ships with a facilitator brief, a debrief scorecard, and a measurable outcome."
        />

        {/* Skill tag bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SKILLS.map((s) => {
            const isActive = active === s.key;
            return (
              <button
                key={s.key}
                type="button"
                onMouseEnter={() => setActive(s.key)}
                onFocus={() => setActive(s.key)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "border-primary tag-glow"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    isActive ? "bg-gold scale-125" : "bg-primary/40",
                  )}
                />
                <span className="text-foreground">{s.label}</span>
                <span className="hidden text-[11px] text-muted-foreground sm:inline">
                  · {s.blurb}
                </span>
              </button>
            );
          })}
          {active ? (
            <button
              type="button"
              onClick={() => setActive(null)}
              className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              clear filter
            </button>
          ) : null}
        </div>

        {/* Reordering grid */}
        <motion.ul
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {ordered.map((exp, idx) => (
              <motion.li
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "list-none",
                  active && exp.skill === active
                    ? "lg:row-span-1"
                    : active
                      ? "opacity-80"
                      : "",
                )}
              >
                <ExperienceCard
                  exp={exp}
                  highlighted={!!active && exp.skill === active}
                  rank={idx}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            onClick={() =>
              document
                .querySelector("#quote")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border-border bg-card/60 hover:border-gold/60"
          >
            Request a scenario brief
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  highlighted,
  rank,
}: {
  exp: Experience;
  highlighted: boolean;
  rank: number;
}) {
  const skill = SKILLS.find((s) => s.key === exp.skill)!;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300",
        highlighted
          ? "border-primary/60 shadow-xl shadow-primary/5"
          : "border-border hover:border-primary/40 hover:shadow-lg",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={exp.image}
          alt={exp.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur",
              ACCENT_BADGE[exp.accent],
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[exp.accent])} />
            {skill.label}
          </span>
          {highlighted ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
              <Check className="h-3 w-3" /> Match
            </span>
          ) : null}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
          #{(rank + 1).toString().padStart(2, "0")}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-[11px] font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {exp.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {exp.capacity}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
          {exp.title}
        </h3>
        <p className="text-[13px] font-medium text-muted-foreground">
          {exp.subtitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {exp.synopsis}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {exp.outcomes.map((o) => (
            <span
              key={o}
              className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {o}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-3">
          <span
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.16em]",
              ACCENT_RING[exp.accent],
            )}
          >
            View brief
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
