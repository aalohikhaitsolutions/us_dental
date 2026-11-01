import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DentalServiceLayout from "../../components/DentalServiceLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "extractions" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://dallassmilesco.com/${locale}/services/extractions`,
      languages: {
        en: "https://dallassmilesco.com/en/services/extractions",
        es: "https://dallassmilesco.com/es/services/extractions",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://dallassmilesco.com/${locale}/services/extractions`,
      siteName: "Dallas Smiles Dental & Orthodontics",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [
        {
          url: "https://dallassmilesco.com/services/extraction-instruments.jpg",
          width: 1200,
          height: 630,
          alt: t("hero.title1"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: ["https://dallassmilesco.com/services/extraction-instruments.jpg"],
    },
  };
}

export default async function ExtractionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DentalServiceLayout
      namespace="extractions"
      slug="extractions"
      locale={locale}
      heroImage="/services/extraction-instruments.jpg"
      whatImage="/download-2.jpeg"
      processImage="/services/dental-exam.jpg"
      heroImageAlt="Gentle tooth extractions and emergency dental care in Dallas"
    />
  );
}