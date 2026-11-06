"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-24 text-center sm:px-6 sm:pt-28 md:pb-16 md:pt-28 lg:pb-20 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
          <Compass className="h-3.5 w-3.5 text-primary" />
          Quantum · AI Agents · Humanoids · Industrial AI · Drones · Shipping · Medical AI
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Frontier solutions,{" "}
          <span className="text-gold">engineered to work</span> in the real world.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Quantum computing, enterprise AI agents, humanoid robots that handle
          household work, industrial AI for manufacturing, autonomous delivery
          drones, quantum-optimized shipping and supply chains, and AI-first
          drug discovery — backed by AI transformation, machine learning, cloud
          engineering and cyber security.
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
                .querySelector("#solutions")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90"
          >
            Explore what we build
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
            Talk to a solution lead
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-muted-foreground"
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
    <div className="relative z-10 border-t border-border/60 bg-background">
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
