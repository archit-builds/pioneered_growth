"use client";

import React from "react";
import { cn } from "@/lib/utils";

const BRANDS = [
  "Acme Corp",
  "Global Insights",
  "Quantum Inc",
  "Nexus Tech",
  "Starlight Industries",
  "Vertex Solutions",
  "Aero Design",
  "Pulse Dynamics",
  // Duplicate for seamless loop
  "Acme Corp",
  "Global Insights",
  "Quantum Inc",
  "Nexus Tech",
  "Starlight Industries",
  "Vertex Solutions",
  "Aero Design",
  "Pulse Dynamics",
];

export function TrustBar() {
  return (
    <section className="relative w-full overflow-hidden border-y border-border-subtle bg-bg-secondary py-8 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee items-center gap-16 px-8">
        {BRANDS.map((brand, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center justify-center font-display text-xl font-bold tracking-wider text-text-primary opacity-50 grayscale transition-opacity duration-300 hover:opacity-100"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
