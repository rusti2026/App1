"use client";

import { ArrowRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// A thin colour bar per service group keeps the grid lively without adding
// labels or decoration that hides the information.
const ACCENT_BAR: Record<Service["accent"], string> = {
  primary: "from-primary via-blue-500 to-blue-400",
  gold: "from-gold via-amber-300 to-yellow-200",
  rose: "from-rose via-rose-400 to-rose-200",
};

const ACCENT_GLOW: Record<Service["accent"], string> = {
  primary: "group-hover:shadow-primary/15",
  gold: "group-hover:shadow-gold/25",
  rose: "group-hover:shadow-rose/20",
};

const ACCENT_TITLE: Record<Service["accent"], string> = {
  primary: "from-primary to-blue-600",
  gold: "from-amber-700 to-amber-600",
  rose: "from-rose-700 to-rose-600",
};

export function ExperiencesSection() {
  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-16 overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Empowering your business with cutting-edge technology"
          description="From intelligent automation to predictive analytics, we cover the full stack of AI, data, cloud, digital and frontier compute."
        />

        {/* 11 services — 4 per row on tablet and up, title + description only */}
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {SERVICES.map((svc) => (
            <li key={svc.id} className="h-full list-none">
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card to-secondary/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl",
                  ACCENT_GLOW[svc.accent],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-70 transition-opacity duration-300 group-hover:opacity-100",
                    ACCENT_BAR[svc.accent],
                  )}
                />

                <h3
                  className={cn(
                    "bg-gradient-to-r bg-clip-text text-[15px] font-semibold leading-snug tracking-tight text-transparent",
                    ACCENT_TITLE[svc.accent],
                  )}
                >
                  {svc.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground">
                  {svc.body}
                </p>
              </article>
            </li>
          ))}
        </ul>

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
