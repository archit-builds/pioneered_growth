"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { Badge } from "@/app/components/ui/Badge";
import { cn } from "@/lib/utils";

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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full py-24 md:py-32 bg-bg-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <Badge>❓ FREQUENTLY ASKED QUESTIONS</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold leading-tight text-white mb-6"
          >
            Got Questions? <br className="hidden md:block" />
            <span className="text-orange-primary">We've Got Answers</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-muted text-lg">
            Everything you need to know about working with us.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={cn(
                  "group rounded-2xl border bg-bg-card overflow-hidden transition-colors duration-300",
                  isOpen
                    ? "border-orange-primary/50"
                    : "border-border-card hover:border-border-subtle",
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg text-white group-hover:text-orange-primary transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "ml-4 shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-bg-secondary border transition-all duration-300",
                      isOpen
                        ? "border-orange-primary text-orange-primary rotate-180"
                        : "border-border-card text-text-muted group-hover:border-orange-primary/50",
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
