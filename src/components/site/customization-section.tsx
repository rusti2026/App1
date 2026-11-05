"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Fingerprint,
  ImagePlus,
  Lock,
  Stamp,
  Upload,
  Users,
} from "lucide-react";
import { PRODUCTS, type Product } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PRESET_LOGOS = [
  { id: "monogram", label: "Monogram", icon: Fingerprint },
  { id: "shield", label: "Shield", icon: Lock },
  { id: "stamp", label: "Seal", icon: Stamp },
];

export function CustomizationSection() {
  const [company, setCompany] = useState("Acme Corp");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoStyle, setLogoStyle] = useState("monogram");
  const [productId, setProductId] = useState(PRODUCTS[0].id);
  const fileRef = useRef<HTMLInputElement>(null);

  const product = useMemo(
    () => PRODUCTS.find((p) => p.id === productId)!,
    [productId],
  );

  const initials = useMemo(() => {
    const parts = company.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "LQ";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [company]);

  const briefId = useMemo(() => {
    const slug = company.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const rnd = (company.length * 37 + productId.length * 7 + 101) % 9000;
    return `LSQ-${slug || "client"}-${(1000 + rnd).toString()}`;
  }, [company, productId]);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <section
      id="customization"
      className="relative scroll-mt-16 overflow-hidden border-y border-border bg-secondary/40 py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Driven Engagement"
          title="A branded solution brief for every client"
          description="At the heart of our company is a team of passionate innovators, engineers, and strategists dedicated to transforming businesses with cutting-edge technology — and our focus on product driven engagement."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Controls */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <Field label="Company name">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </Field>

              <Field label="Logo">
                <div className="flex flex-wrap items-center gap-2">
                  {PRESET_LOGOS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        setLogoStyle(p.id);
                        setLogoDataUrl(null);
                      }}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-all",
                        logoStyle === p.id && !logoDataUrl
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
                      )}
                    >
                      <p.icon className="h-3.5 w-3.5" />
                      {p.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <Upload className="h-3.5 w-3.5" />
                    Upload
                  </button>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={onFile}
                    className="hidden"
                  />
                </div>
              </Field>

              <Field label="Engagement type">
                <select
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-secondary/60 p-3 text-xs text-muted-foreground">
                <ImagePlus className="h-4 w-4 flex-none text-primary" />
                Drop a PNG/SVG with transparency for the cleanest overlay. No
                upload? We render a monogram seal from your initials.
              </div>
            </div>
          </div>

          {/* Solution brief preview */}
          <div className="lg:col-span-3">
            <SolutionBrief
              company={company || "Your Company"}
              initials={initials}
              logoDataUrl={logoDataUrl}
              logoStyle={logoStyle}
              product={product}
              briefId={briefId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function SolutionBrief({
  company,
  initials,
  logoDataUrl,
  logoStyle,
  product,
  briefId,
}: {
  company: string;
  initials: string;
  logoDataUrl: string | null;
  logoStyle: string;
  product: Product;
  briefId: string;
}) {
  return (
    <motion.div
      layout
      className="bg-paper relative overflow-hidden rounded-3xl border-2 border-border/80 p-6 shadow-2xl shadow-primary/5 sm:p-8"
    >
      {/* Perforated edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-col justify-around">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-secondary" />
        ))}
      </div>

      {/* Solution brief stamp */}
      <div className="absolute right-6 top-6 -rotate-3">
        <div className="rounded-md border-2 border-primary/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
          Solution Brief
        </div>
      </div>

      <div className="relative pl-6">
        {/* Header with logo overlay */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              LSAI Quantum · Engagement Brief
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              {product.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              Product Driven Engagement
            </p>
          </div>
          <LogoBadge
            initials={initials}
            dataUrl={logoDataUrl}
            style={logoStyle}
          />
        </div>

        {/* Meta strip */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 border-y border-dashed border-border py-2 text-[11px] font-medium text-muted-foreground">
          <Meta label="Brief ID" value={briefId} />
          <Meta label="Prepared for" value={company} />
          <Meta label="Engagement" value={product.title} />
          <Meta label="Partner" value="LSAI Quantum" />
        </div>

        {/* Approach */}
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Our approach
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">
            {product.body}
          </p>
        </div>

        {/* Footer with logo watermark */}
        <div className="relative mt-6 flex items-end justify-between gap-4 border-t border-border pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Authorized by
            </p>
            <p className="text-sm font-semibold text-foreground">{company}</p>
            <p className="text-[11px] text-muted-foreground">
              LSAI Quantum · Engineering Partner
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Users className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              Flexible delivery models
            </span>
          </div>
          {/* Big faint logo watermark */}
          <div className="pointer-events-none absolute -bottom-2 right-16 select-none text-[8rem] font-bold leading-none text-foreground/[0.04]">
            {initials}
          </div>
        </div>

        {/* Subtle network connector motif (replaces detective red-string) */}
        <svg
          aria-hidden
          className="pointer-events-none absolute right-8 top-24 h-40 w-40 opacity-60"
          viewBox="0 0 200 200"
        >
          {[
            [20, 20],
            [120, 40],
            [60, 95],
            [160, 110],
            [40, 160],
            [180, 175],
          ].map(([cx, cy], i, arr) => {
            const next = arr[(i + 1) % arr.length];
            return (
              <line
                key={`l${i}`}
                x1={cx}
                y1={cy}
                x2={next[0]}
                y2={next[1]}
                stroke="var(--primary)"
                strokeWidth="1"
                opacity="0.35"
              />
            );
          })}
          {[
            [20, 20],
            [120, 40],
            [60, 95],
            [160, 110],
            [40, 160],
            [180, 175],
          ].map(([cx, cy], i) => (
            <circle
              key={`n${i}`}
              cx={cx}
              cy={cy}
              r="4"
              fill="var(--gold)"
              opacity="0.85"
            />
          ))}
        </svg>
      </div>
    </motion.div>
  );
}

function LogoBadge({
  initials,
  dataUrl,
  style,
}: {
  initials: string;
  dataUrl: string | null;
  style: string;
}) {
  if (dataUrl) {
    return (
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-1.5 shadow-sm">
        <img
          src={dataUrl}
          alt="Company logo"
          className="h-full w-full object-contain"
        />
      </div>
    );
  }
  if (style === "shield") {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary/40 bg-primary/5">
        <svg viewBox="0 0 48 48" className="h-12 w-12 text-primary">
          <path
            d="M24 4 L42 12 V26 C42 36 34 42 24 46 C14 42 6 36 6 26 V12 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
            fill="currentColor"
          >
            {initials}
          </text>
        </svg>
      </div>
    );
  }
  if (style === "stamp") {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-gold/60 bg-gold/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-[13px] font-bold tracking-tight text-gold-foreground">
          {initials}
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-[15px] font-bold text-primary-foreground shadow-md">
      {initials}
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/70">
        {label}
      </span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
