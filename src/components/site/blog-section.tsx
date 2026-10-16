"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="relative scroll-mt-16 border-t border-border bg-secondary/30 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Blog"
          title="Expert financial advice and business tips"
          description="The world of business finance is evolving rapidly. Our blog keeps you ahead of the curve by exploring the latest trends."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  By {post.author}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Read more
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
