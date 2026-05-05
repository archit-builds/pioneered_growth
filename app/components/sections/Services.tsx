"use client";

import React from "react";
import { Badge } from "@/app/components/ui/Badge";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/app/components/ui/ServiceCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full bg-bg-primary py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp}>
            <Badge>◈ SPECIALIST EXPERTISE</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-6 text-[32px] leading-[1.1] md:text-[40px] lg:text-[56px] tracking-tight"
          >
            <span className="block text-white">We Engineer Websites</span>
            <span className="block text-orange-primary">
              That Convert Traffic
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base text-text-muted md:text-lg"
          >
            Stop relying on generic templates. We build bespoke,
            high-performance web experiences designed to elevate your brand and
            maximize lead generation.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              accent={service.accent}
              tag={service.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
