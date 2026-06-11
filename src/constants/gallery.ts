import { GalleryItem } from "@/types";

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "facial", label: "Facial Results" },
  { id: "skin", label: "Skin Treatments" },
  { id: "brows", label: "Brows" },
  { id: "lip", label: "Lip Treatments" },
];

// TODO: Replace placeholder images with actual treatment result photos
export const galleryImages: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/placeholder.svg",
    alt: "Hydra Facial treatment result",
    category: "facial",
    title: "Hydra Facial Glow",
  },
  {
    id: "g2",
    src: "/images/placeholder.svg",
    alt: "Korean Glass Skin treatment result",
    category: "facial",
    title: "Glass Skin Transformation",
  },
  {
    id: "g3",
    src: "/images/placeholder.svg",
    alt: "Skin brightening treatment result",
    category: "skin",
    title: "Skin Brightening",
  },
  {
    id: "g4",
    src: "/images/placeholder.svg",
    alt: "Chemical peel treatment result",
    category: "skin",
    title: "Chemical Peel Result",
  },
  {
    id: "g5",
    src: "/images/placeholder.svg",
    alt: "Permanent eyebrows result",
    category: "brows",
    title: "Natural Brow Shaping",
  },
  {
    id: "g6",
    src: "/images/placeholder.svg",
    alt: "Permanent eyebrows micro-pigmentation",
    category: "brows",
    title: "Micro-pigmentation Brows",
  },
  {
    id: "g7",
    src: "/images/placeholder.svg",
    alt: "Permanent lip colour treatment",
    category: "lip",
    title: "Lip Colour Enhancement",
  },
  {
    id: "g8",
    src: "/images/placeholder.svg",
    alt: "Melasma treatment result",
    category: "skin",
    title: "Melasma Treatment",
  },
  {
    id: "g9",
    src: "/images/placeholder.svg",
    alt: "Open pore treatment result",
    category: "facial",
    title: "Pore Refinement",
  },
];
