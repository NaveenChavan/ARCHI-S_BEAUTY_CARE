"use client";

import { motion } from "framer-motion";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
      {...getMotionProps(fadeUp)}
    >
      <h2 className="font-heading text-3xl font-bold text-text md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-text/60 md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
