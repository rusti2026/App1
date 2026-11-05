import { Clock, Gauge, Network, Scale } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/content";
import { SectionHeading } from "./section-heading";

const REASON_ICONS = [Network, Clock, Gauge, Scale];

export function PricingSection() {
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

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
