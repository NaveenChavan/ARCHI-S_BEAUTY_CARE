import type { Metadata } from "next";
import { GalleryPageClient } from "./client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse treatment results and transformations at Archies Beauty Clinic in Raichur. See our facial results, skin treatments, brows, and lip enhancements.",
  openGraph: {
    title: "Gallery | Archies Beauty Clinic",
    description:
      "See real treatment results from Archies Beauty Clinic — facials, skin treatments, brows, and more.",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
