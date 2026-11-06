"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

type Status = "idle" | "submitting" | "done" | "error";

const INITIAL = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...form,
          website: "",
          source: "contact-page",
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setError(data?.error ?? "We could not send your message.");
        setStatus("error");
        return;
      }

      setStatus("done");
      setForm(INITIAL);
    } catch {
      setError("A network error interrupted the request. Please try again.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-primary/30 bg-card p-7 shadow-sm sm:p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
          Message received
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. A solution lead will reply within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Send us a message
      </h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Tell us what you are building or the problem you need to solve.
      </p>

      <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          value={form.name}
          onChange={(value) => set("name", value)}
          placeholder="Jamie Veum"
          required
        />
        <Field
          label="Work email"
          type="email"
          value={form.email}
          onChange={(value) => set("email", value)}
          placeholder="you@company.com"
          required
        />
        <Field
          label="Company"
          value={form.company}
          onChange={(value) => set("company", value)}
          placeholder="Acme Corp"
        />
        <Field
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={(value) => set("phone", value)}
          placeholder="Optional"
        />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(event) => set("message", event.target.value)}
            required
            rows={4}
            placeholder="A short description of the problem, timeline and constraints..."
            className="w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </div>

        {status === "error" && error ? (
          <p
            role="alert"
            className="sm:col-span-2 rounded-xl border border-rose/30 bg-rose/10 px-3.5 py-2.5 text-xs font-medium text-rose-foreground"
          >
            {error}
          </p>
        ) : null}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
        {required ? <span className="ml-1 text-rose">*</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
