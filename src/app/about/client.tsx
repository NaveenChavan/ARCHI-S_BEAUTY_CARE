"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { businessInfo } from "@/constants/business";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, getMotionProps } from "@/lib/motion";

export function AboutPageClient() {
  return (
    <>
      <section className="bg-background pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            title="About Us"
            subtitle="Learn about our journey and passion for beauty"
          />
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              className="relative aspect-[4/5]"
              {...getMotionProps(fadeUp)}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-gold/10" />
              <Image
                src="/images/placeholder.svg"
                alt="Archi's Beauty Care clinic interior"
                fill
                className="rounded-3xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="space-y-6">
              <motion.div {...getMotionProps(fadeUp)}>
                <h3 className="font-heading text-2xl font-semibold text-text">
                  Our Story
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/60 md:text-base">
                  Archi&apos;s Beauty Care was founded with a simple vision —
                  to provide premium, personalized beauty treatments in a warm
                  and professional environment. Based in Raichur, Karnataka, we
                  have grown into a trusted destination for women seeking
                  advanced skincare, beauty enhancements, and professional
                  grooming.
                </p>
              </motion.div>
              <motion.div {...getMotionProps(fadeUp)}>
                <h3 className="font-heading text-2xl font-semibold text-text">
                  Our Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/60 md:text-base">
                  To help every woman feel confident and beautiful through
                  personalized beauty treatments, modern techniques, and a
                  nurturing approach. We are committed to delivering results
                  that truly make a difference.
                </p>
              </motion.div>
              <motion.div {...getMotionProps(fadeUp)}>
                <h3 className="font-heading text-2xl font-semibold text-text">
                  Our Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/60 md:text-base">
                  To be the most trusted and loved beauty clinic in Raichur, known
                  for quality, care, and transformation — while empowering women
                  through our academy programs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Premium Quality",
                description:
                  "We use advanced techniques and premium products to ensure every treatment delivers exceptional results.",
              },
              {
                title: "Personalized Care",
                description:
                  "Every client receives a customized treatment plan based on their unique skin type, concerns, and goals.",
              },
              {
                title: "Trust & Comfort",
                description:
                  "We have built a women-focused environment where you feel safe, comfortable, and truly cared for.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-background p-6 md:p-8"
                {...getMotionProps(fadeUp)}
              >
                <h3 className="font-heading text-xl font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <motion.div {...getMotionProps(fadeUp)}>
            <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
              Meet Archana
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text/60 md:text-base">
              Behind Archi&apos;s Beauty Care is Archana — a passionate beauty
              professional dedicated to helping women look and feel their best.
              With a deep understanding of skincare and beauty techniques, she
              leads a team that puts your confidence first.
            </p>
          </motion.div>
          <motion.div className="mt-8" {...getMotionProps(fadeUp)}>
            <p className="text-sm text-text/60">
              Want to know more?{" "}
              <Link
                href="/contact"
                className="font-semibold text-gold underline underline-offset-2"
              >
                Get in touch
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <motion.h2
            className="font-heading text-2xl font-bold text-text md:text-3xl"
            {...getMotionProps(fadeUp)}
          >
            Join Our Beauty Academy
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text/60 md:text-base"
            {...getMotionProps(fadeUp)}
          >
            Passionate about beauty? Learn professional grooming, skincare
            techniques, and confidence-building skills through our academy
            programs. Start your journey in the beauty industry today.
          </motion.p>
          <motion.div className="mt-6" {...getMotionProps(fadeUp)}>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
            >
              Enquire Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-text/60">
            <span>
              <strong className="text-text">Phone:</strong> {businessInfo.phone}
            </span>
            <span>
              <strong className="text-text">Email:</strong>{" "}
              {businessInfo.email}
            </span>
            <span>
              <strong className="text-text">Location:</strong>{" "}
              {businessInfo.address}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
