"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Check, Minus, Plus, Sparkles } from "lucide-react";
import {
  PRICING_TIERS,
  priceForTeam,
  CONTACT,
} from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MIN = 10;
const MAX = 200;
const STEP = 1;

export function PricingSection() {
  const [size, setSize] = useState(24);
  const quote = priceForTeam(size);

  // Smooth tweened total for the "ticking" counter.
  const [displayed, setDisplayed] = useState(quote.total);
  const rafRef = useRef<number | null>(null);
  const fromRef = useRef(quote.total);
  const startRef = useRef<number>(0);

  useEffect(() => {
    fromRef.current = displayed;
    startRef.current = performance.now();
    const target = quote.total;
    const duration = 420;
    const from = fromRef.current;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startRef.current) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(from + (target - from) * eased);
      setDisplayed(value);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(target);
      }
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [quote.total]);

  const adjust = (delta: number) =>
    setSize((s) => Math.min(MAX, Math.max(MIN, s + delta)));

  const tierIdx = PRICING_TIERS.findIndex((t) => size >= t.min && size <= t.max);

  return (
    <section
      id="pricing"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-secondary/40 to-background py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="For Companies"
          title="Pricing that scales with your cohort"
          description="Drag the team-size slider to size your experience. The total ticks up and down in real time, and the per-head rate drops as your cohort grows."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Slider card */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Team size
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-5xl font-semibold tabular-nums tracking-tight text-foreground">
                      {size}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      participants
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => adjust(-5)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                    aria-label="Decrease by 5"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => adjust(5)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                    aria-label="Increase by 5"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div className="relative mt-8">
                <input
                  type="range"
                  min={MIN}
                  max={MAX}
                  step={STEP}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="lsq-range w-full"
                  aria-label="Team size"
                />
                {/* Tick marks */}
                <div className="relative mt-3 h-8">
                  <div className="absolute inset-x-0 top-0 flex justify-between">
                    {PRICING_TIERS.map((t, i) => {
                      const pct = ((t.min - MIN) / (MAX - MIN)) * 100;
                      const passed = size >= t.min;
                      return (
                        <TooltipProvider key={t.tier} delayDuration={120}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                type="button"
                                onClick={() => setSize(t.min)}
                                style={{ left: `${pct}%` }}
                                className={cn(
                                  "absolute -translate-x-1/2 flex flex-col items-center gap-1",
                                )}
                              >
                                <span
                                  className={cn(
                                    "h-2.5 w-0.5 rounded-full transition-all duration-300",
                                    passed
                                      ? "bg-gold"
                                      : "bg-border",
                                  )}
                                />
                                <span
                                  className={cn(
                                    "text-[10px] font-semibold transition-colors duration-300",
                                    i === tierIdx
                                      ? "text-foreground"
                                      : "text-muted-foreground/70",
                                  )}
                                >
                                  {t.tier}
                                </span>
                                <span className="text-[9px] text-muted-foreground">
                                  {t.min}+
                                </span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <span className="text-xs font-semibold">
                                {t.tier}
                              </span>{" "}
                              <span className="text-xs text-muted-foreground">
                                · {t.min}–{t.max} people · ${t.perHead}/head
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Tier chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {PRICING_TIERS.map((t, i) => (
                  <button
                    key={t.tier}
                    type="button"
                    onClick={() => setSize(t.min)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                      i === tierIdx
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    {t.tier} · ${t.perHead}/head
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Total card */}
          <div className="lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/30 bg-primary text-primary-foreground p-6 shadow-xl shadow-primary/10 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/30 blur-3xl" />
              <div className="relative flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/80">
                  Estimated total
                </span>
              </div>

              <div className="relative mt-3 flex items-end gap-1">
                <span className="mb-2 text-2xl font-semibold text-primary-foreground/80">
                  $
                </span>
                <motion.span
                  key={Math.floor(displayed / 100)}
                  className="tick-pop inline-block text-6xl font-semibold tabular-nums tracking-tight"
                >
                  {displayed.toLocaleString()}
                </motion.span>
              </div>
              <p className="relative mt-1 text-xs text-primary-foreground/70">
                {quote.tier} tier · ${quote.perHead}/head · all-in for {size}{" "}
                participants
              </p>

              <div className="relative mt-6 space-y-2 border-t border-primary-foreground/15 pt-4 text-sm">
                <Row
                  label={`Scenario × ${size} @ $${quote.perHead}/head`}
                  value={`$${quote.subtotal.toLocaleString()}`}
                />
                <Row
                  label="Lead facilitation & rooms"
                  value={`$${quote.facilitation.toLocaleString()}`}
                />
                <Row
                  label="Branded dossier"
                  value={`$${quote.brandedDossier.toLocaleString()}`}
                />
              </div>

              <div className="relative mt-auto pt-6">
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .querySelector("#quote")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  <Building2 className="mr-2 h-4 w-4" />
                  Request this quote
                </Button>
                <p className="mt-3 text-center text-[11px] text-primary-foreground/70">
                  {CONTACT.hotline} · {CONTACT.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inclusions row */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              t: "Time-zone aligned facilitators",
              d: "Local hosts in your region, no awkward hand-offs.",
            },
            {
              t: "Measurable outcome scorecards",
              d: "Collaboration, leadership & creativity metrics per cohort.",
            },
            {
              t: "Flexible delivery models",
              d: "Scale rooms up or down to 100+ without re-scoping.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{f.t}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lsq-range {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(to right, var(--primary) 0%, var(--primary) ${((size - MIN) / (MAX - MIN)) * 100}%, var(--border) ${((size - MIN) / (MAX - MIN)) * 100}%, var(--border) 100%);
          outline: none;
        }
        .lsq-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: var(--background);
          border: 3px solid var(--primary);
          box-shadow: 0 4px 12px -2px var(--primary);
          cursor: pointer;
          transition: transform .15s ease;
        }
        .lsq-range::-webkit-slider-thumb:hover { transform: scale(1.12); }
        .lsq-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: var(--background);
          border: 3px solid var(--primary);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-primary-foreground/75">{label}</span>
      <span className="font-semibold tabular-nums text-primary-foreground">
        {value}
      </span>
    </div>
  );
}
