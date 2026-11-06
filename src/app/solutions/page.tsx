import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SolutionIcon } from "@/components/site/solution-icon";
import { SOLUTIONS, type SolutionAccent } from "@/lib/solutions";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Frontier Solutions | LSAI Quantum",
  description:
    "Explore LSAI Quantum's frontier solutions: quantum computing, enterprise AI agents, humanoid robotics for household work, industrial AI for manufacturing, delivery drones, quantum-optimized shipping and supply chains, and medical AI for drug discovery — plus AI transformation, machine learning, cloud engineering and cyber security.",
  openGraph: {
    title: "Frontier Solutions | LSAI Quantum",
    description:
      "Quantum computing, enterprise AI agents, humanoid robotics, industrial AI, delivery drones, quantum shipping and SCM, medical AI, machine learning, cloud engineering and cyber security.",
    url: "https://lsaiquantum.com/solutions",
    siteName: "LSAI Quantum",
    type: "website",
  },
};

const ICON_TONE: Record<SolutionAccent, string> = {
  primary: "border-primary/25 bg-primary/10 text-primary",
  gold: "border-gold/35 bg-gold/15 text-gold-foreground",
  rose: "border-rose/30 bg-rose/10 text-rose-foreground",
};

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to home
            </Link>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Frontier Solutions
            </div>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ways to put frontier technology to work
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Quantum computing, enterprise AI agents, humanoid household
              robots, industrial AI for manufacturing, autonomous delivery
              drones, quantum-optimized shipping and supply chains, and
              AI-first drug discovery — supported by AI transformation,
              machine learning, cloud engineering and cyber security.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {SOLUTIONS.map((solution) => (
                <a
                  key={solution.slug}
                  href={`#${solution.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {solution.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            {SOLUTIONS.map((solution, index) => (
              <article
                key={solution.slug}
                id={solution.slug}
                className="group relative flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "flex h-12 w-12 flex-none items-center justify-center rounded-xl border",
                      ICON_TONE[solution.accent],
                    )}
                  >
                    <SolutionIcon name={solution.icon} className="h-5 w-5" />
                  </span>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(SOLUTIONS.length).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {solution.eyebrow}
                    </p>
                  </div>
                </div>

                <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="outline-none focus-visible:underline"
                  >
                    {solution.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {solution.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {solution.capabilities.slice(0, 4).map((cap) => (
                    <span
                      key={cap.title}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {cap.title}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 border-t border-border pt-4 text-xs text-muted-foreground sm:grid-cols-2">
                  <p>
                    <span className="font-semibold text-foreground">
                      Typical focus:
                    </span>{" "}
                    {solution.useCases.slice(0, 2).join(" · ")}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Industries:
                    </span>{" "}
                    {solution.industries.slice(0, 2).join(" · ")}
                  </p>
                </div>

                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Explore {solution.shortTitle}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Not sure where to start?
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Start with a free rapid discovery.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Tell us the problem, the constraints and the outcome you need.
                We will map it to the right solution line and propose a pilot.
              </p>
            </div>
            <Link
              href="/#quote"
              className="inline-flex flex-none items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a discovery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
