"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { CONTACT, SERVICES, WHY_CHOOSE_US } from "@/lib/content";
import { SOLUTIONS } from "@/lib/solutions";
import { SectionHeading } from "./section-heading";
import { OfficeMap } from "./office-map";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "done" | "error";

const SERVICE_OPTIONS = ["Help me choose", ...SERVICES.map((s) => s.title)];

export function QuoteSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "24",
    service: "Help me choose",
    message: "",
  });

  const set = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quote",
          name: form.name,
          email: form.email,
          company: form.company,
          teamSize: Number(form.teamSize) || null,
          interest: form.service,
          message: form.message,
          website: "",
          source: "homepage-quote",
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setError(
          data?.error ??
            "We could not send your request. Please try again or email us directly.",
        );
        setStatus("error");
        return;
      }

      setStatus("done");
    } catch {
      setError(
        "A network error interrupted the request. Please try again or email us directly.",
      );
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setError("");
    setForm({
      name: "",
      email: "",
      company: "",
      teamSize: "24",
      service: "Help me choose",
      message: "",
    });
  };

  return (
    <section
      id="quote"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-background to-secondary/40 py-12 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Schedule a Consultation"
          title="Book your free rapid discovery"
          description="Start your journey with a free rapid discovery — tell us about your goals and we'll respond within one business day with a tailored approach and engagement model."
        />

        <div className="mx-auto mt-8 w-full max-w-5xl space-y-6">
          {/* Form */}
          <div className="mx-auto w-full max-w-4xl">
            <form
              onSubmit={submit}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="Your name"
                  placeholder="e.g. Jamie Veum"
                  value={form.name}
                  onChange={(v) => set("name", v)}
                  required
                />
                <Input
                  label="Work email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(v) => set("email", v)}
                  required
                />
                <Input
                  label="Company"
                  placeholder="e.g. Acme Corp"
                  value={form.company}
                  onChange={(v) => set("company", v)}
                  required
                />
                <Input
                  label="Team size"
                  type="number"
                  min={1}
                  placeholder="24"
                  value={form.teamSize}
                  onChange={(v) => set("teamSize", v)}
                  required
                />
                <div className="sm:col-span-2">
                  <Label>Service of interest</Label>
                  <select
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option>Help me choose</option>
                    <optgroup label="Frontier solutions">
                      {SOLUTIONS.map((solution) => (
                        <option key={solution.slug} value={solution.title}>
                          {solution.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Core capabilities">
                      {SERVICE_OPTIONS.filter((s) => s !== "Help me choose").map(
                        (s) => (
                          <option key={s}>{s}</option>
                        ),
                      )}
                    </optgroup>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Anything we should know?</Label>
                  <textarea
                    rows={3}
                    placeholder="Goals, timelines, current stack…"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className="w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="group rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  No deposit · 1-business-day reply · {CONTACT.hotline}
                </p>
              </div>

              {status === "error" && error ? (
                <p
                  role="alert"
                  className="mt-4 rounded-xl border border-rose/30 bg-rose/10 px-3.5 py-2.5 text-xs font-medium text-rose-foreground"
                >
                  {error}{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="underline underline-offset-2"
                  >
                    {CONTACT.email}
                  </a>
                </p>
              ) : null}

              {/* Slide-in confirmation */}
              <AnimatePresence>
                {status === "done" ? (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm"
                  >
                    <div className="slide-in-confirm absolute right-4 top-4 bottom-4 flex w-[calc(100%-2rem)] max-w-md flex-col rounded-2xl border border-primary/30 bg-card p-6 shadow-2xl">
                      <div className="flex items-start gap-3">
                        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-base font-semibold text-foreground">
                            Request received — we&apos;re on it
                          </p>
                          <p className="text-xs text-muted-foreground">
                            A solution lead will reply within one business day.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                        <SummaryRow label="Contact" value={form.name || "—"} />
                        <SummaryRow
                          label="Company"
                          value={form.company || "—"}
                        />
                        <SummaryRow
                          label="Team size"
                          value={`${form.teamSize} people`}
                        />
                        <SummaryRow label="Service" value={form.service} />
                      </div>

                      <div className="mt-5 rounded-xl bg-secondary/60 p-3 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Next step:
                        </span>{" "}
                        We&apos;ll send a rapid-discovery summary and an
                        engagement model to{" "}
                        <span className="font-medium text-foreground">
                          {form.email || "your inbox"}
                        </span>
                        .
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-5">
                        <button
                          type="button"
                          onClick={reset}
                          className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        >
                          Send another
                        </button>
                        <Button
                          type="button"
                          onClick={reset}
                          className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                        >
                          <CalendarCheck className="mr-2 h-4 w-4" />
                          Book appointment
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </div>

          <div id="contact-info" className="grid scroll-mt-20 gap-6 md:grid-cols-2">
            <aside>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Talk to a solution lead
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <ContactRow
                    icon={<Phone className="h-4 w-4" />}
                    label={CONTACT.hotline}
                    value={CONTACT.phone}
                    href={CONTACT.phoneHref}
                  />
                  <ContactRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={CONTACT.email}
                    href={`mailto:${CONTACT.email}`}
                  />
                  <ContactRow
                    icon={<Globe className="h-4 w-4" />}
                    label="Website"
                    value={CONTACT.website}
                    href={CONTACT.websiteHref}
                  />
                  <ContactRow
                    icon={<Globe className="h-4 w-4" />}
                    label="Contact page"
                    value="View contact details"
                    href="/contact"
                  />
                  <ContactRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="London HQ"
                    value={CONTACT.addressLines.join(", ")}
                  />
                  <ContactRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Dallas office"
                    value={CONTACT.dallasOffice}
                  />
                </div>
              </div>
            </aside>

            <OfficeMap />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary p-6 text-primary-foreground">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/30 blur-2xl" />
            <Sparkles className="relative h-5 w-5 text-gold" />
            <p className="relative mt-3 text-lg font-semibold leading-snug">
              Why teams choose LSAI Quantum
            </p>
            <ul className="relative mt-4 space-y-2 text-sm text-primary-foreground/85">
              {WHY_CHOOSE_US.map((r) => (
                <li key={r.title} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {r.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </label>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  min,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-secondary text-primary">
        {icon}
      </span>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="block rounded-lg p-1 transition-colors hover:bg-secondary/50"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <span className="text-right text-sm font-medium text-foreground">
        {value}
      </span>
    </div>
  );
}
