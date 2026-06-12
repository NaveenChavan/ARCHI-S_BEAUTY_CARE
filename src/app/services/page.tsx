import type { Metadata } from "next";
import { ServicesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Our Services | Archies Beauty Clinic",
  description:
    "Explore premium beauty services in Raichur including Hydra Facial, Korean Glass Skin, Permanent Eyebrows, Skin Treatments, and Beauty Academy programs at Archies Beauty Clinic.",
  openGraph: {
    title: "Our Services | Archies Beauty Clinic",
    description:
      "Discover premium beauty treatments and academy programs at Archies Beauty Clinic in Raichur.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
