import type { Metadata } from "next";
import { GalleryPageClient } from "./client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse treatment results and transformations at Archi's Beauty Care in Raichur. See our facial results, skin treatments, brows, and lip enhancements.",
  openGraph: {
    title: "Gallery | Archi's Beauty Care",
    description:
      "See real treatment results from Archi's Beauty Care — facials, skin treatments, brows, and more.",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
