import type { Metadata } from "next";
import { site } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
};

export function buildMetadata({ title, description }: MetadataInput): Metadata {
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    applicationName: site.name,
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
    alternates: {
      canonical: site.url,
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title,
      description,
      url: site.url,
      images: [
        {
          url: "/assets/hero-person.jpg",
          width: 1536,
          height: 1024,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/hero-person.jpg"],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description:
    "Independent creative studio shaping memorable identities, digital experiences and visual worlds for ambitious brands.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
} as const;
