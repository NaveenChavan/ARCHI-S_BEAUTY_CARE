export const seoDefaults = {
  siteName: "Archies Beauty Clinic",
  title: "Archies Beauty Clinic | Premium Beauty Clinic in Raichur",
  description:
    "Premium beauty clinic in Raichur offering Hydra Facial, Korean Glass Skin, Permanent Eyebrows, Skin Brightening & Beauty Academy. Book your appointment today.",
  keywords: [
    "Beauty Clinic in Raichur",
    "Hydra Facial in Raichur",
    "Permanent Eyebrows in Raichur",
    "Skin Brightening Treatment in Raichur",
    "Beauty Academy in Raichur",
    "Korean Glass Skin Raichur",
    "Beauty Parlour Raichur",
    "Skin Care Raichur",
    "Archies Beauty Clinic",
    "Beauty Treatments Raichur",
  ],
  url: "https://archiesbeautyclinic.com", // TODO: Update with actual domain
  locale: "en_IN",
  image: "/images/og-image.jpg", // TODO: Create Open Graph image
  twitterHandle: "@archiesbeautyclinic",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Archies Beauty Clinic",
  image: "https://archiesbeautyclinic.com/images/og-image.jpg", // TODO: Update
  "@id": "https://archiesbeautyclinic.com", // TODO: Update
  url: "https://archiesbeautyclinic.com", // TODO: Update
  telephone: "+91 97314 90728",
  email: "archuarchi2006@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raichur",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.2068, // TODO: Update with actual coordinates
    longitude: 77.3556, // TODO: Update with actual coordinates
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  priceRange: "₹₹",
  description:
    "Premium beauty clinic in Raichur offering advanced skin treatments, beauty services, and academy programs.",
};
