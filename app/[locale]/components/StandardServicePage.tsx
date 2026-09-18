"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { FaArrowRight, FaCalendarCheck, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import MoreServicesSidebar from "./MoreServicesSidebar";

type StandardServicePageProps = {
  namespace: string;
  heroImage: string;
  contentImage: string;
  heroAlt: string;
  contentAlt: string;
  benefitKeys?: string[];
};

export default function StandardServicePage({
  namespace,
  heroImage,
  contentImage,
  heroAlt,
  contentAlt,
  benefitKeys = ["l1", "l2", "l3", "l4", "l5"],
}: StandardServicePageProps) {
  const t = useTranslations(namespace);
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "es" ? "es" : "en";
  const localePrefix = locale === "es" ? "/es" : "/en";

  return (
    <main className="overflow-hidden bg-white text-gray-700">
      <section className="relative bg-[#0A2540] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:px-10 md:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              {t("hero.tag")}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              {t("hero.title1")}
              <span className="block text-sky-300">{t("hero.title2")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">{t("hero.desc")}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${localePrefix}/#contact`} className="inline-flex items-center gap-3 rounded-full bg-sky-300 px-6 py-3.5 font-bold text-[#0A2540] transition hover:bg-white">
                <FaCalendarCheck />
                {locale === "es" ? "Programa una consulta" : "Schedule a consultation"}
              </Link>
              <a href="tel:+19724845400" className="inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                <FaPhoneAlt />
                {locale === "es" ? "Llama a nuestro equipo" : "Call our team"}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white/10 shadow-2xl">
            <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white px-5 py-4 text-[#0A2540] shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{t("hero.tag")}</p>
              <p className="mt-1 font-semibold">{locale === "es" ? "Atención personalizada" : "Personalized care"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-blue-100 bg-[#f1f6fd]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-7 sm:grid-cols-3 md:px-10">
          {["section2.b1", "section2.b2", "section2.b3"].map((key) => (
            <div key={key} className="flex items-center gap-3 text-sm font-semibold text-[#0A2540]">
              <FaCheckCircle className="shrink-0 text-blue-600" />
              {t(key)}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-10 md:py-28">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-xl">
          <Image src={contentImage} alt={contentAlt} fill className="object-cover" />
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("section2.tag")}</p>
          <h2 className="text-3xl font-bold leading-tight text-[#0A2540] md:text-5xl">{t("section2.title")}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{t("section2.desc")}</p>
          <ul className="mt-8 space-y-4">
            {["b1", "b2", "b3"].map((key) => (
              <li key={key} className="flex gap-3 leading-7">
                <FaCheckCircle className="mt-1 shrink-0 text-blue-600" />
                {t(`section2.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0A2540] px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-200">{t("section3.tag")}</p>
            <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">{t("section3.title")}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{t("section3.desc")}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {benefitKeys.map((key) => (
              <li key={key} className="flex gap-3 border-t border-white/15 pt-4 text-white/90">
                <FaCheckCircle className="mt-1 shrink-0 text-sky-300" />
                {t(`section3.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f1f6fd] px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{locale === "es" ? "Da el siguiente paso" : "Take the next step"}</p>
            <h2 className="text-3xl font-bold text-[#0A2540] md:text-4xl">{locale === "es" ? "Tu sonrisa merece atención experta" : "Your smile deserves expert care"}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-gray-600">{locale === "es" ? "Programa una consulta y recibe un plan personalizado para tus necesidades." : "Schedule a consultation and receive a plan tailored to your needs."}</p>
          </div>
          <Link href={`${localePrefix}/#contact`} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0A2540] px-7 py-4 font-bold text-white transition hover:bg-blue-800">
            {locale === "es" ? "Reservar cita" : "Book an appointment"}
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_280px]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{locale === "es" ? "Más razones para sonreír" : "More reasons to smile"}</p>
            <h2 className="text-3xl font-bold text-[#0A2540] md:text-4xl">{t("section3.title")}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{t("section3.desc")}</p>
          </div>
          <MoreServicesSidebar title={t("sidebar.title")} />
        </div>
      </section>
    </main>
  );
}
