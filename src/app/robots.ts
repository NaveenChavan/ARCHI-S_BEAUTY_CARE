import { MetadataRoute } from "next";
import { seoDefaults } from "@/constants/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seoDefaults.url}/sitemap.xml`,
  };
}
