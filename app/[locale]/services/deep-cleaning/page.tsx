"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { FaArrowRight, FaCalendarCheck, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";

export default function DeepCleaningPage() {
  const t = useTranslations("deepcleaning");
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "es" ? "es" : "en";
  const localePrefix = locale === "es" ? "/es" : "/en";
  return (
    <main className="overflow-hidden bg-[#fbfcfa] text-slate-700">
      <section className="relative bg-[#0A2540] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:px-10 md:py-24">
          <div className="relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-200"><span className="h-2 w-2 rounded-full bg-sky-300" /> {t("hero.tag")}</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">{t("hero.title")}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{t("hero.desc")}</p>
            <div className="mt-8 flex flex-wrap gap-4"><Link href={`${localePrefix}/#contact`} className="inline-flex items-center gap-3 rounded-full bg-sky-300 px-6 py-3.5 font-bold text-[#0A2540] transition hover:bg-white"><FaCalendarCheck /> {t("hero.cta")}</Link><a href="tel:+19724845400" className="inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-3.5 font-semibold transition hover:bg-white/10"><FaPhoneAlt /> {t("hero.call")}</a></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white/10 shadow-2xl"><Image src="/comprehensive-gum-care.jpg" alt={t("hero.imageAlt")} fill className="object-cover" priority /><div className="absolute bottom-5 left-5 rounded-2xl bg-white px-5 py-4 text-[#0A2540] shadow-lg"><p className="text-xs font-bold uppercase tracking-widest text-blue-600">{t("hero.badge")}</p><p className="mt-1 font-semibold">{t("hero.badgeText")}</p></div></div>
        </div>
      </section>

      <section className="border-b border-blue-100 bg-[#f1f6fd]"><div className="mx-auto grid max-w-7xl gap-5 px-6 py-7 sm:grid-cols-3 md:px-10">{["hero.stat1", "hero.stat2", "hero.stat3"].map((key) => <div key={key} className="flex items-center gap-3 text-sm font-semibold text-[#0A2540]"><FaCheckCircle className="shrink-0 text-blue-600" /> {t(key)}</div>)}</div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:px-10 md:py-28"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("intro.tag")}</p><h2 className="max-w-2xl text-3xl font-bold leading-tight text-[#0A2540] md:text-5xl">{t("intro.title")}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t("intro.desc")}</p><div className="mt-8 rounded-2xl border-l-4 border-blue-400 bg-blue-50 p-6 text-slate-700">{t("intro.note")}</div></div><div className="rounded-[1.5rem] bg-[#0A2540] p-7 text-white shadow-xl md:p-9"><p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">{t("steps.tag")}</p><h2 className="mt-3 text-3xl font-bold">{t("steps.title")}</h2><p className="mt-4 leading-7 text-slate-200">{t("steps.desc")}</p><div className="mt-8 space-y-7">{["scaling", "planing"].map((step, index) => <div key={step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-300 font-bold text-[#0A2540]">{index + 1}</span><div><h3 className="font-bold">{t(`steps.${step}.title`)}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{t(`steps.${step}.desc`)}</p></div></div>)}</div></div></section>

      <section className="bg-[#f1f6fd] px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("signs.tag")}</p><h2 className="text-3xl font-bold text-[#0A2540] md:text-5xl">{t("signs.title")}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{t("signs.desc")}</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{["bleeding", "breath", "recession", "loose", "swollen"].map((item) => <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-blue-100"><FaCheckCircle className="text-blue-600" /><p className="mt-4 font-semibold leading-6 text-[#0A2540]">{t(`signs.items.${item}`)}</p></div>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[.85fr_1.15fr] md:px-10 md:py-28"><div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem]"><Image src="/deepcleaning.gif" alt={t("visit.imageAlt")} fill className="object-cover" /></div><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("visit.tag")}</p><h2 className="text-3xl font-bold text-[#0A2540] md:text-5xl">{t("visit.title")}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{t("visit.desc")}</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{["anesthesia", "tools", "visits", "antibiotics", "comfort"].map((item) => <li key={item} className="flex gap-3 leading-7"><FaCheckCircle className="mt-1 shrink-0 text-blue-600" />{t(`visit.items.${item}`)}</li>)}</ul></div></section>

      <section className="bg-[#0A2540] px-6 py-20 text-white md:px-10 md:py-24"><div className="mx-auto max-w-7xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-200">{t("benefits.tag")}</p><h2 className="max-w-3xl text-3xl font-bold md:text-5xl">{t("benefits.title")}</h2><div className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">{["stops", "reduces", "prevents", "eliminates", "supports"].map((item) => <div key={item} className="flex gap-3 border-t border-white/15 pt-5 text-slate-200"><FaCheckCircle className="mt-1 shrink-0 text-sky-300" />{t(`benefits.items.${item}`)}</div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"><div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("compare.tag")}</p><h2 className="text-3xl font-bold text-[#0A2540] md:text-5xl">{t("compare.title")}</h2><div className="mt-8 overflow-hidden rounded-2xl border border-blue-100"><div className="grid grid-cols-2 bg-[#0A2540] font-bold text-white"><div className="p-4">{t("compare.regular")}</div><div className="p-4">{t("compare.deep")}</div></div>{["area", "purpose", "anesthesia", "frequency"].map((row) => <div key={row} className="grid grid-cols-2 border-t border-blue-100 text-sm sm:text-base"><div className="p-4">{t(`compare.rows.${row}.regular`)}</div><div className="bg-[#f1f6fd] p-4 font-semibold text-[#0A2540]">{t(`compare.rows.${row}.deep`)}</div></div>)}</div></div><div className="rounded-[1.5rem] bg-blue-50 p-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("aftercare.tag")}</p><h2 className="mt-3 text-3xl font-bold text-[#0A2540]">{t("aftercare.title")}</h2><p className="mt-4 leading-7 text-slate-600">{t("aftercare.desc")}</p><ul className="mt-6 space-y-4">{["brush", "rinse", "avoid", "followup"].map((item) => <li key={item} className="flex gap-3"><FaCheckCircle className="mt-1 shrink-0 text-blue-600" />{t(`aftercare.items.${item}`)}</li>)}</ul></div></div></section>

      <section className="bg-[#f1f6fd] px-6 py-16 md:px-10"><div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("cta.tag")}</p><h2 className="text-3xl font-bold text-[#0A2540] md:text-4xl">{t("cta.title")}</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">{t("cta.desc")}</p></div><Link href={`${localePrefix}/#contact`} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0A2540] px-7 py-4 font-bold text-white transition hover:bg-blue-800">{t("cta.button")} <FaArrowRight /></Link></div></section>

      <section className="bg-white px-6 py-20 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_280px]"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t("early.tag")}</p><h2 className="text-3xl font-bold text-[#0A2540] md:text-4xl">{t("early.title")}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{t("early.desc")}</p></div><MoreServicesSidebar title={t("sidebar.title")} /></div></section>
    </main>
  );
}