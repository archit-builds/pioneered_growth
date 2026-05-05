"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/Badge";
import { STATS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-primary pt-32 pb-16 lg:pt-0 lg:pb-0 flex items-center">
      {/* Absolute positioned background layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[15%] w-150 h-150 bg-blue-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-125 h-125 bg-orange-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content Col (55%) */}
          <motion.div
            className="w-full lg:w-[55%] flex flex-col gap-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge>⚡ WEB TECH DEVELOPMENT</Badge>
            </motion.div>

            <motion.h1 className="font-display text-[42px] leading-[1.1] md:text-[56px] lg:text-[72px] tracking-tight">
              <motion.span variants={fadeUp} className="block text-white">
                Websites That
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block text-blue-primary"
              >
                Generate Growth
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-text-muted text-lg max-w-xl"
            >
              Bespoke, conversion-focused websites built by a specialist with 8+
              years of experience. Not templates — websites that serve as a
              scalable lead engine for your business.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-orange-primary hover:bg-orange-light text-white border-0 text-base h-14 px-8 rounded-full",
                )}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-border-subtle bg-bg-card/50 hover:bg-bg-card text-white text-base h-14 px-8 rounded-full backdrop-blur-sm",
                )}
              >
                View Our Work
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="pt-8 mt-4 border-t border-border-subtle/50"
            >
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {STATS.map((stat, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-white">
                        {stat.value}
                      </span>
                      <span className="text-xs text-text-faint uppercase tracking-wider font-mono">
                        {stat.label}
                      </span>
                    </div>
                    {i !== STATS.length - 1 && (
                      <div className="hidden sm:block ml-8 h-10 w-px bg-border-subtle/50" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Browser Mockup Col (45%) */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-xl border border-border-card bg-bg-card shadow-2xl shadow-blue-primary/5 overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center px-4 py-3 border-b border-border-card bg-bg-secondary">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="mx-auto bg-bg-card border border-border-card rounded flex items-center px-3 py-1 text-xs text-text-muted font-mono w-1/2">
                  <span className="truncate">pioneeredgrowth.com</span>
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-6 md:p-8 bg-bg-card aspect-4/3 flex flex-col gap-6">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-text-secondary font-medium font-display text-lg mb-1">
                      Growth Metrics
                    </h3>
                    <p className="text-text-muted text-sm">
                      +240% Monthly Traffic
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-primary font-bold text-xl">14K+</p>
                    <p className="text-text-faint text-xs">Unique Visitors</p>
                  </div>
                </div>

                {/* Fake Bar Chart */}
                <div className="flex-1 flex items-end gap-3 md:gap-4 mt-auto h-full w-full">
                  {[40, 60, 45, 80, 65, 95, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.8 + i * 0.1,
                        ease: "easeOut",
                      }}
                      className={cn(
                        "flex-1 rounded-t-sm",
                        i === 6
                          ? "bg-orange-primary"
                          : i >= 4
                            ? "bg-blue-primary"
                            : "bg-border-card",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
