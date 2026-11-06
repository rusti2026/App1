import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Database, KeyRound, ShieldCheck } from "lucide-react";
import { loginAction } from "./actions";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin | LSAI Quantum",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAdminAuthenticated()) redirect("/admin/leads");

  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-secondary/50 to-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-xl sm:p-8">
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <Database className="h-3 w-3" />
              Leads console
            </span>
          </div>

          <h1 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
            Admin sign in
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Enter the admin password to view quote and contact submissions.
          </p>

          {error ? (
            <p
              role="alert"
              className="mt-4 rounded-xl border border-rose/30 bg-rose/10 px-3.5 py-2.5 text-xs font-medium text-rose-foreground"
            >
              That password is not correct. Please try again.
            </p>
          ) : null}

          <form action={loginAction} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
              >
                Admin password
              </label>
              <div className="relative">
                <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign in
            </button>
          </form>

          <p className="mt-5 rounded-xl bg-secondary/60 p-3 text-[11px] leading-relaxed text-muted-foreground">
            Configure credentials with{" "}
            <code className="font-mono text-foreground">ADMIN_PASSWORD</code> and{" "}
            <code className="font-mono text-foreground">
              ADMIN_SESSION_SECRET
            </code>{" "}
            in <code className="font-mono text-foreground">.env</code>.
          </p>
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Link>
      </div>
    </main>
  );
}
