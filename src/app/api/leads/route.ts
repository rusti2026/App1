import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type IncomingLead = {
  type?: unknown;
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  teamSize?: unknown;
  interest?: unknown;
  message?: unknown;
  website?: unknown;
  source?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;

const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(key: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let payload: IncomingLead;
  try {
    payload = (await request.json()) as IncomingLead;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: real forms never fill this field. Pretend success so bots move on.
  if (cleanText(payload.website, 200)) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const type = payload.type === "contact" ? "contact" : "quote";
  const name = cleanText(payload.name, 120);
  const email = cleanText(payload.email, 180);
  const company = cleanText(payload.company, 160);
  const phone = cleanText(payload.phone, 60);
  const interest = cleanText(payload.interest, 120);
  const message = cleanText(payload.message, 2000);
  const source = cleanText(payload.source, 300);

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (type === "contact" && !message) {
    return NextResponse.json(
      { ok: false, error: "Please include a short message." },
      { status: 400 },
    );
  }

  const parsedTeamSize =
    payload.teamSize === undefined || payload.teamSize === null
      ? null
      : Number.parseInt(String(payload.teamSize), 10);

  const teamSize =
    parsedTeamSize && Number.isFinite(parsedTeamSize)
      ? Math.min(Math.max(parsedTeamSize, 1), 100_000)
      : null;

  try {
    const lead = await db.lead.create({
      data: {
        type,
        name,
        email,
        company: company || null,
        phone: phone || null,
        teamSize,
        interest: interest || null,
        message: message || null,
        source: source || request.headers.get("referer")?.slice(0, 300) || null,
      },
    });

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Failed to save lead", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We could not save your request. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
