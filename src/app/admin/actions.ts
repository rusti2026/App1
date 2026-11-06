"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { timingSafeEqual } from "node:crypto";
import { db } from "@/lib/db";
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createSessionToken,
  isAdminAuthenticated,
} from "@/lib/admin-auth";

const ALLOWED_STATUS = new Set(["new", "handled"]);

function passwordMatches(supplied: string, expected: string): boolean {
  if (supplied.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(supplied), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD ?? "";

  if (!expected || !passwordMatches(password, expected)) {
    redirect("/admin?error=1");
  }

  const jar = await cookies();
  jar.set(ADMIN_COOKIE, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });

  redirect("/admin/leads");
}

export async function logoutAction() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE);
  redirect("/admin");
}

export async function updateLeadStatusAction(formData: FormData) {
  if (!(await isAdminAuthenticated())) redirect("/admin");

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!id || !ALLOWED_STATUS.has(status)) {
    redirect("/admin/leads");
  }

  try {
    await db.lead.update({ where: { id }, data: { status } });
  } catch {
    // Lead may have been removed between render and submit.
  }

  revalidatePath("/admin/leads");
  redirect("/admin/leads");
}
