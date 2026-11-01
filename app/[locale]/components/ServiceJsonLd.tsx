export interface ServiceJsonLdProps {
  procedureName: string;
  description: string;
  url: string;
  locale: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ServiceJsonLd({
  procedureName,
  description,
  url,
  locale,
  faqs = [],
}: ServiceJsonLdProps) {
  const dentalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://dallassmilesco.com/#dentist",
    name: "Dallas Smiles Dental & Orthodontics",
    alternateName: "Dallas Smiles",
    url: "https://dallassmilesco.com",
    logo: "https://dallassmilesco.com/dentallogo.png",
    image: "https://dallassmilesco.com/hero1.jpeg",
    telephone: "+1-972-484-5400",
    email: "info@dallassmilesco.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3234 Forest Lane",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75234",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9095,
      longitude: -96.8675,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Dr. Sandeep Bariki",
      jobTitle: "Doctor of Dental Surgery (DDS)",
    },
    sameAs: [
      "https://maps.app.goo.gl/c7LAa7PWotVtkvii7",
      "https://pay.withcherry.com/dallas-smiles-dental-orthodontics?utm_source=practice&m=78410",
    ],
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: procedureName,
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Mouth",
    description,
    followup: "Follow oral hygiene instructions and scheduled follow-up visits.",
    howPerformed: "Administered by a licensed Doctor of Dental Surgery with local anesthesia, advanced digital imaging, and patient-centered comfort protocols.",
    provider: {
      "@id": "https://dallassmilesco.com/#dentist",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      url,
    },
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: `https://dallassmilesco.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "es" ? "Servicios" : "Services",
        item: `https://dallassmilesco.com/${locale}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: procedureName,
        item: url,
      },
    ],
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalClinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
