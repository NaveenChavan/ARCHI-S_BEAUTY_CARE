import type { Metadata } from "next";
import { ContactPageClient } from "./client";

export const metadata: Metadata = {
  title: "Contact & Booking | Archies Beauty Clinic",
  description:
    "Book your appointment at Archies Beauty Clinic in Raichur. Call, WhatsApp, or fill our online form to schedule your beauty treatment today.",
  openGraph: {
    title: "Contact & Booking | Archies Beauty Clinic",
    description:
      "Get in touch with Archies Beauty Clinic in Raichur. Book appointments via form, WhatsApp, or phone call.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
