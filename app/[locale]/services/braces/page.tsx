import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DentalServiceLayout from "../../components/DentalServiceLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "braces" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://dallassmilesco.com/${locale}/services/braces`,
      languages: {
        en: "https://dallassmilesco.com/en/services/braces",
        es: "https://dallassmilesco.com/es/services/braces",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://dallassmilesco.com/${locale}/services/braces`,
      siteName: "Dallas Smiles Dental & Orthodontics",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [
        {
          url: "https://dallassmilesco.com/dentalbraces11.jpg",
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
      images: ["https://dallassmilesco.com/dentalbraces11.jpg"],
    },
  };
}

export default async function BracesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DentalServiceLayout
      namespace="braces"
      slug="braces"
      locale={locale}
      heroImage="/dentalbraces11.jpg"
      whatImage="/hero4.jpeg"
      processImage="/hero1.jpeg"
      heroImageAlt="Orthodontic braces for teens and adults in Dallas"
    />
  );
}