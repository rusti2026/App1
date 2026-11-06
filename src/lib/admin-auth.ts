import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "lsai_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours

function sessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "insecure-development-secret"
  );
}

export function createSessionToken(): string {
  const issuedAt = Date.now().toString(36);
  const signature = createHmac("sha256", sessionSecret())
    .update(`admin.${issuedAt}`)
    .digest("hex");
  return `${issuedAt}.${signature}`;
}

export function verifySessionToken(token?: string | null): boolean {
  if (!token) return false;
  const separator = token.indexOf(".");
  if (separator === -1) return false;

  const issuedAt = token.slice(0, separator);
  const supplied = token.slice(separator + 1);
  const expected = createHmac("sha256", sessionSecret())
    .update(`admin.${issuedAt}`)
    .digest("hex");

  if (supplied.length !== expected.length) return false;
  if (
    !timingSafeEqual(Buffer.from(supplied, "hex"), Buffer.from(expected, "hex"))
  ) {
    return false;
  }

  const issued = Number.parseInt(issuedAt, 36);
  if (!Number.isFinite(issued)) return false;
  return Date.now() - issued <= ADMIN_SESSION_MAX_AGE * 1000;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}
