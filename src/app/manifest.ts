import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Archies Beauty Clinic",
    short_name: "Archies Beauty",
    description:
      "Premium beauty clinic and academy in Raichur. Book appointments for skin treatments, facials, permanent makeup, and more.",
    start_url: ".",
    display: "standalone",
    background_color: "#FFF9F8",
    theme_color: "#F6D6D2",
    icons: [
      {
        src: "favicon-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "favicon-512x512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
