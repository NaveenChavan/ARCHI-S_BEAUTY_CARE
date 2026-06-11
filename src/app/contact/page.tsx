import type { Metadata } from "next";
import { ContactPageClient } from "./client";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book your appointment at Archi's Beauty Care in Raichur. Call, WhatsApp, or fill our online form to schedule your beauty treatment today.",
  openGraph: {
    title: "Contact & Booking | Archi's Beauty Care",
    description:
      "Get in touch with Archi's Beauty Care in Raichur. Book appointments via form, WhatsApp, or phone call.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
