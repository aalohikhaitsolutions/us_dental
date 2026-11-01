import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DentalServiceLayout from "../../components/DentalServiceLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gingivectomy" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://dallassmilesco.com/${locale}/services/gingivectomy`,
      languages: {
        en: "https://dallassmilesco.com/en/services/gingivectomy",
        es: "https://dallassmilesco.com/es/services/gingivectomy",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://dallassmilesco.com/${locale}/services/gingivectomy`,
      siteName: "Dallas Smiles Dental & Orthodontics",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [
        {
          url: "https://dallassmilesco.com/hero-5.png",
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
      images: ["https://dallassmilesco.com/hero-5.png"],
    },
  };
}

export default async function GingivectomyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DentalServiceLayout
      namespace="gingivectomy"
      slug="gingivectomy"
      locale={locale}
      heroImage="/hero-5.png"
      whatImage="/comprehensive-gum-care.jpg"
      processImage="/services/dental-chair-clinic.jpg"
      heroImageAlt="Aesthetic gingivectomy and laser gum contouring in Dallas"
    />
  );
}