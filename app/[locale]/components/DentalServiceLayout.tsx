import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { PhoneIcon, CalendarDaysIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import MoreServicesSidebar from "./MoreServicesSidebar";
import ServiceJsonLd from "./ServiceJsonLd";

const BOOK_APPOINTMENT_URL = "https://patientviewer.com/?RSID=3437333638&CID=30&C=1359&TCP=.1a3678";

export interface DentalServiceLayoutProps {
  namespace: string;
  slug: string;
  locale: string;
  heroImage: string;
  whatImage?: string;
  processImage?: string;
  heroImageAlt?: string;
}

export default async function DentalServiceLayout({
  namespace,
  slug,
  locale,
  heroImage,
  whatImage = "/hero2.jpeg",
  processImage = "/hero3.jpeg",
  heroImageAlt,
}: DentalServiceLayoutProps) {
  const t = await getTranslations({ locale, namespace });
  const tCommon = await getTranslations({ locale, namespace: "navbar" });

  // Safe translation helper
  const safeT = (key: string, fallback = ""): string => {
    try {
      if (t.has(key)) {
        return t(key);
      }
      return fallback;
    } catch {
      return fallback;
    }
  };

  const benefitsKeys = ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"];
  const candidateKeys = ["l1", "l2", "l3", "l4", "l5"];
  const stepKeys = ["step1", "step2", "step3", "step4", "step5"];
  const faqKeys = ["q1", "q2", "q3", "q4", "q5"];

  const faqs = faqKeys
    .map((key) => {
      const question = safeT(`faq.${key}`);
      const answer = safeT(`faq.a${key.replace("q", "")}`);
      return question && answer ? { question, answer, key } : null;
    })
    .filter((item): item is { question: string; answer: string; key: string } => item !== null);

  const heroTitle1 = safeT("hero.title1", "Comprehensive Care");
  const heroTitle2 = safeT("hero.title2", "Dallas Smiles");
  const heroDesc = safeT(
    "hero.desc",
    "Compassionate, high-quality dental care tailored to your needs in Dallas, TX."
  );

  let ctaItems: string[] = [];
  try {
    if (t.has("cta.items")) {
      const raw = t.raw("cta.items");
      if (Array.isArray(raw)) {
        ctaItems = raw;
      }
    }
  } catch {
    ctaItems = [];
  }
  if (ctaItems.length === 0) {
    ctaItems = [
      locale === "es" ? "Examen y diagnóstico personalizado" : "Personalized comprehensive evaluation",
      locale === "es" ? "Radiografías digitales de alta resolución" : "High-definition digital X-rays",
      locale === "es" ? "Aceptamos la mayoría de seguros PPO" : "Major PPO dental insurance accepted",
      locale === "es" ? "Planes de financiamiento al 0% con Cherry" : "0% APR monthly financing with Cherry",
    ];
  }

  const url = `https://dallassmilesco.com/${locale}/services/${slug}`;
  const procedureName = `${heroTitle1} ${heroTitle2}`;

  return (
    <>
      <ServiceJsonLd
        procedureName={procedureName}
        description={heroDesc}
        url={url}
        locale={locale}
        faqs={faqs}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A2540] text-white py-16 md:py-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 text-sky-200 text-xs md:text-sm font-semibold tracking-wide uppercase">
              {t("hero.tag")}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t("hero.title1")} <br />
              <span className="text-sky-300">{t("hero.title2")}</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
              {t("hero.desc")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BOOK_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-[#0A2540] px-7 py-3.5 rounded-full font-bold shadow-lg transition duration-200 hover:scale-105"
              >
                <CalendarDaysIcon className="w-5 h-5 text-[#0A2540]" />
                {tCommon("book")}
              </a>

              <a
                href="tel:+19724845400"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full font-semibold transition duration-200"
              >
                <PhoneIcon className="w-5 h-5 text-sky-300" />
                <span>(972) 484-5400</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs md:text-sm text-sky-200">
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                {locale === "es" ? "Seguros PPO Aceptados" : "Major PPO Insurances Accepted"}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                {locale === "es" ? "0% Interés con Cherry" : "0% APR Financing with Cherry"}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                {locale === "es" ? "Citas de Emergencia" : "Same-Week & Emergency Care"}
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src={heroImage}
                alt={heroImageAlt || procedureName}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS IT ================= */}
      <section className="py-16 md:py-24 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-xs font-bold uppercase tracking-wider">
              {safeT("what.tag", "About Treatment")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight">
              {safeT("what.title", procedureName)}
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
              {safeT("what.desc", heroDesc)}
            </p>

            <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-sky-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A2540]">
                    {locale === "es" ? "Atención Personalizada en Dallas" : "Personalized Care in Dallas"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {locale === "es"
                      ? "Dr. Sandeep Bariki, DDS — Más de una década de experiencia clínica."
                      : "Dr. Sandeep Bariki, DDS — Over a decade of clinical excellence in Texas."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white">
            <Image
              src={whatImage}
              alt={safeT("what.title", procedureName)}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-xs font-bold uppercase tracking-wider">
              {safeT("benefits.tag", "Key Benefits")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
              {safeT("benefits.title", "Why Choose This Care")}
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              {safeT("benefits.desc", "Experience the difference of patient-focused dentistry:")}
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsKeys
              .map((key) => ({ key, text: safeT(`benefits.${key}`) }))
              .filter((item) => Boolean(item.text))
              .map((item, index) => (
                <div
                  key={item.key}
                  className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-bold text-xs mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ================= CANDIDATE & TECHNOLOGY ================= */}
      <section className="py-16 md:py-24 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10">
          {/* Candidate Card */}
          <div className="rounded-3xl bg-[#0A2540] text-white p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/20 text-sky-200 text-xs font-bold uppercase tracking-wider">
                {safeT("candidate.tag", "Candidacy")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                {safeT("candidate.title", "Is This Treatment Right For You?")}
              </h2>
              <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
                {safeT("candidate.desc", "Ideal for patients seeking to restore or improve oral health:")}
              </p>

              <ul className="mt-6 space-y-3.5">
                {candidateKeys
                  .map((key) => ({ key, text: safeT(`candidate.${key}`) }))
                  .filter((item) => Boolean(item.text))
                  .map((item) => (
                    <li key={item.key} className="flex items-start gap-3 text-sm md:text-base text-white/95">
                      <CheckCircleIcon className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href={BOOK_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-sky-400 hover:bg-sky-300 text-[#0A2540] py-3.5 rounded-xl font-bold transition shadow-md"
              >
                {locale === "es" ? "Agenda tu Examen de Diagnóstico" : "Schedule Your Diagnostic Exam"}
              </a>
            </div>
          </div>

          {/* Technology Card */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-sky-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                {safeT("technology.tag", "Modern Care")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mt-2">
                {safeT("technology.title", "Advanced Technology")}
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
                {safeT("technology.desc", "We use modern dental equipment and gentle techniques for optimal comfort.")}
              </p>
            </div>

            {/* Insurance & Financing highlights */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                <h4 className="font-semibold text-[#0A2540] text-sm md:text-base">
                  {safeT("affordability.insuranceTitle", locale === "es" ? "Seguro Dental Aceptado" : "Dental Insurance Accepted")}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {safeT("affordability.insuranceDesc", locale === "es" ? "Aceptamos la mayoría de pólizas PPO y tramitamos tus reclamos." : "We accept major PPO insurance plans and handle claims filing directly.")}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <h4 className="font-semibold text-emerald-900 text-sm md:text-base">
                  {safeT("affordability.financingTitle", locale === "es" ? "Financiamiento 0% con Cherry" : "0% Financing with Cherry")}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {safeT("affordability.financingDesc", locale === "es" ? "Pagos mensuales accesibles con aprobación inmediata." : "Manageable monthly payment plans with quick, friendly approvals.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STEP-BY-STEP PROCESS ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-xs font-bold uppercase tracking-wider">
              {safeT("process.tag", "Treatment Steps")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
              {safeT("process.title", "Step-by-Step Care")}
            </h2>

            <div className="mt-10 space-y-6">
              {stepKeys
                .map((key, index) => {
                  const title = safeT(`process.${key}.title`);
                  const desc = safeT(`process.${key}.desc`);
                  return title || desc ? { key, title, desc, num: index + 1 } : null;
                })
                .filter((step): step is { key: string; title: string; desc: string; num: number } => step !== null)
                .map((step) => (
                  <div key={step.key} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A2540] text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-gray-600 text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={processImage}
              alt={safeT("process.title", procedureName)}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ================= FAQS & SIDEBAR GRID ================= */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          {/* FAQ Accordion */}
          <div>
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-xs font-bold uppercase tracking-wider">
              {safeT("faq.tag", "Frequently Asked Questions")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-8">
              {safeT("faq.title", "Frequently Asked Questions")}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.key}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0A2540]">
                    <span>{faq.question}</span>
                    <span className="shrink-0 rounded-full bg-sky-100 p-1.5 text-sky-700 transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-600 text-sm md:text-base border-t border-slate-100 pt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* More Services Sidebar */}
          <div>
            <MoreServicesSidebar title={safeT("sidebar.title", "More Services")} />
          </div>
        </div>
      </section>

      {/* ================= CONSULTATION / CTA BANNER ================= */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/20 text-sky-200 text-xs font-bold uppercase tracking-wider">
            {safeT("cta.tag", "Schedule Today")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {safeT("cta.title", "Book Your Visit")}
          </h2>
          <p className="mt-5 text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {safeT("cta.desc", "Experience comfortable, family-friendly dental care in Dallas.")}
          </p>

          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {ctaItems.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-2.5 text-sm md:text-base text-white/95">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href={BOOK_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-400 hover:bg-sky-300 text-[#0A2540] px-8 py-4 rounded-full font-bold shadow-xl transition duration-200 hover:scale-105"
            >
              {tCommon("book")}
            </a>

            <a
              href="tel:+19724845400"
              className="border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-full font-semibold transition"
            >
              (972) 484-5400
            </a>
          </div>

          <p className="mt-6 text-xs md:text-sm text-sky-200">
            {t("cta.action")}
          </p>
        </div>
      </section>
    </>
  );
}
