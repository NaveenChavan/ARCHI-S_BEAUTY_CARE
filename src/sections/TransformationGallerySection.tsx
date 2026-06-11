"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryImages } from "@/constants/gallery";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, getMotionProps } from "@/lib/motion";

export function TransformationGallerySection() {
  const displayed = galleryImages.slice(0, 6);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          title="Our Transformations"
          subtitle="Real results from our beauty treatments"
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {displayed.map((item, i) => (
            <motion.div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-primary/20"
              {...getMotionProps(fadeUp)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-12 text-center" {...getMotionProps(fadeUp)}>
          <Link
            href="/gallery"
            className="inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
