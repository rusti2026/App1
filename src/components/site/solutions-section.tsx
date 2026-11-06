import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/content";
import { SOLUTIONS, type SolutionAccent } from "@/lib/solutions";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const ACCENT: Record<
  SolutionAccent,
  { link: string; border: string; shadow: string }
> = {
  primary: {
    link: "text-blue-700 group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-200",
    border: "group-hover:border-blue-300 dark:group-hover:border-blue-500/40",
    shadow:
      "shadow-[0_14px_36px_-24px_rgba(15,23,42,0.4)] group-hover:shadow-[0_28px_60px_-24px_rgba(37,99,235,0.35)]",
  },
  gold: {
    link: "text-amber-700 group-hover:text-amber-800 dark:text-amber-300 dark:group-hover:text-amber-200",
    border: "group-hover:border-amber-300 dark:group-hover:border-amber-500/40",
    shadow:
      "shadow-[0_14px_36px_-24px_rgba(15,23,42,0.4)] group-hover:shadow-[0_28px_60px_-24px_rgba(217,119,6,0.3)]",
  },
  rose: {
    link: "text-rose-700 group-hover:text-rose-800 dark:text-rose-300 dark:group-hover:text-rose-200",
    border: "group-hover:border-rose-300 dark:group-hover:border-rose-500/40",
    shadow:
      "shadow-[0_14px_36px_-24px_rgba(15,23,42,0.4)] group-hover:shadow-[0_28px_60px_-24px_rgba(225,29,72,0.28)]",
  },
};

const CAPABILITY_META = [
  "ai-transformation",
  "machine-learning",
  "cloud-engineering",
  "cyber-security",
  "supply-chain-management",
  "research-development",
] as const;

const FALLBACK_BODY: Record<(typeof CAPABILITY_META)[number], string> = {
  "ai-transformation":
    "We leverage advanced AI and machine learning to optimize processes, enhance decision-making, and drive innovation.",
  "machine-learning":
    "We build smart, self-learning systems that turn complex data into actionable insight and intelligent automation.",
  "cloud-engineering":
    "We provide seamless cloud integration, enabling businesses to scale efficiently with secure, high-performance infrastructure.",
  "cyber-security":
    "Our security-first approach ensures data protection, threat detection, and compliance with global security standards.",
  "supply-chain-management":
    "Connect demand, inventory, sourcing and logistics into one optimized supply chain with real-time visibility and AI-assisted planning.",
  "research-development":
    "Turn research questions into working prototypes with AI-assisted discovery, experiment planning and evidence you can trace.",
};

function Capabilities() {
  return CAPABILITY_META.map((id) => {
    const service = SERVICES.find((item) => item.id === id);
    return {
      id,
      title: service?.title ?? id,
      body: service?.body ?? FALLBACK_BODY[id],
      accent: (service?.accent ?? "primary") as Service["accent"],
    };
  });
}

export function SolutionsSection() {
  const capabilities = Capabilities();

  return (
    <section
      id="solutions"
      className="relative scroll-mt-16 overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title={
            <>
              <span className="text-gold">Quantum</span> solutions and the
              capabilities behind them
            </>
          }
          description="Quantum computing, enterprise AI agents, humanoid robots for household work, industrial AI for manufacturing, autonomous delivery drones, quantum-optimized shipping and supply chains, and AI-first drug discovery — supported by AI transformation, machine learning, cloud engineering, cyber security, supply chain management and R&D."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => {
            const accent = ACCENT[solution.accent];
            return (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50",
                  accent.border,
                  accent.shadow,
                )}
              >
                <h3 className="relative text-[17px] font-semibold leading-snug tracking-tight text-slate-900 dark:text-slate-50">
                  {solution.title}
                </h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {solution.tagline}
                </p>

                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {solution.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap.title}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                    >
                      {cap.title}
                    </span>
                  ))}
                </div>

                <div className="relative mt-auto flex items-center justify-between gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      accent.link,
                    )}
                  >
                    Explore solution
                  </span>
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                      accent.link,
                    )}
                  />
                </div>
              </Link>
            );
          })}

          {capabilities.map(({ id, title, body, accent: tone }) => {
            const accent = ACCENT[tone];
            return (
              <Link
                key={id}
                href="/#quote"
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50",
                  accent.border,
                  accent.shadow,
                )}
              >
                <h3 className="relative text-[17px] font-semibold leading-snug tracking-tight text-slate-900 dark:text-slate-50">
                  {title}
                </h3>
                <p className="relative mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {body}
                </p>

                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
                    Core capability
                  </span>
                </div>

                <div className="relative mt-auto flex items-center justify-between gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      accent.link,
                    )}
                  >
                    Talk to us
                  </span>
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                      accent.link,
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
