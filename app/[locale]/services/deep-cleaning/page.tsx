import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DentalServiceLayout from "../../components/DentalServiceLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "deepcleaning" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://dallassmilesco.com/${locale}/services/deep-cleaning`,
      languages: {
        en: "https://dallassmilesco.com/en/services/deep-cleaning",
        es: "https://dallassmilesco.com/es/services/deep-cleaning",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://dallassmilesco.com/${locale}/services/deep-cleaning`,
      siteName: "Dallas Smiles Dental & Orthodontics",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [
        {
          url: "https://dallassmilesco.com/comprehensive-gum-care.jpg",
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
      images: ["https://dallassmilesco.com/comprehensive-gum-care.jpg"],
    },
  };
}

export default async function DeepCleaningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DentalServiceLayout
      namespace="deepcleaning"
      slug="deep-cleaning"
      locale={locale}
      heroImage="/comprehensive-gum-care.jpg"
      whatImage="/services/dental-exam.jpg"
      processImage="/dentist_image.jpg"
      heroImageAlt="Periodontal deep cleaning scaling and root planing in Dallas"
    />
  );
}