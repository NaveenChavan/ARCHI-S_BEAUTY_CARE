import { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  // Skin Treatments
  {
    id: "hydra-facial",
    title: "Hydra Facial",
    description:
      "A deeply hydrating and revitalizing facial treatment that cleanses, exfoliates, and nourishes your skin for a radiant glow.",
    benefits: [
      "Deep hydration",
      "Gentle exfoliation",
      "Instant glow",
      "Suitable for all skin types",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
  },
  {
    id: "korean-glass-skin",
    title: "Korean Glass Skin Treatment",
    description:
      "Achieve that coveted glass skin look with our multi-step treatment that focuses on hydration, luminosity, and pore refinement.",
    benefits: [
      "Ultra-hydrated skin",
      "Minimized pores",
      "Luminous complexion",
      "Smooth texture",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
  },
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    description:
      "Professional-grade chemical peels to address uneven skin tone, dullness, and mild scarring for a renewed complexion.",
    benefits: [
      "Even skin tone",
      "Reduced pigmentation",
      "Brighter skin",
      "Improved texture",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
  },
  {
    id: "skin-brightening",
    title: "Skin Brightening",
    description:
      "A targeted brightening treatment designed to reduce dullness and restore your skin's natural radiance.",
    benefits: [
      "Natural radiance",
      "Reduced dullness",
      "Even skin tone",
      "Youthful glow",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
  },
  {
    id: "melasma-treatment",
    title: "Melasma Treatment",
    description:
      "Specialized treatments to help reduce the appearance of melasma and pigmentation for a clearer, more even complexion.",
    benefits: [
      "Reduced pigmentation",
      "Even skin tone",
      "Gentle on skin",
      "Customized approach",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
  },
  {
    id: "open-pore-treatment",
    title: "Open Pore Treatment",
    description:
      "A refining treatment that helps minimize the appearance of enlarged pores for smoother, clearer-looking skin.",
    benefits: [
      "Minimized pores",
      "Smoother skin",
      "Balanced oil production",
      "Cleaner complexion",
    ],
    image: "/images/placeholder.svg",
    category: "skin",
  },
  // Beauty Services
  {
    id: "permanent-eyebrows",
    title: "Permanent Eyebrows",
    description:
      "Expert eyebrow shaping and micro-pigmentation for naturally defined, long-lasting brows that frame your face beautifully.",
    benefits: [
      "Natural look",
      "Long-lasting results",
      "Time-saving",
      "Customized shape",
    ],
    image: "/images/placeholder.svg",
    category: "beauty",
  },
  {
    id: "permanent-lip-colour",
    title: "Permanent Lip Colour",
    description:
      "Subtle, natural-looking lip pigmentation that enhances your natural lip color and defines your smile.",
    benefits: [
      "Natural enhancement",
      "Symmetrical lips",
      "Long-lasting",
      "Saves makeup time",
    ],
    image: "/images/placeholder.svg",
    category: "beauty",
  },
  {
    id: "beauty-consultation",
    title: "Beauty Consultation",
    description:
      "A one-on-one consultation to understand your skin, discuss your goals, and recommend the perfect treatment plan for you.",
    benefits: [
      "Personalized advice",
      "Custom treatment plan",
      "Expert guidance",
      "Skin analysis",
    ],
    image: "/images/placeholder.svg",
    category: "beauty",
  },
  // Training Services
  {
    id: "self-grooming",
    title: "Self Grooming Sessions",
    description:
      "Learn essential self-grooming techniques to enhance your daily beauty routine with professional tips and tricks.",
    benefits: [
      "Practical skills",
      "Confidence building",
      "Professional tips",
      "Hands-on learning",
    ],
    image: "/images/placeholder.svg",
    category: "training",
  },
  {
    id: "beauty-academy",
    title: "Beauty Academy Programs",
    description:
      "Comprehensive beauty training programs for aspiring professionals looking to build a career in the beauty industry.",
    benefits: [
      "Certified training",
      "Industry skills",
      "Career guidance",
      "Hands-on practice",
    ],
    image: "/images/placeholder.svg",
    category: "training",
  },
  {
    id: "confidence-development",
    title: "Confidence Development",
    description:
      "Transformative sessions that combine beauty and personal development to help you feel confident from the inside out.",
    benefits: [
      "Inner confidence",
      "Self-esteem boost",
      "Personal growth",
      "Positive mindset",
    ],
    image: "/images/placeholder.svg",
    category: "training",
  },
];

export const serviceCategories = [
  {
    id: "skin",
    title: "Skin Treatments",
    description: "Advanced skincare solutions for every concern.",
  },
  {
    id: "beauty",
    title: "Beauty Services",
    description: "Professional beauty enhancements that last.",
  },
  {
    id: "training",
    title: "Training & Academy",
    description: "Learn the art of beauty with expert guidance.",
  },
];
