"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, galleryCategories } from "@/constants/gallery";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/utils/cn";
import { fadeUp, scaleIn, getMotionProps } from "@/lib/motion";

export function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="bg-background pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            title="Our Gallery"
            subtitle="Real transformations from our beauty treatments"
          />
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-2"
            {...getMotionProps(fadeUp)}
          >
            {galleryCategories.map((cat) => (
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
                {cat.label}
              </button>
            ))}
          </motion.div>
          <motion.div
            className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
            layout
            key={activeCategory}
          >
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl bg-primary/20"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                layout
                onClick={() => setSelectedImage(item.src)}
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
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[80vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square w-full max-w-lg">
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="rounded-2xl object-contain"
                  sizes="90vw"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-text shadow-lg"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
            Want Results Like These?
          </h2>
          <p className="mt-2 text-sm text-text/60">
            Book your consultation today and start your transformation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
