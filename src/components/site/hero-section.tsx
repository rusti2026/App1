"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Compass,
  FileSearch,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/content";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); // -1 .. 1
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });

  const textX = useTransform(sx, [-1, 1], [6, -6]);
  const textY = useTransform(sy, [-1, 1], [4, -4]);
  const cardX = useTransform(sx, [-1, 1], [-10, 10]);
  const cardY = useTransform(sy, [-1, 1], [-6, 6]);
  const cardRotY = useTransform(sx, [-1, 1], [-7, 7]);
  const cardRotX = useTransform(sy, [-1, 1], [5, -5]);

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
      className="relative isolate overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-24 sm:px-6 sm:pt-28 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pb-16 md:pt-28 lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
        <motion.div style={{ x: textX, y: textY }} className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
            <Compass className="h-3.5 w-3.5 text-primary" />
            Engineering Partner — AI, Data, Cyber Security, Cloud &amp; Digital
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Empowering businesses with{" "}
            <span className="text-gold">AI-driven solutions</span>{" "}
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
              className="group rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90"
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
              className="rounded-full border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary hover:text-foreground"
            >
              <FileSearch className="mr-2 h-4 w-4 text-primary" />
              Free Rapid Discovery - POC
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground"
          >
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              {CONTACT.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {CONTACT.dallasOffice}
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              Contact us
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </a>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Time-zone aligned developers
            </span>
          </motion.div>
        </motion.div>

        {/* AI core visual in a card on the right */}
        <motion.div
          style={{
            x: cardX,
            y: cardY,
            rotateX: cardRotX,
            rotateY: cardRotY,
            transformPerspective: 1200,
          }}
          className="relative mx-auto w-full max-w-[460px] [perspective:1400px] md:max-w-none md:justify-self-end lg:max-w-[480px]"
        >
          <div className="hero-visual-3d relative isolate aspect-[1072/784] overflow-hidden rounded-[2rem] border border-border bg-[#050a18] shadow-[0_40px_80px_-40px_rgba(15,23,42,0.55)]">
            <HeroTechVisual />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-slate-950/45 px-3.5 py-2.5 backdrop-blur-md">
              <span className="text-xs font-medium text-white">
                LSAI <span className="text-gold">Quantum</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                AI core
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee of trusted clients */}
      <TrustedMarquee />
    </section>
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
    <div className="relative z-10 border-t border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 lg:gap-6">
          {/* Pinned label — stays still */}
          <span className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Trusted by enterprise clients
          </span>

          {/* Everything else moves */}
          <div className="marquee-wrap relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_96px,black_calc(100%_-_72px),transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_96px,black_calc(100%_-_72px),transparent_100%)] sm:[mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%_-_96px),transparent_100%)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%_-_96px),transparent_100%)]">
            <div className="marquee-track flex w-max items-center">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10"
                >
                  {items.map((c) => (
                    <li
                      key={c}
                      className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/55 transition-colors hover:text-foreground sm:text-xs"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Hand-built hero visual: an animated quantum core with orbital rings,
 * a perspective data floor and a radar sweep. Pure CSS + SVG, no image
 * assets, so it renders instantly at any size and never fights the LCP.
 */
function HeroTechVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="hero-tech-ambient absolute inset-0" />
      <div className="hero-tech-beam absolute inset-x-0 bottom-0 h-[64%]" />

      <div className="absolute inset-0 grid place-items-center">
        <div className="hero-tech-sweep h-[88%] w-[88%] rounded-full" />
      </div>

      <svg
        viewBox="0 0 480 351"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="hero-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.6" />
            <stop offset="42%" stopColor="#3b82f6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-chip-face" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a2747" />
            <stop offset="100%" stopColor="#070d1e" />
          </linearGradient>
          <radialGradient id="hero-horizon" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="hero-dots"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="#93c5fd" opacity="0.35" />
          </pattern>
        </defs>

        {/* Depth dot field */}
        <rect width="480" height="351" fill="url(#hero-dots)" opacity="0.35" />

        {/* Depth dot field */}
        <rect width="480" height="351" fill="url(#hero-dots)" opacity="0.35" />

        {/* Perspective data floor */}
        <ellipse cx="240" cy="252" rx="200" ry="22" fill="url(#hero-horizon)" />
        <g stroke="#93c5fd" strokeWidth="1.2">
          <path
            strokeOpacity="0.3"
            d="M0 351L240 252M48 351L240 252M96 351L240 252M144 351L240 252M192 351L240 252M288 351L240 252M336 351L240 252M384 351L240 252M432 351L240 252M480 351L240 252"
          />
          <path
            strokeOpacity="0.2"
            d="M0 264h480M0 275h480M0 288h480M0 303h480M0 321h480M0 343h480"
          />
          <path strokeOpacity="0.45" d="M0 252h480" />
        </g>

        <circle
          cx="240"
          cy="160"
          r="126"
          fill="url(#hero-core-glow)"
          className="hero-core-pulse"
        />

        {/* Orbital rings */}
        <g transform="translate(240 160) rotate(-15)">
          <ellipse
            rx="182"
            ry="56"
            stroke="rgba(191,219,254,0.75)"
            strokeWidth="1.4"
            strokeDasharray="5 9"
            className="hero-orbit-dash"
          />
          <circle cx="182" cy="0" r="4" fill="#eab308" />
          <circle
            cx="182"
            cy="0"
            r="9"
            stroke="rgba(234,179,8,0.45)"
            strokeWidth="1"
          />
        </g>

        <g transform="translate(240 160) rotate(26)">
          <ellipse
            rx="140"
            ry="44"
            stroke="rgba(96,165,250,0.85)"
            strokeWidth="1.4"
            strokeDasharray="2 7"
            className="hero-orbit-dash"
            style={{ animationDirection: "reverse" }}
          />
          <circle cx="-140" cy="0" r="3.5" fill="#fb7185" />
        </g>

        <g transform="translate(240 160) rotate(-55)">
          <ellipse
            rx="100"
            ry="32"
            stroke="rgba(147,197,253,0.65)"
            strokeWidth="1.2"
            strokeDasharray="3 11"
            className="hero-orbit-dash"
          />
        </g>

        {/* Gold brand arc */}
        <g transform="translate(240 160)">
          <circle
            r="88"
            stroke="rgba(234,179,8,0.5)"
            strokeWidth="1.6"
            strokeDasharray="44 233"
            strokeLinecap="round"
            className="hero-orbit-slow"
          />
          <circle
            r="100"
            stroke="rgba(147,197,253,0.3)"
            strokeWidth="1"
            strokeDasharray="10 18"
            className="hero-orbit-slow"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          />
        </g>

        {/* Processor core */}
        <g transform="translate(240 160)">
          <rect
            x="-42"
            y="-42"
            width="84"
            height="84"
            rx="20"
            fill="url(#hero-chip-face)"
            stroke="rgba(147,197,253,0.8)"
            strokeWidth="1.3"
          />
          <rect
            x="-32"
            y="-32"
            width="64"
            height="64"
            rx="14"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
          />
          <path
            d="M-42 -19h-10M-42 0h-13M-42 19h-10M42 -19h10M42 0h13M42 19h10"
            stroke="rgba(147,197,253,0.55)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M-19 -42v-10M0 -42v-13M19 -42v-10M-19 42v10M0 42v13M19 42v10"
            stroke="rgba(147,197,253,0.42)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <text
            x="0"
            y="1"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="28"
            fontWeight="700"
            letterSpacing="1.5"
            fill="#dbeafe"
          >
            AI
          </text>
        </g>

        {/* Frame brackets + telemetry ticks */}
        <path
          d="M24 38V24h14M456 38V24h-14"
          stroke="rgba(147,197,253,0.4)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M24 58h10M24 66h18M24 74h6"
          stroke="rgba(147,197,253,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M456 58h-10M456 66h-18M456 74h-6"
          stroke="rgba(147,197,253,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Drifting particles */}
        <circle cx="88" cy="84" r="2" fill="#93c5fd" className="hero-twinkle" />
        <circle
          cx="402"
          cy="98"
          r="1.6"
          fill="#eab308"
          className="hero-twinkle"
          style={{ animationDelay: "0.9s" }}
        />
        <circle
          cx="126"
          cy="266"
          r="1.8"
          fill="#93c5fd"
          className="hero-twinkle"
          style={{ animationDelay: "1.8s" }}
        />
        <circle
          cx="356"
          cy="248"
          r="2"
          fill="#fb7185"
          className="hero-twinkle"
          style={{ animationDelay: "2.6s" }}
        />
        <circle
          cx="300"
          cy="64"
          r="1.5"
          fill="#bfdbfe"
          className="hero-twinkle"
          style={{ animationDelay: "3.3s" }}
        />
      </svg>

      <div className="hero-tech-vignette pointer-events-none absolute inset-0" />
    </div>
  );
}
