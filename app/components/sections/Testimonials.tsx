"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/Badge";
import { TestimonialCard } from "@/app/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import type { Variants } from "framer-motion";
import React from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-bg-secondary py-24 lg:py-32"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Badge>CLIENT SUCCESS</Badge>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-16 font-display text-[32px] leading-[1.1] md:text-[42px] lg:text-[48px] text-white"
          >
            Don't just take{" "}
            <span className="text-blue-primary">our word for it</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 text-left"
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                quote={testimonial.quote}
                name={testimonial.name}
                business={testimonial.business}
                variants={fadeUp}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
