"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";

export default function ImplantsPage() {
  const t = useTranslations("implants");
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "es" ? "es" : "en";
  const localePrefix = locale === "es" ? "/es" : "/en";
  const benefits = ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"];
  const solutions = ["single", "bridge", "denture", "fullArch"];
  const processSteps = ["step1", "step2", "step3", "step4", "step5"];
  const candidatePoints = ["l1", "l2", "l3", "l4", "l5"];
  const faqs = ["q1", "q2", "q3", "q4", "q5"];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-[#0A2540] text-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_.95fr] md:px-10">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-200"><span className="h-2 w-2 rounded-full bg-sky-300" />
              {t("hero.tag")}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              {t("hero.title1")} <span className="block text-sky-300">{t("hero.title2")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              {t("hero.desc")}
            </p>
            <Link href={`${localePrefix}/#contact`} className="mt-8 inline-flex items-center gap-3 rounded-full bg-sky-300 px-7 py-3.5 font-bold text-[#0A2540] transition hover:bg-white"><FaCalendarCheck /> {locale === "es" ? "Programa una consulta" : "Schedule a consultation"}</Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white/10 shadow-2xl">
            <Image
              src="/hero3.jpeg"
              alt={t("hero.imageAlt")}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-blue-100 bg-[#f1f6fd] py-7"><div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-3 md:px-10">{["what.title", "benefits.title", "process.title"].map((key) => <div key={key} className="flex items-center gap-3 text-sm font-semibold text-[#0A2540]"><FaCheckCircle className="shrink-0 text-blue-600" /> {t(key)}</div>)}</div></section>

      {/* ================= WHAT ARE IMPLANTS ================= */}
      <section className="py-20 bg-[#f1f6fd] md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              {t("what.tag")}
            </p>
            <h2 className="text-3xl font-bold text-[#0A2540] md:text-5xl">
              {t("what.title")}
            </h2>
            <p className="mt-6 text-gray-700 leading-8 max-w-2xl">
              {t("what.desc")}
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/hero2.jpeg"
              alt={t("what.imageAlt")}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 bg-white md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("benefits.tag")}</p>
          <h2 className="text-3xl font-bold text-[#0A2540] md:text-5xl">{t("benefits.title")}</h2>
          <p className="mt-4 text-gray-700 leading-8 max-w-3xl">{t("benefits.desc")}</p>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((key) => <li key={key} className="flex gap-3 rounded-2xl border border-blue-100 bg-[#f1f6fd] p-5 text-gray-700"><FaCheckCircle className="mt-1 shrink-0 text-blue-600" />{t(`benefits.${key}`)}</li>)}
          </ul>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-[#f1f6fd]"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center"><div><span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">{t("whyChoose.tag")}</span><h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">{t("whyChoose.title")}</h2><p className="mt-6 text-gray-700 leading-8">{t("whyChoose.desc")}</p><h3 className="mt-8 text-xl font-semibold text-[#0A2540]">{t("whyChoose.partnerTitle")}</h3><p className="mt-3 text-gray-700 leading-8">{t("whyChoose.partnerDesc")}</p><h3 className="mt-8 text-xl font-semibold text-[#0A2540]">{t("whyChoose.providerTitle")}</h3><p className="mt-3 text-gray-700 leading-8">{t("whyChoose.providerDesc")}</p><p className="mt-4 text-gray-700 leading-8">{t("whyChoose.focus")}</p><ul className="mt-8 space-y-4 text-gray-700">{benefits.slice(0, 7).map((key) => <li key={key} className="flex gap-3"><span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-semibold">&#10003;</span>{t(`whyChoose.${key}`)}</li>)}</ul></div><div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl"><Image src="/dentist_image.jpg" alt={t("whyChoose.imageAlt")} fill className="object-cover" /></div></div></section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6"><span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">{t("solutions.tag")}</span><h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">{t("solutions.title")}</h2><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">{solutions.map((key) => <article key={key} className="border border-slate-200 p-6 rounded-2xl"><h3 className="text-xl font-semibold text-[#0A2540]">{t(`solutions.${key}.title`)}</h3><p className="mt-3 text-gray-600 leading-7">{t(`solutions.${key}.desc`)}</p></article>)}</div></div></section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-[#f1f6fd]"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start"><div><span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">{t("process.tag")}</span><h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">{t("process.title")}</h2><ol className="mt-10 space-y-6">{processSteps.map((key, index) => <li key={key} className="flex gap-4"><span className="h-9 w-9 shrink-0 rounded-full bg-[#0A2540] text-white grid place-items-center font-semibold">{index + 1}</span><div><h3 className="font-semibold text-[#0A2540]">{t(`process.${key}.title`)}</h3><p className="mt-1 text-gray-600 leading-7">{t(`process.${key}.desc`)}</p></div></li>)}</ol></div><div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg"><Image src="/download-1.jpeg" alt={t("process.imageAlt")} fill className="object-cover" /></div></div></section>

      {/* ================= CANDIDACY + TECHNOLOGY ================= */}
      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8"><div className="rounded-3xl bg-[#0A2540] p-8 text-white"><span className="text-sky-200 text-sm">{t("candidate.tag")}</span><h2 className="mt-3 text-3xl font-semibold">{t("candidate.title")}</h2><p className="mt-4 text-white/80 leading-7">{t("candidate.desc")}</p><ul className="mt-8 space-y-3">{candidatePoints.map((key) => <li key={key}>&#10003; {t(`candidate.${key}`)}</li>)}</ul></div><div className="rounded-3xl border border-slate-200 p-8"><span className="text-sky-700 text-sm">{t("technology.tag")}</span><h2 className="mt-3 text-3xl font-semibold text-[#0A2540]">{t("technology.title")}</h2><p className="mt-4 text-gray-600 leading-8">{t("technology.desc")}</p></div></div></section>

      {/* ================= AFFORDABILITY ================= */}
      <section className="py-20 bg-[#f1f6fd]"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8"><div><span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">{t("affordability.tag")}</span><h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">{t("affordability.title")}</h2><p className="mt-4 text-gray-700 leading-8">{t("affordability.desc")}</p></div><div className="bg-white rounded-3xl p-8 shadow-sm"><h3 className="text-xl font-semibold text-[#0A2540]">{t("affordability.insuranceTitle")}</h3><p className="mt-3 text-gray-600 leading-7">{t("affordability.insuranceDesc")}</p><h3 className="mt-7 text-xl font-semibold text-[#0A2540]">{t("affordability.financingTitle")}</h3><p className="mt-3 text-gray-600 leading-7">{t("affordability.financingDesc")}</p></div></div></section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white"><div className="max-w-4xl mx-auto px-6"><span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">{t("faq.tag")}</span><h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">{t("faq.title")}</h2><div className="mt-8 divide-y divide-slate-200">{faqs.map((key) => <details key={key} className="py-5"><summary className="cursor-pointer font-semibold text-[#0A2540]">{t(`faq.${key}`)}</summary><p className="mt-3 text-gray-600 leading-7">{t(`faq.${key.replace("q", "a")}`)}</p></details>)}</div></div></section>

      {/* ================= CONSULTATION ================= */}
      <section className="py-20 bg-[#0A2540] text-white"><div className="max-w-5xl mx-auto px-6"><div className="text-center"><span className="text-sky-200 text-sm">{t("cta.tag")}</span><h2 className="mt-3 text-3xl md:text-4xl font-semibold">{t("cta.title")}</h2><p className="mt-5 text-white/80 leading-8">{t("cta.desc")}</p><p className="mt-4 text-white/80 leading-8">{t("cta.body")}</p></div><div className="mt-10 rounded-2xl bg-white/10 p-6"><h3 className="text-xl font-semibold">{t("cta.title")}</h3><ul className="mt-5 grid sm:grid-cols-2 gap-3 text-white/90">{["1", "2", "3", "4", "5", "6", "7", "8"].map((key) => <li key={key}>&#10003; {t(`cta.items.${key}`)}</li>)}</ul></div><p className="mt-8 text-center font-medium text-sky-200">{t("cta.action")}</p></div></section>

      {/* ================= SIDEBAR ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <MoreServicesSidebar title={t("sidebar.title")} />
        </div>
      </section>
    </>
  );
}
