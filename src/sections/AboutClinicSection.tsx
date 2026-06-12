"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, getMotionProps } from "@/lib/motion";

export function AboutClinicSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            className="relative aspect-square w-full overflow-hidden rounded-3xl md:aspect-[4/5]"
            {...getMotionProps(fadeUp)}
          >
            <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-br from-primary/30 to-gold/10" />
            <Image
              src="Premium_beauty_care_with_archis.jpg"
              alt="About Archies Beauty Care clinic"
              fill
              className="rounded-3xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div>
            <SectionHeading
              title="Welcome to Archies Beauty Care"
              subtitle="Your trusted beauty destination in Raichur"
              align="left"
            />
            <motion.p
              className="text-sm leading-relaxed text-text/60 md:text-base"
              {...getMotionProps(fadeUp)}
            >
              At Archies Beauty Care, we believe every woman deserves to
              feel confident and beautiful. Founded by Archana, our clinic
              offers a warm, professional space where advanced beauty treatments
              meet personalized care.
            </motion.p>
            <motion.p
              className="mt-4 text-sm leading-relaxed text-text/60 md:text-base"
              {...getMotionProps(fadeUp)}
            >
              From hydrating facials to permanent makeup and professional
              training programs, we are dedicated to helping you look and feel
              your best. Every treatment is tailored to your unique needs in a
              comfortable, women-focused environment.
            </motion.p>
            <motion.div className="mt-8" {...getMotionProps(fadeUp)}>
              <Link
                href="/about"
                className="inline-block rounded-lg border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10"
              >
                Know More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
