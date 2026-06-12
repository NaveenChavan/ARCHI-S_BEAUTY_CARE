"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/constants/business";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, staggerContainer, getMotionProps } from "@/lib/motion";

export function WhyChooseUsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What makes Archies Beauty Clinic the preferred choice in Raichur"
        />
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseUs.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
              variants={fadeUp}
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
