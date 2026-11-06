import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  Layers,
  Search,
  Rocket,
  Scale,
} from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SolutionIcon } from "@/components/site/solution-icon";
import { SERVICES, WHY_CHOOSE_US } from "@/lib/content";
import { SOLUTIONS, getSolution, solutionHref } from "@/lib/solutions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Solution not found | LSAI Quantum" };

  const url = `https://lsaiquantum.com${solutionHref(solution.slug)}`;
  return {
    title: `${solution.title} | LSAI Quantum`,
    description: solution.summary,
    openGraph: {
      title: `${solution.title} | LSAI Quantum`,
      description: solution.summary,
      url,
      siteName: "LSAI Quantum",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} | LSAI Quantum`,
      description: solution.summary,
    },
  };
}

const ENGAGEMENT_STEPS = [
  {
    icon: Search,
    title: "Discovery",
    body: "Define the problem worth solving, the constraints and the success measure.",
  },
  {
    icon: Compass,
    title: "Pilot",
    body: "Build a bounded prototype against real data or a real environment.",
  },
  {
    icon: Layers,
    title: "Build",
    body: "Turn the validated pilot into an engineered, observable system.",
  },
  {
    icon: Rocket,
    title: "Scale",
    body: "Roll out across teams, sites or fleets with governance and support.",
  },
];

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const relatedServices = SERVICES.filter((service) =>
    solution.relatedServiceIds.includes(service.id),
  );
  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== solution.slug).slice(
    0,
    3,
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border bg-secondary/50 pb-14 pt-28 text-foreground sm:pb-16 sm:pt-32 dark:bg-[#070b18] dark:text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-[110px] dark:bg-gold/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse at 50% 20%, #000 20%, transparent 72%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />
              <Link
                href="/solutions"
                className="transition-colors hover:text-foreground"
              >
                Solutions
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />
              <span className="text-foreground/80">{solution.shortTitle}</span>
            </nav>

            <div className="mt-10">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground dark:border-white/15 dark:bg-white/[0.06] dark:text-white/70">
                  <SolutionIcon name={solution.icon} className="h-3.5 w-3.5 text-gold" />
                  {solution.eyebrow}
                </span>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                  {solution.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg font-medium leading-snug text-foreground/85 dark:text-white/85">
                  {solution.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base dark:text-white/55">
                  {solution.summary}
                </p>

                <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-card/70 p-5 shadow-sm dark:border-white/12 dark:bg-white/[0.04]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Free rapid discovery
                  </p>
                  <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xl font-semibold tracking-tight text-foreground">
                        Book a discovery
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        Bring one use case. We will scope a bounded pilot and
                        tell you if it is worth building.
                      </p>
                    </div>
                    <Link
                      href="/#quote"
                      className="inline-flex flex-none items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-gold-foreground transition-colors hover:bg-gold/90 sm:text-sm"
                    >
                      Start the conversation
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-card/60 lg:grid-cols-4 dark:border-white/10 dark:bg-white/[0.03]">
              {solution.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-2.5 bg-background/60 p-4 dark:bg-[#070b18]/60"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 flex-none text-gold"
                    aria-hidden="true"
                  />
                  <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm dark:text-white/70">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Overview
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What this solution changes
              </h2>
              <div className="mt-5 space-y-4">
                {solution.overview.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-secondary/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Industries we support
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {solution.industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Capabilities
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    What we build
                  </h2>
                </div>
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Layers className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {solution.capabilities.map((cap, i) => (
                  <div
                    key={cap.title}
                    className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/35"
                  >
                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-gold-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground">
                      {cap.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {cap.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Where it applies
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Typical use cases
                </h2>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {solution.useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3 text-sm text-foreground"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-none text-primary"
                        aria-hidden="true"
                      />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  How we engage
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  From discovery to scale
                </h2>
                <ol className="mt-5 space-y-3">
                  {ENGAGEMENT_STEPS.map((step, i) => (
                    <li
                      key={step.title}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <step.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          Step {i + 1}
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {relatedServices.length > 0 ? (
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Engineering foundation
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Core capabilities behind this solution
                  </h2>
                </div>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  View all solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {relatedServices.map((service) => (
                  <div
                    key={service.id}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {service.title}
                    </p>
                    <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-secondary/50 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <Scale className="h-4 w-4 text-gold" aria-hidden="true" />
                  Why teams choose LSAI Quantum
                </p>
                <ul className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
                  {WHY_CHOOSE_US.map((reason) => (
                    <li key={reason.title} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {reason.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {otherSolutions.map((other) => (
                <Link
                  key={other.slug}
                  href={`/solutions/${other.slug}`}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/35 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-secondary text-primary">
                    <SolutionIcon name={other.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                      {other.shortTitle}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {other.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary p-7 text-primary-foreground sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-gold/30 blur-3xl"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                    Free Rapid Discovery
                  </p>
                  <h2 className="mt-2 max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                    Ready to test {solution.shortTitle} against a real problem?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-primary-foreground/80">
                    Bring one use case. We will scope a bounded pilot and tell
                    you honestly whether it is worth building.
                  </p>
                </div>
                <div className="flex flex-none flex-wrap gap-3">
                  <Link
                    href="/#quote"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
                  >
                    Start a conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/solutions"
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all solutions
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
