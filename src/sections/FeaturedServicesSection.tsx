"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/constants/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, getMotionProps } from "@/lib/motion";

export function FeaturedServicesSection() {
  const featured = services.slice(0, 6);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Premium beauty treatments designed for your unique needs"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        <motion.div className="mt-12 text-center" {...getMotionProps(fadeUp)}>
          <Link
            href="/services"
            className="inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
