import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Archi's Beauty Care in Raichur. Discover our story, mission, and commitment to premium beauty treatments and professional training.",
  openGraph: {
    title: "About Us | Archi's Beauty Care",
    description:
      "Discover the story behind Archi's Beauty Care — Raichur's premium beauty clinic and academy.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
