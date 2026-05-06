"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Variants } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  variants?: Variants;
}

export function TestimonialCard({
  quote,
  name,
  business,
  variants,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border-card bg-bg-card p-6 md:p-8"
    >
      {/* Large Quote Mark */}
      <div className="pointer-events-none absolute right-6 top-6 select-none font-display text-[100px] leading-none text-blue-primary opacity-20">
        "
      </div>

      <div className="relative z-10 flex h-full flex-col">
        {/* Stars */}
        <div className="mb-6 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-orange-primary text-orange-primary"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="mb-8 flex-1 text-base leading-relaxed text-text-secondary lg:text-lg">
          "{quote}"
        </p>

        {/* Divider */}
        <div className="mb-6 h-px w-full bg-border-card" />

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-auto">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-bg-secondary font-display text-lg font-bold text-blue-primary">
            {name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">{name}</span>
            <span className="text-xs text-text-muted">{business}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
