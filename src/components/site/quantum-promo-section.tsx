"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PARTICLES = [
  { x: 12, y: 22, delay: "0s" },
  { x: 20, y: 68, delay: "1.2s" },
  { x: 33, y: 18, delay: "2.4s" },
  { x: 42, y: 78, delay: "0.8s" },
  { x: 57, y: 13, delay: "1.8s" },
  { x: 67, y: 73, delay: "3.1s" },
  { x: 79, y: 25, delay: "0.5s" },
  { x: 89, y: 61, delay: "2.7s" },
];

const RACKS = [0, 1, 2, 3];

export function QuantumPromoSection() {
  return (
    <section
      aria-labelledby="quantum-promo-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b18]/90 text-white shadow-[0_0_0_1px_rgba(148,163,184,0.08),0_30px_80px_rgba(37,99,235,0.16)] backdrop-blur-sm">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-gold/15 blur-[110px]" />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(148,163,184,0.12))]" />

          <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-blue-100 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                A smarter path forward
              </span>
              <h2
                id="quantum-promo-title"
                className="mt-5 max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              >
                Build what comes after
                {" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent">
                  the next breakthrough.
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                We turn emerging technology into clear momentum—helping teams
                move from bold ideas to tangible systems that perform at scale.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-full bg-white px-6 text-slate-950 shadow-sm shadow-blue-200/20 hover:bg-blue-50"
              >
                <a href="#quote">
                  Book a strategy call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <div className="relative">
              <div
                className="quantum-promo__scene relative aspect-video overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#050816]/90 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12),0_0_0_1px_rgba(59,130,246,0.12),0_22px_50px_rgba(37,99,235,0.18)] backdrop-blur-[1px]"
                role="img"
                aria-label="Animated quantum sphere orbiting an AI chip in a futuristic computing lab"
              >
                <div className="quantum-promo__grid absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2),transparent_58%)]" />

                <div className="absolute inset-y-[17%] left-[5%] right-[5%] flex justify-between opacity-60">
                  {RACKS.map((rack) => (
                    <div
                      key={rack}
                      className="flex w-[7%] flex-col justify-center gap-1.5 rounded-md border border-blue-300/15 bg-slate-900/70 p-1.5 shadow-[0_0_24px_rgba(59,130,246,0.12)]"
                    >
                      {[0, 1, 2, 3, 4].map((unit) => (
                        <span
                          key={unit}
                          className="h-1.5 rounded-sm border border-blue-200/10 bg-gradient-to-r from-blue-400/30 to-blue-300/25"
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {PARTICLES.map((particle, index) => (
                  <span
                    key={index}
                    className="quantum-promo__particle absolute h-1 w-1 rounded-full bg-blue-200 shadow-[0_0_10px_2px_rgba(147,197,253,0.65)]"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      animationDelay: particle.delay,
                    }}
                  />
                ))}

                <div className="absolute left-1/2 top-1/2 h-[72%] w-[74%] -translate-x-1/2 -translate-y-1/2">
                  <div className="quantum-promo__orbit quantum-promo__orbit--one">
                    <span className="quantum-promo__satellite" />
                  </div>
                  <div className="quantum-promo__orbit quantum-promo__orbit--two">
                    <span className="quantum-promo__satellite quantum-promo__satellite--gold" />
                  </div>
                  <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-200/40 bg-gradient-to-br from-slate-700 via-slate-900 to-slate-950 shadow-[0_0_45px_rgba(59,130,246,0.3),inset_0_0_24px_rgba(96,165,250,0.22)] sm:h-28 sm:w-28">
                    <div className="absolute inset-2 rounded-xl border border-white/10" />
                    <Cpu className="h-10 w-10 text-blue-200 drop-shadow-[0_0_12px_rgba(147,197,253,0.9)] sm:h-12 sm:w-12" />
                    <span className="absolute -bottom-5 text-[8px] font-semibold uppercase tracking-[0.28em] text-blue-100/70">
                      Quantum core
                    </span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#050816]/95 via-[#050816]/45 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-blue-200/75 sm:text-[10px]">
                      LSAI Quantum Computing
                    </span>
                    <span className="mt-1 block text-xs text-slate-300 sm:text-sm">
                      Beyond the boundaries of what&apos;s possible
                    </span>
                  </div>
                  <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white/80">
                    00:10
                  </span>
                </div>

                <div className="quantum-promo__reveal absolute inset-x-0 top-[15%] flex justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 shadow-lg backdrop-blur-md">
                    <img src="/logo.svg" alt="" className="h-5 w-5" />
                    <span className="text-xs font-semibold tracking-wide text-white">
                      LSAI <span className="text-gold">Quantum</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
