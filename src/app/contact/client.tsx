"use client";

import { motion } from "framer-motion";
import { businessInfo } from "@/constants/business";
import { AppointmentForm } from "@/components/AppointmentForm";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, getMotionProps } from "@/lib/motion";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917619621584";

export function ContactPageClient() {
  return (
    <>
      <section className="bg-background pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            title="Contact & Book Appointment"
            subtitle="We'd love to hear from you. Book your appointment or reach out to us."
          />
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <AppointmentForm />
            </div>
            <div className="space-y-8">
              <motion.div
                className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
                {...getMotionProps(fadeUp)}
              >
                <h3 className="font-heading text-lg font-semibold text-text">
                  Contact Information
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    <strong className="text-text">Phone:</strong>{" "}
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-text/60 transition-colors hover:text-gold"
                    >
                      {businessInfo.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-text">WhatsApp:</strong>{" "}
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text/60 transition-colors hover:text-gold"
                    >
                      Chat with us
                    </a>
                  </p>
                  <p>
                    <strong className="text-text">Email:</strong>{" "}
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-text/60 transition-colors hover:text-gold"
                    >
                      {businessInfo.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-text">Location:</strong>{" "}
                    <span className="text-text/60">{businessInfo.address}</span>
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
                {...getMotionProps(fadeUp)}
              >
                <h3 className="font-heading text-lg font-semibold text-text">
                  Business Hours
                </h3>
                <div className="mt-4 space-y-2 text-sm">
                  {businessInfo.businessHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between text-text/60"
                    >
                      <span>{item.day}</span>
                      <span className="font-medium text-text">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
                {...getMotionProps(fadeUp)}
              >
                <h3 className="font-heading text-lg font-semibold text-text">
                  Follow Us
                </h3>
                <p className="mt-2 text-sm text-text/60">
                  See our latest treatments and results on Instagram.
                </p>
                <a
                  href={businessInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Follow on Instagram
                </a>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
                {...getMotionProps(fadeUp)}
              >
                <h3 className="font-heading text-lg font-semibold text-text">
                  Find Us
                </h3>
                <div className="mt-4 flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-gold"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-6.853A8.25 8.25 0 0012 3.75a8.25 8.25 0 00-8.25 8.25c0 2.451 1.274 4.774 3.218 6.853a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.143.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">
                      Archies Beauty Clinic
                    </p>
                    <p className="mt-1 text-sm text-text/60">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <motion.div {...getMotionProps(fadeUp)}>
            <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
              Your Beauty Journey Starts Here
            </h2>
            <p className="mt-3 text-sm text-text/60">
              We are here to help you look and feel your best. Reach out to us
              and let us take care of the rest.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
