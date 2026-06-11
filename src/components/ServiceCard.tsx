"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceItem } from "@/types";
import { fadeUp, getMotionProps } from "@/lib/motion";

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
      {...getMotionProps(fadeUp)}
      custom={index}
    >
      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-primary/30">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="font-heading text-xl font-semibold text-text">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text/60">
        {service.description}
      </p>
      {service.benefits.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {service.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 text-sm text-text/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {benefit}
            </li>
          ))}
        </ul>
      )}
      <a
        href={`/contact?service=${service.id}`}
        className="mt-6 inline-block rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
      >
        Book Now
      </a>
    </motion.div>
  );
}
