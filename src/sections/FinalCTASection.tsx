"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, getMotionProps } from "@/lib/motion";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917619621584";

export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-primary/30 to-gold/10 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.h2
          className="font-heading text-3xl font-bold text-text md:text-4xl lg:text-5xl"
          {...getMotionProps(fadeUp)}
        >
          Ready to Begin Your Beauty Journey?
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text/60 md:text-base"
          {...getMotionProps(fadeUp)}
        >
          Book your consultation today and experience premium beauty care
          tailored just for you.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          {...getMotionProps(fadeUp)}
        >
          <Link
            href="/contact"
            className="rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            Book Appointment
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gold/40 px-8 py-3 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
