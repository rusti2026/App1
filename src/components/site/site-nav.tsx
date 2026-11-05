"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#customization", label: "Engagement" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact-info", label: "Contact" },
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

  const navLinkClass = cn(
    "whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors md:px-2.5 xl:px-3.5 xl:text-sm",
    "text-muted-foreground hover:bg-secondary hover:text-foreground",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 text-foreground backdrop-blur-xl transition-all duration-300",
        scrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={(event) => {
            if (window.location.pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center gap-2.5"
          aria-label="LSAI Quantum home"
        >
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight text-foreground">
              LSAI <span className="text-gold">Quantum</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Engineering Partner
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex xl:gap-1">
          {LINKS.map((l) =>
            l.href.startsWith("#") ? (
              <button
                key={l.href}
                type="button"
                onClick={() => handleNav(l.href)}
                className={navLinkClass}
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={navLinkClass}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            size="sm"
            onClick={() => handleNav("#quote")}
            className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
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
              {LINKS.map((l) =>
                l.href.startsWith("#") ? (
                  <button
                    key={l.href}
                    type="button"
                    onClick={() => handleNav(l.href)}
                    className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </button>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                ),
              )}
              <Button
                onClick={() => handleNav("#quote")}
                className="mt-2 w-full rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
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
