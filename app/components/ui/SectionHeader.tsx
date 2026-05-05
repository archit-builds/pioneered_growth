import React from "react";
import { Badge } from "@/app/components/ui/Badge";
import { cn } from "@/lib/utils";
import * as FramerMotion from "framer-motion";
const { motion } = FramerMotion;

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge: React.ReactNode;
  titleLine1: React.ReactNode;
  titleLine2: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function SectionHeader({
  badge,
  titleLine1,
  titleLine2,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "items-center text-center mx-auto"
          : "items-start text-left",
        className,
      )}
      {...props}
    >
      <motion.div variants={fadeUp as any}>
        <Badge>{badge}</Badge>
      </motion.div>

      <motion.h2
        variants={fadeUp as any}
        className="font-display text-[32px] leading-[1.1] md:text-[40px] lg:text-[48px] tracking-tight"
      >
        <span className="block text-text-primary">{titleLine1}</span>
        <span className="block text-orange-primary">{titleLine2}</span>
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp as any}
          className="text-text-muted text-base md:text-lg max-w-2xl mt-2"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
