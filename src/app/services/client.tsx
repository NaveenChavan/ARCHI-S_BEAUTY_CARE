"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services, serviceCategories } from "@/constants/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTASection } from "@/sections/FinalCTASection";
import { cn } from "@/utils/cn";
import { fadeUp, staggerContainer, getMotionProps } from "@/lib/motion";

export function ServicesPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <section className="bg-background pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Discover our range of professional beauty treatments and training programs designed for you."
          />
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-2"
            {...getMotionProps(fadeUp)}
          >
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                activeCategory === "all"
                  ? "bg-gold text-white"
                  : "bg-white text-text/60 hover:bg-primary/50"
              )}
            >
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-gold text-white"
                    : "bg-white text-text/60 hover:bg-primary/50"
                )}
              >
                {cat.title}
              </button>
            ))}
          </motion.div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeCategory}
          >
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
      <FinalCTASection />
    </>
  );
}
