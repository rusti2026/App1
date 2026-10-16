"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/content";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#customization", label: "Engagement" },
  { href: "#case-studies", label: "Case Studies" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNav("#top")}
          className="group flex items-center gap-2.5"
          aria-label="LSAI Quantum home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-4.5 w-4.5" strokeWidth={2.2} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-background" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              LSAI <span className="text-gold">Quantum</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Engineering Partner
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => handleNav(l.href)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 lg:flex"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            {CONTACT.phone}
          </a>
          <Button
            size="sm"
            onClick={() => handleNav("#quote")}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/60 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => handleNav(l.href)}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </button>
              ))}
              <Button
                onClick={() => handleNav("#quote")}
                className="mt-2 w-full rounded-full bg-primary text-primary-foreground"
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
