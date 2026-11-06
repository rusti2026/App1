import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Inbox,
  LogOut,
  Mail,
  Phone,
} from "lucide-react";
import { db } from "@/lib/db";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  logoutAction,
  updateLeadStatusAction,
} from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Leads | LSAI Quantum Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type LeadsPageProps = {
  searchParams: Promise<{ status?: string }>;
};

const TYPE_LABEL: Record<string, string> = {
  quote: "Quote request",
  contact: "Contact message",
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default async function AdminLeadsPage({ searchParams }: LeadsPageProps) {
  if (!(await isAdminAuthenticated())) redirect("/admin");

  const { status } = await searchParams;
  const filter = status === "new" || status === "handled" ? status : undefined;
  const where = filter ? { status: filter } : {};

  const [leads, total, newCount, handledCount, quoteCount, contactCount] =
    await Promise.all([
      db.lead.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: 200,
      }),
      db.lead.count(),
      db.lead.count({ where: { status: "new" } }),
      db.lead.count({ where: { status: "handled" } }),
      db.lead.count({ where: { type: "quote" } }),
      db.lead.count({ where: { type: "contact" } }),
    ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/40 to-background px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Leads console
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Quote requests and contact messages saved from the website.
              Showing the latest {leads.length} of {total} submissions.
            </p>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label="Total" value={total} icon={Inbox} tone="primary" />
          <StatCard label="New" value={newCount} icon={Clock} tone="gold" />
          <StatCard
            label="Handled"
            value={handledCount}
            icon={CheckCircle2}
            tone="primary"
          />
          <StatCard
            label="Quote / Contact"
            value={`${quoteCount} / ${contactCount}`}
            icon={Mail}
            tone="rose"
            isText
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {[
            { key: undefined, label: "All" },
            { key: "new", label: "New" },
            { key: "handled", label: "Handled" },
          ].map((option) => {
            const active = filter === option.key;
            const href = option.key
              ? `/admin/leads?status=${option.key}`
              : "/admin/leads";
            return (
              <Link
                key={option.label}
                href={href}
                className={
                  active
                    ? "rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground"
                    : "rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                }
              >
                {option.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {leads.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Inbox className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-semibold text-foreground">
                No submissions yet
              </p>
              <p className="mt-1 max-w-sm text-xs text-muted-foreground">
                Quote requests and contact messages will appear here as soon as
                the forms are used.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    <th className="px-4 py-3 font-semibold">Received</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Contact</th>
                    <th className="px-4 py-3 font-semibold">Company / interest</th>
                    <th className="px-4 py-3 font-semibold">Message</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-border/70 align-top last:border-b-0 hover:bg-secondary/20"
                    >
                      <td className="whitespace-nowrap px-4 py-4 text-xs text-muted-foreground">
                        {formatDate(lead.createdAt)}
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {TYPE_LABEL[lead.type] ?? lead.type}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-foreground">{lead.name}</p>
                        <a
                          href={`mailto:${lead.email}`}
                          className="mt-0.5 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          <Mail className="h-3 w-3" />
                          {lead.email}
                        </a>
                        {lead.phone ? (
                          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {lead.phone}
                          </p>
                        ) : null}
                      </td>
                      <td className="px-4 py-4 text-xs text-muted-foreground">
                        <p className="font-medium text-foreground">
                          {lead.company || "-"}
                        </p>
                        <p className="mt-0.5">
                          {lead.interest || "No interest specified"}
                        </p>
                        {lead.teamSize ? (
                          <p className="mt-0.5">Team of {lead.teamSize}</p>
                        ) : null}
                      </td>
                      <td className="max-w-xs px-4 py-4 text-xs leading-relaxed text-muted-foreground">
                        <p className="line-clamp-3" title={lead.message ?? ""}>
                          {lead.message || "-"}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex flex-col items-start gap-2">
                          <span
                            className={
                              lead.status === "handled"
                                ? "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary"
                                : "inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-foreground"
                            }
                          >
                            {lead.status === "handled" ? (
                              <CheckCircle2 className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {lead.status}
                          </span>
                          <form action={updateLeadStatusAction}>
                            <input type="hidden" name="id" value={lead.id} />
                            <input
                              type="hidden"
                              name="status"
                              value={lead.status === "new" ? "handled" : "new"}
                            />
                            <button
                              type="submit"
                              className="text-[11px] font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                            >
                              {lead.status === "new"
                                ? "Mark handled"
                                : "Reopen"}
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  tone,
  isText = false,
}: {
  label: string;
  value: number | string;
  icon: LucideIcon;
  tone: "primary" | "gold" | "rose";
  isText?: boolean;
}) {
  const toneClass = {
    primary: "bg-primary/10 text-primary",
    gold: "bg-gold/15 text-gold-foreground",
    rose: "bg-rose/10 text-rose-foreground",
  }[tone];

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
      <span
        className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${toneClass}`}
      >
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
        <p
          className={
            isText
              ? "mt-0.5 text-lg font-semibold leading-tight text-foreground"
              : "mt-0.5 text-2xl font-semibold leading-tight text-foreground"
          }
        >
          {value}
        </p>
      </div>
    </div>
  );
}
