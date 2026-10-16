"use client";

import { Phone, Mail, MapPin, Sparkles, ArrowUp } from "lucide-react";
import { CONTACT, TEAM, TRUSTED_BY } from "@/lib/content";

const QUICK = [
  { href: "#experiences", label: "Experiences" },
  { href: "#pricing", label: "For Companies" },
  { href: "#customization", label: "Customization" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#quote", label: "Request a Quote" },
];

export function SiteFooter() {
  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const nav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="h-4.5 w-4.5" strokeWidth={2.2} />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-background" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-foreground">
                  LSAI <span className="text-gold">Quantum</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Team Experiences
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Engineering partner for AI, data, cyber security, cloud &amp;
              digital transformation — now designing immersive team-building
              for enterprise cohorts.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                {CONTACT.hotline} · {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {CONTACT.email}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>
                  {CONTACT.addressLines[0]}
                  <br />
                  {CONTACT.addressLines[1]}
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {QUICK.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    onClick={() => nav(l.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Our Team
            </p>
            <ul className="mt-4 space-y-2.5">
              {TEAM.map((m) => (
                <li key={m.name}>
                  <p className="text-sm font-medium text-foreground">
                    {m.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Trusted by */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Trusted By
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {TRUSTED_BY.map((c) => (
                <li
                  key={c}
                  className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground/80"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} LSAI Quantum Inc., All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-muted-foreground">
              {CONTACT.region}
            </span>
            <button
              type="button"
              onClick={toTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
