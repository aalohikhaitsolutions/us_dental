"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";

export default function DeepCleaningPage() {
  const t = useTranslations("deepcleaning");
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "es" ? "es" : "en";
  const localePrefix = locale === "es" ? "/es" : "/en";
  const getServiceHref = (slug: string) => `${localePrefix}/services/${slug}`;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              {t("hero.tag")}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("hero.title1")} <br />
              <span className="text-sky-300">
                {t("hero.title2")}
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              {t("hero.desc")}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero2.jpeg"   // ✅ FIXED
              alt="Deep Teeth Cleaning"
              fill
              className="rounded-3xl shadow-xl object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/comprehensive-gum-care.jpg"
              alt="Comprehensive gum care and deep dental cleaning"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              {t("section2.tag")}
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              {t("section2.title")}
            </h2>

            <p className="mt-4 text-gray-600">
              {t("section2.desc")}
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ {t("section2.b1")}</li>
              <li>✔ {t("section2.b2")}</li>
              <li>✔ {t("section2.b3")}</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="md:col-span-2">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              {t("section3.tag")}
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              {t("section3.title")}
            </h2>

            <p className="mt-4 text-gray-600">
              {t("section3.desc")}
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>{t("section3.l1")}</li>
              <li>{t("section3.l2")}</li>
              <li>{t("section3.l3")}</li>
              <li>{t("section3.l4")}</li>
              <li>{t("section3.l5")}</li>
            </ul>
          </div>

          {/* Sidebar */}
          <MoreServicesSidebar title={t("sidebar.title")} />

        </div>
      </section>
    </>
  );
}