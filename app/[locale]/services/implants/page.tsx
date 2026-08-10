"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";

export default function ImplantsPage() {
  const t = useTranslations("implants");
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "es" ? "es" : "en";
  const localePrefix = locale === "es" ? "/es" : "/en";
  const getServiceHref = (slug: string) => `${localePrefix}/services/${slug}`;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              {t("hero.tag")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("hero.title1")} <br />
              <span className="text-sky-300">{t("hero.title2")}</span>
            </h1>
            <p className="mt-6 text-white/90 max-w-2xl leading-8">
              {t("hero.desc")}
            </p>
          </div>

          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero3.jpeg"
              alt="Dental Implants"
              fill
              className="rounded-3xl shadow-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= AFFORDABLE OPTIONS ================= */}
      <section className="py-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              {t("intro.tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">
              {t("intro.title")}
            </h2>
            <p className="mt-6 text-gray-700 leading-8 max-w-2xl">
              {t("intro.desc")}
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
                {t("intro.l1")}
              </li>
              <li className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
                {t("intro.l2")}
              </li>
              <li className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
                {t("intro.l3")}
              </li>
              <li className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
                {t("intro.l4")}
              </li>
            </ul>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/hero4.jpeg"
              alt="Implant financing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= INSURANCE + FINANCING ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              {t("insurance.tag")}
            </span>
            <h3 className="text-2xl font-semibold text-[#0A2540]">{t("insurance.title")}</h3>
            <p className="mt-4 text-gray-700 leading-8">{t("insurance.desc")}</p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ {t("insurance.l1")}</li>
              <li>✔ {t("insurance.l2")}</li>
              <li>✔ {t("insurance.l3")}</li>
              <li>✔ {t("insurance.l4")}</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              {t("financing.tag")}
            </span>
            <h3 className="text-2xl font-semibold text-[#0A2540]">{t("financing.title")}</h3>
            <p className="mt-4 text-gray-700 leading-8">{t("financing.desc")}</p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ {t("financing.l1")}</li>
              <li>✔ {t("financing.l2")}</li>
              <li>✔ {t("financing.l3")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              {t("whyChoose.tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">
              {t("whyChoose.title")}
            </h2>
            <p className="mt-6 text-gray-700 leading-8 max-w-2xl">{t("whyChoose.desc")}</p>
            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">✔</span>
                {t("whyChoose.l1")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">✔</span>
                {t("whyChoose.l2")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">✔</span>
                {t("whyChoose.l3")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">✔</span>
                {t("whyChoose.l4")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">✔</span>
                {t("whyChoose.l5")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">✔</span>
                {t("whyChoose.l6")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">✔</span>
                {t("whyChoose.l7")}
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
            <h3 className="text-2xl font-semibold text-[#0A2540]">{t("cta.title")}</h3>
            <p className="mt-4 text-gray-700 leading-8">{t("cta.desc")}</p>
          </div>
        </div>
      </section>

      {/* ================= SIDEBAR ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <MoreServicesSidebar title={t("sidebar.title")} />
        </div>
      </section>
    </>
  );
}
