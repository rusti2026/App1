"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, Compass, FileSearch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/content";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); // -1 .. 1
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });

  // Layered transforms — farther layers move less for depth.
  const bgX = useTransform(sx, [-1, 1], [12, -12]);
  const bgY = useTransform(sy, [-1, 1], [10, -10]);
  const midX = useTransform(sx, [-1, 1], [26, -26]);
  const midY = useTransform(sy, [-1, 1], [22, -22]);
  const fgX = useTransform(sx, [-1, 1], [44, -44]);
  const fgY = useTransform(sy, [-1, 1], [38, -38]);
  const textX = useTransform(sx, [-1, 1], [8, -8]);
  const textY = useTransform(sy, [-1, 1], [6, -6]);
  const rotateX = useTransform(sy, [-1, 1], [4, -4]);
  const rotateY = useTransform(sx, [-1, 1], [-6, 6]);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height;
    mx.set(px * 2 - 1);
    my.set(py * 2 - 1);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative isolate overflow-hidden bg-grain pt-16"
    >
      {/* Ambient gradient blooms */}
      <motion.div
        aria-hidden
        style={{ x: bgX, y: bgY }}
        className="pointer-events-none absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-gold/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        style={{ x: midX, y: midY }}
        className="pointer-events-none absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-[130px]"
      />
      <motion.div
        aria-hidden
        style={{ x: fgX, y: fgY }}
        className="pointer-events-none absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-rose/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="lg:col-span-6 lg:pt-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
          >
            <Compass className="h-3.5 w-3.5 text-primary" />
            Engineering Partner — AI, Data, Cyber Security, Cloud &amp; Digital
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Empowering businesses with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-primary to-gold bg-clip-text text-transparent">
                AI-driven solutions
              </span>
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                className="absolute -bottom-1 left-0 h-3 w-full text-gold/60"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9c40-6 90-7 148-4s100 5 148 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            that redefine industries.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From intelligent automation to predictive analytics, we create
            AI-driven solutions that redefine industries. Engineering partner
            for AI, data, cyber security, cloud &amp; digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .querySelector("#what-we-do")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .querySelector("#quote")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border-border bg-card/60 backdrop-blur hover:border-gold/60 hover:text-foreground"
            >
              <FileSearch className="mr-2 h-4 w-4 text-gold" />
              Free Rapid Discovery - POC
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {CONTACT.hotline} · {CONTACT.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Time-zone aligned developers
            </span>
          </motion.div>
        </motion.div>

        {/* Perspective scene */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="relative lg:col-span-6"
        >
          <motion.div
            style={{ x: midX, y: midY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-[5/4] lg:max-w-none"
          >
            {/* Main hero photo */}
            <motion.div
              style={{ x: bgX, y: bgY }}
              className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-2xl shadow-primary/10"
            >
              <img
                src="/images/hero-team.jpg"
                alt="A happy corporate team mid-discussion gathered around a mystery board game"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating service card — top right */}
            <FloatingClue
              style={{ x: fgX, y: fgY }}
              className="-right-4 -top-5 sm:-right-6"
              icon={<Sparkles className="h-3.5 w-3.5" />}
              kicker="Service"
              title="AI Transformation"
              meta="ai & data"
              accent="gold"
            />

            {/* Floating solution brief card — bottom left */}
            <FloatingClue
              style={{ x: midX, y: midY }}
              className="-bottom-6 -left-4 sm:-left-6"
              icon={<FileSearch className="h-3.5 w-3.5" />}
              kicker="Solution Brief"
              title="Acme Corp × LSAI"
              meta="product driven engagement"
              accent="primary"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom marquee of trusted clients */}
      <TrustedMarquee />
    </section>
  );
}

function FloatingClue({
  className,
  icon,
  kicker,
  title,
  meta,
  accent,
  style,
}: {
  className?: string;
  icon: React.ReactNode;
  kicker: string;
  title: string;
  meta: string;
  accent: "gold" | "primary" | "rose";
  style?: { x: MotionValue<number>; y: MotionValue<number> };
}) {
  const accentBg =
    accent === "gold"
      ? "bg-gold/15 text-gold-foreground"
      : accent === "rose"
        ? "bg-rose/15 text-rose-foreground"
        : "bg-primary/10 text-primary";
  const dot =
    accent === "gold"
      ? "bg-gold"
      : accent === "rose"
        ? "bg-rose"
        : "bg-primary";
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className={`absolute z-10 w-44 rounded-2xl border border-border/80 bg-background/90 p-3 shadow-xl backdrop-blur-md sm:w-52 ${className ?? ""}`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${accentBg}`}
        >
          {icon}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {kicker}
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        {meta}
      </p>
    </motion.div>
  );
}

function TrustedMarquee() {
  const items = [
    "AIRBUS",
    "Honeywell",
    "Abbott Lab",
    "KBR",
    "Boeing",
    "Verizon",
    "Mastercard",
    "Statestreet Bank",
  ];
  return (
    <div className="relative border-t border-border/60 bg-background/60 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground sm:px-6 lg:px-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
          Trusted by enterprise clients
        </span>
        {items.map((c) => (
          <span key={c} className="text-foreground/55">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
