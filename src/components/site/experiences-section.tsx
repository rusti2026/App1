"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BarChart3,
  Blocks,
  BrainCircuit,
  Check,
  Cloud,
  Cpu,
  LifeBuoy,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import {
  DOMAINS,
  SERVICES,
  type DomainKey,
  type Service,
} from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ICONS: Record<string, LucideIcon> = {
  "ai-transformation": BrainCircuit,
  "gen-ai": Sparkles,
  "machine-learning": Cpu,
  "data-analytics": BarChart3,
  "cloud-engineering": Cloud,
  "digital-transformation": RefreshCw,
  "managed-services": LifeBuoy,
  "quantum-computing": Atom,
  "block-chain": Blocks,
  "internet-of-things": Wifi,
  "cyber-security": ShieldCheck,
};

const ACCENT_GRADIENT: Record<Service["accent"], string> = {
  primary: "from-primary/15 to-primary/5",
  gold: "from-gold/20 to-gold/5",
  rose: "from-rose/20 to-rose/5",
};
const ACCENT_TEXT: Record<Service["accent"], string> = {
  primary: "text-primary",
  gold: "text-gold-foreground",
  rose: "text-rose-foreground",
};
const ACCENT_DOT: Record<Service["accent"], string> = {
  primary: "bg-primary",
  gold: "bg-gold",
  rose: "bg-rose",
};
const ACCENT_BADGE: Record<Service["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  gold: "bg-gold/15 text-gold-foreground",
  rose: "bg-rose/15 text-rose-foreground",
};

export function ExperiencesSection() {
  const [active, setActive] = useState<DomainKey | null>(null);

  // Reorder so matching services float to the top when a domain is hovered.
  const ordered = useMemo(() => {
    if (!active) return SERVICES;
    return [...SERVICES].sort((a, b) => {
      const aMatch = a.domain === active ? 0 : 1;
      const bMatch = b.domain === active ? 0 : 1;
      return aMatch - bMatch;
    });
  }, [active]);

  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-16 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Empowering your business with cutting-edge technology"
          description="Hover a domain tag to bring matching services to the front. From intelligent automation to predictive analytics, we cover the full stack of AI, data, cloud, digital and frontier compute."
        />

        {/* Domain tag bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {DOMAINS.map((d) => {
            const isActive = active === d.key;
            return (
              <button
                key={d.key}
                type="button"
                onMouseEnter={() => setActive(d.key)}
                onFocus={() => setActive(d.key)}
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
                <span className="text-foreground">{d.label}</span>
                <span className="hidden text-[11px] text-muted-foreground sm:inline">
                  · {d.blurb}
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
            {ordered.map((svc, idx) => {
              const Icon = ICONS[svc.id] ?? Sparkles;
              const domain = DOMAINS.find((d) => d.key === svc.domain)!;
              return (
                <motion.li
                  key={svc.id}
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
                    active && svc.domain !== active ? "opacity-70" : "",
                  )}
                >
                  <ServiceCard
                    svc={svc}
                    Icon={Icon}
                    domainLabel={domain.label}
                    highlighted={!!active && svc.domain === active}
                    rank={idx}
                  />
                </motion.li>
              );
            })}
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
            View all services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  Icon,
  domainLabel,
  highlighted,
  rank,
}: {
  svc: Service;
  Icon: LucideIcon;
  domainLabel: string;
  highlighted: boolean;
  rank: number;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300",
        highlighted
          ? "border-primary/60 shadow-xl shadow-primary/5"
          : "border-border hover:border-primary/40 hover:shadow-lg",
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br",
          ACCENT_GRADIENT[svc.accent],
        )}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px] [color:var(--border)]",
          )}
        />
        <Icon
          className={cn("relative h-12 w-12", ACCENT_TEXT[svc.accent])}
          strokeWidth={1.5}
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur",
              ACCENT_BADGE[svc.accent],
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", ACCENT_DOT[svc.accent])} />
            {domainLabel}
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
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {svc.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {svc.body}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-3">
          <span
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.16em]",
              ACCENT_TEXT[svc.accent],
            )}
          >
            Read more
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
