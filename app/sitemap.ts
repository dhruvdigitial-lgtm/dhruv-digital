import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dhruvdigital.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://dhruvdigital.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://dhruvdigital.vercel.app/government",
      lastModified: new Date(),
    },
    {
      url: "https://dhruvdigital.vercel.app/resume",
      lastModified: new Date(),
    },
    {
      url: "https://dhruvdigital.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}