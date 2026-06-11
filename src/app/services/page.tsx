import type { Metadata } from "next";
import { ServicesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore premium beauty services in Raichur including Hydra Facial, Korean Glass Skin, Permanent Eyebrows, Skin Treatments, and Beauty Academy programs at Archi's Beauty Care.",
  openGraph: {
    title: "Our Services | Archi's Beauty Care",
    description:
      "Premium beauty services in Raichur — skin treatments, beauty enhancements, and academy programs.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
