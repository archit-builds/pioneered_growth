"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/Badge";
import { REASONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-bg-card py-20 lg:py-32"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <Badge>WHY PIONEEREDGROWTH</Badge>
            </div>

            <h2 className="mb-6 font-display text-[32px] leading-[1.1] md:text-[42px] lg:text-[48px] text-white">
              We build assets, <br />
              <span className="text-orange-primary">not just websites.</span>
            </h2>

            <p className="mb-12 max-w-lg text-lg text-text-muted">
              Most agencies build websites that look pretty but sit there
              collecting dust. We engineer growth machines tightly integrated
              with your brand, designed specifically to capture leads and drive
              enquiries.
            </p>

            <div className="flex flex-col">
              <div className="mb-2 h-[2px] w-20 bg-orange-primary" />
              <p className="font-display italic text-lg text-text-secondary">
                Archit – Founder
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {REASONS.map((reason, i) => (
              <div
                key={reason.title}
                className={cn(
                  "flex items-start gap-4 border-border-card py-8",
                  "border-t",
                  i === REASONS.length - 1 && "border-b",
                )}
              >
                <div className="flex-shrink-0 text-xl text-orange-primary leading-none mt-1">
                  {reason.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-base text-text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
