"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Gauge,
  Layers,
  Network,
  Scale,
  Users,
} from "lucide-react";
import {
  WHY_CHOOSE_US,
  TRUSTED_PARTNER,
  DELIVERY_TIERS,
  tierForSize,
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

const REASON_ICONS = [Network, Clock, Gauge, Scale];

export function PricingSection() {
  const [size, setSize] = useState(24);
  const tier = tierForSize(size);

  // Smooth tweened count for the "ticking" counter.
  const [displayed, setDisplayed] = useState(size);
  const rafRef = useRef<number | null>(null);
  const fromRef = useRef(size);
  const startRef = useRef(0);

  useEffect(() => {
    fromRef.current = displayed;
    startRef.current = performance.now();
    const target = size;
    const duration = 420;
    const from = fromRef.current;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startRef.current) / duration);
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
  }, [size]);

  const adjust = (delta: number) =>
    setSize((s) => Math.min(MAX, Math.max(MIN, s + delta)));

  const tierIdx = DELIVERY_TIERS.findIndex(
    (t) => size >= t.min && size <= t.max,
  );

  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-secondary/40 to-background py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Bridge your software development needs with our engineering talent"
          description="Why choose LSAI Quantum for your software development needs — a deep pool of engineering talent, time-zone aligned developers, quality without compromise, and flexible delivery models."
        />

        {/* Two-column: reasons + scale slider */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Reasons */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE_US.map((r, i) => {
                const Icon = REASON_ICONS[i] ?? Network;
                return (
                  <div
                    key={r.title}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-base font-semibold text-foreground">
                      {r.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {r.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scale slider */}
          <div className="lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/30 bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/10 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/30 blur-3xl" />
              <div className="relative flex items-center gap-2">
                <Scale className="h-4 w-4 text-gold" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/80">
                  Scale your team up or down
                </span>
              </div>

              <div className="relative mt-3 flex items-end gap-1">
                <motion.span
                  key={Math.floor(displayed / 5)}
                  className="tick-pop text-6xl font-semibold tabular-nums tracking-tight"
                >
                  {displayed}
                </motion.span>
                <span className="mb-2 text-sm font-medium text-primary-foreground/80">
                  engineers
                </span>
              </div>
              <p className="relative mt-1 text-xs text-primary-foreground/75">
                {tier.tier} · flexible delivery models
              </p>
              <p className="relative mt-2 text-sm text-primary-foreground/90">
                {tier.blurb}
              </p>

              {/* Slider */}
              <div className="relative mt-6">
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
                <div className="mt-3 flex items-center justify-between text-[11px] text-primary-foreground/70">
                  <span>{MIN} engineers</span>
                  <span>{MAX}+ engineers</span>
                </div>
                {/* Tier ticks */}
                <div className="relative mt-3 h-8">
                  <div className="absolute inset-x-0 top-0">
                    {DELIVERY_TIERS.map((t, i) => {
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
                                className="absolute -translate-x-1/2 flex flex-col items-center gap-1"
                              >
                                <span
                                  className={cn(
                                    "h-2.5 w-0.5 rounded-full transition-all duration-300",
                                    passed ? "bg-gold" : "bg-primary-foreground/30",
                                  )}
                                />
                                <span
                                  className={cn(
                                    "text-[9px] font-semibold transition-colors duration-300",
                                    i === tierIdx
                                      ? "text-primary-foreground"
                                      : "text-primary-foreground/60",
                                  )}
                                >
                                  {t.tier.split(" ")[0]}
                                </span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <span className="text-xs font-semibold">
                                {t.tier}
                              </span>{" "}
                              <span className="text-xs text-muted-foreground">
                                · {t.min}–{t.max} engineers
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative mt-auto flex flex-wrap gap-2 pt-4">
                {DELIVERY_TIERS.map((t, i) => (
                  <button
                    key={t.tier}
                    type="button"
                    onClick={() => setSize(t.min)}
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all",
                      i === tierIdx
                        ? "border-gold bg-gold/15 text-primary-foreground"
                        : "border-primary-foreground/20 text-primary-foreground/70 hover:border-primary-foreground/40",
                    )}
                  >
                    {t.tier}
                  </button>
                ))}
              </div>

              <div className="relative mt-5">
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .querySelector("#quote")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Start a rapid discovery
                </Button>
                <p className="mt-3 text-center text-[11px] text-primary-foreground/70">
                  {CONTACT.hotline} · {CONTACT.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Technology Partner grid */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Layers className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Your Trusted Technology Partner
            </h3>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRUSTED_PARTNER.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <p className="text-sm font-semibold text-foreground">
                    {f.title}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .lsq-range {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(to right, var(--gold) 0%, var(--gold) ${((size - MIN) / (MAX - MIN)) * 100}%, rgba(255,255,255,0.18) ${((size - MIN) / (MAX - MIN)) * 100}%, rgba(255,255,255,0.18) 100%);
          outline: none;
        }
        .lsq-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: var(--background);
          border: 3px solid var(--gold);
          box-shadow: 0 4px 12px -2px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: transform .15s ease;
        }
        .lsq-range::-webkit-slider-thumb:hover { transform: scale(1.12); }
        .lsq-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: var(--background);
          border: 3px solid var(--gold);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
