import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DentalServiceLayout from "../../components/DentalServiceLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "wisdom" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://dallassmilesco.com/${locale}/services/wisdom-teeth`,
      languages: {
        en: "https://dallassmilesco.com/en/services/wisdom-teeth",
        es: "https://dallassmilesco.com/es/services/wisdom-teeth",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://dallassmilesco.com/${locale}/services/wisdom-teeth`,
      siteName: "Dallas Smiles Dental & Orthodontics",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [
        {
          url: "https://dallassmilesco.com/services/dental-instruments.jpg",
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
      images: ["https://dallassmilesco.com/services/dental-instruments.jpg"],
    },
  };
}

export default async function WisdomTeethPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DentalServiceLayout
      namespace="wisdom"
      slug="wisdom-teeth"
      locale={locale}
      heroImage="/services/dental-instruments.jpg"
      whatImage="/services/sterile-care.jpg"
      processImage="/services/extraction-instruments.jpg"
    />
  );
}