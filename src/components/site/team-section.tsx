"use client";

import { motion } from "framer-motion";
import { TEAM } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative scroll-mt-16 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="A team of passionate innovators, engineers & strategists"
          description="At the heart of LSAI Quantum is a team dedicated to transforming businesses with cutting-edge technology."
        />

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xl font-bold text-primary-foreground shadow-md">
                {m.initials}
                <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-gold ring-2 ring-card" />
              </div>
              <p className="mt-4 text-base font-semibold text-foreground">
                {m.name}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {m.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
