"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  accent: "blue" | "orange";
  tag?: string;
  index: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  accent,
  tag,
  index,
}: ServiceCardProps) {
  const isBlue = accent === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-card bg-bg-card p-6 shadow-sm transition-all hover:shadow-lg lg:p-8"
      style={{
        boxShadow: isBlue
          ? "0 4px 50px -10px var(--blue-glow)"
          : "0 4px 50px -10px var(--orange-glow)",
      }}
    >
      {/* Top accent bar */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-0.75 w-full transition-opacity duration-500",
          isBlue ? "bg-blue-primary" : "bg-orange-primary",
        )}
      />

      {/* Decorative gradient blob */}
      <div
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full blur-[80px] transition-opacity duration-500",
          isBlue
            ? "bg-blue-primary/20 group-hover:bg-blue-primary/40"
            : "bg-orange-primary/20 group-hover:bg-orange-primary/40",
        )}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-lg bg-bg-secondary text-2xl border",
              isBlue
                ? "text-blue-primary border-border-card"
                : "text-orange-primary border-border-card",
            )}
          >
            {icon}
          </div>

          {tag && (
            <div className="rounded-full bg-orange-glow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-orange-primary ring-1 ring-inset ring-orange-primary/20">
              {tag}
            </div>
          )}
        </div>

        <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {description}
        </p>

        <div className="mt-8 pt-6 border-t border-border-card/50 flex-1 flex items-end">
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center text-[13px] font-semibold uppercase tracking-wider transition-colors",
              isBlue
                ? "text-blue-primary hover:text-blue-deep"
                : "text-orange-primary hover:text-orange-light",
            )}
          >
            Learn more
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
