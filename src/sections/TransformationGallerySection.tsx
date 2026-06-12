"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { assetPath } from "@/lib/utils";

const transformationVideos = [
  {
    id: "v1",
    src: "/gallery/Hydra_Facial_transformation.mp4",
    title: "Hydra Facial Transformation",
    subtitle: "Deep hydration results",
  },
  {
    id: "v2",
    src: "/gallery/before_and_after_treatment.mp4",
    title: "Before & After Treatment",
    subtitle: "See the real difference",
  },
  {
    id: "v3",
    src: "/gallery/happy_customer_transformation.mp4",
    title: "Happy Customer",
    subtitle: "Real client satisfaction",
  },
];

export function TransformationGallerySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          title="Our Transformations"
          subtitle="Real results from our premium beauty treatments"
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {transformationVideos.map((video) => (
            <motion.div
              key={video.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-primary/10 shadow-sm"
              {...getMotionProps(fadeUp)}
            >
              <div className="relative w-full overflow-hidden rounded-t-2xl">
                <video
                  src={assetPath(video.src)}
                  className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col gap-0.5 rounded-b-2xl bg-white px-4 py-3">
                <p className="text-sm font-semibold text-text">{video.title}</p>
                <p className="text-xs text-text/50">{video.subtitle}</p>
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
