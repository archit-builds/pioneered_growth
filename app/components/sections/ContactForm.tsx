"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { CONTACT_INFO } from "@/lib/constants";
import { Badge } from "@/app/components/ui/Badge";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  businessName: z.string().min(1, "Business name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  budget: z.enum(["under-1k", "1k-3k", "3k-5k", "5k-plus"], {
    message: "Please select a budget",
  }),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

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

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema as any),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast.success("We'll be in touch within 24 hours 🚀");
    reset();
  };

  const inputClasses =
    "w-full rounded-md border border-border-subtle bg-bg-primary px-4 py-3 text-[15px] text-white placeholder:text-text-muted focus:border-blue-primary focus:outline-none focus:ring-1 focus:ring-blue-primary transition-colors";

  return (
    <section id="contact" className="relative bg-bg-secondary py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-start"
        >
          {/* Left Column (40%) */}
          <div className="flex w-full flex-col lg:w-2/5">
            <motion.div variants={fadeUp} className="mb-6">
              <Badge>GET IN TOUCH</Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mb-6 font-display text-[36px] leading-[1.1] text-white md:text-[48px]"
            >
              Let's build your{" "}
              <span className="text-blue-primary">growth engine</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-md text-lg leading-relaxed text-text-secondary"
            >
              Ready to turn your website into your best salesperson? Fill out
              the form below and we'll get back to you with a custom strategy.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="mb-1 font-mono text-[13px] text-text-faint">
                  EMAIL
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-lg font-medium text-white transition-colors hover:text-orange-primary"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="mb-1 font-mono text-[13px] text-text-faint">
                  PHONE
                </span>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-lg font-medium text-white transition-colors hover:text-orange-primary"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="mb-1 font-mono text-[13px] text-text-faint">
                  RESPONSE TIME
                </span>
                <span className="text-lg font-medium text-white">
                  {CONTACT_INFO.responseTime}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (60%) */}
          <motion.div variants={fadeUp} className="w-full lg:w-3/5">
            <div className="relative overflow-hidden rounded-2xl border border-border-card bg-bg-card p-6 shadow-2xl md:p-8">
              {/* Blue top accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-blue-primary" />

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                {/* Row 1: Full Name + Business Name */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-text-secondary">
                      Full Name
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="John Doe"
                      className={cn(
                        inputClasses,
                        errors.fullName &&
                          "border-red-500 focus:border-red-500 focus:ring-red-500",
                      )}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-text-secondary">
                      Business Name
                    </label>
                    <input
                      {...register("businessName")}
                      placeholder="Acme Corp"
                      className={cn(
                        inputClasses,
                        errors.businessName &&
                          "border-red-500 focus:border-red-500 focus:ring-red-500",
                      )}
                    />
                    {errors.businessName && (
                      <span className="text-xs text-red-400">
                        {errors.businessName.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className={cn(
                      inputClasses,
                      errors.email &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500",
                    )}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+44 7700 000000"
                    className={cn(
                      inputClasses,
                      errors.phone &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500",
                    )}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-400">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">
                    Monthly Budget
                  </label>
                  <select
                    {...register("budget")}
                    className={cn(
                      inputClasses,
                      "appearance-none",
                      errors.budget &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500",
                    )}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select a budget range...
                    </option>
                    <option value="under-1k">Under £1,000</option>
                    <option value="1k-3k">£1,000 - £3,000</option>
                    <option value="3k-5k">£3,000 - £5,000</option>
                    <option value="5k-plus">£5,000+</option>
                  </select>
                  {errors.budget && (
                    <span className="text-xs text-red-400">
                      {errors.budget.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">
                    Project Details
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your goals and what you're looking to achieve..."
                    className={cn(
                      inputClasses,
                      "resize-y",
                      errors.message &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500",
                    )}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-md bg-orange-primary px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-orange-primary focus:ring-offset-2 focus:ring-offset-bg-card disabled:opacity-70"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Request Your Free Strategy Call"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
