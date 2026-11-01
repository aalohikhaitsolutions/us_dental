import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DentalServiceLayout from "../../components/DentalServiceLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "crowns" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://dallassmilesco.com/${locale}/services/crowns`,
      languages: {
        en: "https://dallassmilesco.com/en/services/crowns",
        es: "https://dallassmilesco.com/es/services/crowns",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://dallassmilesco.com/${locale}/services/crowns`,
      siteName: "Dallas Smiles Dental & Orthodontics",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [
        {
          url: "https://dallassmilesco.com/services/porcelain-crown-bridge.jpg",
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
      images: ["https://dallassmilesco.com/services/porcelain-crown-bridge.jpg"],
    },
  };
}

export default async function CrownsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DentalServiceLayout
      namespace="crowns"
      slug="crowns"
      locale={locale}
      heroImage="/services/porcelain-crown-bridge.jpg"
      whatImage="/download-1.jpeg"
      processImage="/services/dental-chair-clinic.jpg"
      heroImageAlt="Custom porcelain and zirconia dental crowns in Dallas"
    />
  );
}