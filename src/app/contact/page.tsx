import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { OfficeMap } from "@/components/site/office-map";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { ContactForm } from "@/components/site/contact-form";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | LSAI Quantum",
  description:
    "Contact LSAI Quantum about quantum computing, enterprise AI agents, humanoid robotics, industrial AI for manufacturing or delivery drones. Book a free rapid discovery.",
};

const CONTACT_METHODS = [
  {
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    icon: Phone,
    note: CONTACT.hotline,
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    note: "Replies within one business day",
  },
  {
    label: "Website",
    value: CONTACT.website,
    href: CONTACT.websiteHref,
    icon: Globe,
    note: "Company profile & services",
  },
];

const OFFICES = [
  {
    label: "London HQ",
    lines: CONTACT.addressLines,
    tone: "primary" as const,
  },
  {
    label: "Dallas office",
    lines: [CONTACT.dallasOffice],
    tone: "gold" as const,
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-secondary/40 to-background">
      <SiteNav />
      <main className="flex-1 px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Get in touch
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Talk to a solution lead about quantum computing, enterprise AI
          agents, humanoid household robots, industrial AI for manufacturing or
          delivery drones. We reply within one business day and can set up a
          free rapid discovery.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CONTACT_METHODS.map(({ label, value, href, icon: Icon, note }) => (
            <a
              key={label}
              href={href}
              className="contact-card-3d flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </span>
                <span className="mt-1 block break-words text-sm font-medium text-foreground">
                  {value}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {note}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-4">
          <ContactForm />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {OFFICES.map(({ label, lines, tone }) => (
            <div
              key={label}
              className="contact-card-3d flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span
                className={
                  tone === "primary"
                    ? "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary"
                    : "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold-foreground"
                }
              >
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </span>
                {lines.map((line) => (
                  <span
                    key={line}
                    className="mt-1 block text-sm font-medium text-foreground"
                  >
                    {line}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <OfficeMap />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/25 bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="text-sm font-semibold">
                Prefer to start with a brief?
              </p>
              <p className="mt-1 text-xs text-primary-foreground/80">
                Book a free rapid discovery — no deposit, one-business-day reply.
              </p>
            </div>
          </div>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-blue-50"
          >
            Request a consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      </main>
      <SiteFooter />
    </div>
  );
}
