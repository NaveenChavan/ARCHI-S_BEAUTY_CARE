import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "About Us | Archies Beauty Clinic",
  description:
    "Learn about Archies Beauty Clinic in Raichur. Discover our story, mission, and commitment to premium beauty treatments and professional training.",
  openGraph: {
    title: "About Us | Archies Beauty Clinic",
    description:
      "Discover the story behind Archies Beauty Clinic — Raichur's premium beauty clinic and academy.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
