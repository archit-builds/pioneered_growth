"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/Badge";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export function Process() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-bg-primary py-24 lg:py-32"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-6 flex justify-center">
            <Badge>OUR PROCESS</Badge>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-16 text-center font-display text-[32px] leading-[1.1] md:text-[42px] lg:text-[48px] text-white max-w-2xl"
          >
            How we turn your visitors into{" "}
            <span className="text-orange-primary">paying customers</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12 relative mx-auto max-w-6xl"
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center md:items-start md:text-left lg:items-center lg:text-center"
              >
                {/* Horizontal Line connecting steps (hidden on last and on mobile) */}
                {i !== PROCESS_STEPS.length - 1 && (
                  <div
                    className="absolute top-22 left-[50%] z-0 hidden w-full border-t border-border-subtle lg:block 
                   transition-colors duration-500 group-hover:border-border-card"
                  />
                )}

                {/* Big large Faded Number */}
                <div className="mb-8 select-none font-display text-[64px] font-medium leading-none text-border-subtle opacity-40 transition-opacity duration-300 group-hover:opacity-60 bg-bg-primary px-4 relative z-10">
                  {step.number}
                </div>

                {/* Colored Node (dot) */}
                <div
                  className={cn(
                    "relative z-10 mb-6 h-4 w-4 rounded-full shrink-0",
                    step.accent === "blue"
                      ? "bg-blue-primary shadow-[0_0_15px_rgba(26,140,255,0.5)]"
                      : "bg-orange-primary shadow-[0_0_15px_rgba(255,122,0,0.5)]",
                  )}
                />

                {/* Text Content */}
                <h3 className="mb-2 text-[18px] font-bold text-white relative z-10 bg-bg-primary px-4">
                  {step.title}
                </h3>
                <p className="max-w-70 text-[13px] leading-relaxed text-text-muted relative z-10 bg-bg-primary px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
