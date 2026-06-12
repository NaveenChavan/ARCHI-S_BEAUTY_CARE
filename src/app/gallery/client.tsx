"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { assetPath } from "@/lib/utils";

const galleryVideoSections = [
  {
    id: "transformations",
    title: "Our Transformations",
    subtitle: "Stunning skin transformations from our expert treatments",
    videos: [
      { src: "/gallery/Hydra_Facial_transformation.mp4", label: "Hydra Facial Transformation" },
      { src: "/gallery/happy_customer_transformation.mp4", label: "Happy Customer Transformation" },
      { src: "/gallery/customer_transforms.mp4", label: "Customer Transforms" },
      { src: "/gallery/ackni_transformation.mp4", label: "Acne Transformation" },
    ],
  },
  {
    id: "before-after",
    title: "Before & After Results",
    subtitle: "Real results — see the difference our treatments make",
    videos: [
      { src: "/gallery/before_and_after_treatment.mp4", label: "Before & After Treatment" },
      { src: "/gallery/before_and_after_the_treatment.mp4", label: "Treatment Results" },
      { src: "/gallery/result_after_one_session.mp4", label: "Result After One Session" },
      { src: "/gallery/BB_Glow.mp4", label: "BB Glow Result" },
    ],
  },
  {
    id: "customer-satisfaction",
    title: "Customer Satisfaction",
    subtitle: "Hear directly from our happy, glowing clients",
    videos: [
      { src: "/gallery/customer_feedback.mp4", label: "Customer Feedback" },
    ],
  },
];

export function GalleryPageClient() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-background pt-28 pb-0 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            title="Our Gallery"
            subtitle="Real transformations from our premium beauty treatments"
          />

          <motion.div
            className="relative mb-16 h-64 w-full overflow-hidden rounded-2xl shadow-lg md:h-96 lg:h-[480px]"
            {...getMotionProps(fadeUp)}
          >
            <Image
              src="/gallery/Premium_beauty_care_with_archis.jpg"
              alt="Premium Beauty Care with Archi's"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
              <h2 className="font-heading text-3xl font-bold text-white drop-shadow md:text-4xl lg:text-5xl">
                Premium Beauty Care
              </h2>
              <p className="mt-2 max-w-lg text-sm text-white/90 md:text-base">
                Experience the finest beauty treatments at Archi&apos;s Beauty Care
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Sections */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {galleryVideoSections.map((section) => (
            <div key={section.id} className="mb-20">
              <motion.div className="mb-8" {...getMotionProps(fadeUp)}>
                <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-text/60">{section.subtitle}</p>
                <div className="mt-3 h-0.5 w-16 rounded bg-gold" />
              </motion.div>

              <div
                className={`grid gap-5 ${
                  section.videos.length === 1
                    ? "max-w-sm mx-auto"
                    : section.videos.length === 2
                    ? "sm:grid-cols-2 max-w-2xl mx-auto"
                    : section.videos.length === 3
                    ? "sm:grid-cols-2 md:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {section.videos.map((video, i) => (
                  <motion.div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl bg-primary/20 shadow-sm"
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
                    </div>
                    <div className="rounded-b-2xl bg-white px-4 py-3">
                      <p className="text-sm font-semibold text-text">{video.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
