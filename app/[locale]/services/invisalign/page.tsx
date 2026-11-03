import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";
import ServiceJsonLd from "../../components/ServiceJsonLd";

const BOOK_APPOINTMENT_URL = "https://patientviewer.com/?RSID=3437333638&CID=30&C=1359&TCP=.1a3678";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "invisalign" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://dallassmilesco.com/${locale}/services/invisalign`,
      languages: {
        en: "https://dallassmilesco.com/en/services/invisalign",
        es: "https://dallassmilesco.com/es/services/invisalign",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://dallassmilesco.com/${locale}/services/invisalign`,
      siteName: "Dallas Smiles Dental & Orthodontics",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
      images: [
        {
          url: "https://dallassmilesco.com/invisalignhero.jpg",
          width: 1200,
          height: 630,
          alt: t("hero.title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: ["https://dallassmilesco.com/invisalignhero.jpg"],
    },
  };
}

export default async function InvisalignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "invisalign" });

  const faqs = [
    {
      question: locale === "es" ? "¿Cómo funciona Invisalign?" : "How does Invisalign work?",
      answer: locale === "es"
        ? "Invisalign utiliza una serie de alineadores transparentes hechos a medida que aplican fuerzas suaves y continuas para mover gradualmente los dientes a su posición ideal."
        : "Invisalign uses a series of custom-made, clear plastic aligners that apply gentle, continuous pressure to guide teeth gradually into their ideal alignment.",
    },
    {
      question: locale === "es" ? "¿Cuántas horas al día debo usar los alineadores?" : "How many hours a day must I wear my aligners?",
      answer: locale === "es"
        ? "Se deben usar entre 20 y 22 horas al día, retirándolos únicamente para comer, cepillarte y pasar el hilo dental."
        : "You should wear your aligners for 20 to 22 hours per day, removing them only to eat, drink anything besides water, brush, and floss.",
    },
    {
      question: locale === "es" ? "¿Cuánto dura el tratamiento con Invisalign?" : "How long does Invisalign treatment take?",
      answer: locale === "es"
        ? "La mayoría de los tratamientos duran entre 6 y 18 meses, dependiendo de la complejidad y de la constancia en el uso de los alineadores."
        : "Average treatment duration is between 6 and 18 months, depending on the complexity of crowding or spacing and patient compliance.",
    },
    {
      question: locale === "es" ? "¿Es doloroso el tratamiento con Invisalign?" : "Is Invisalign treatment painful?",
      answer: locale === "es"
        ? "Invisalign es mucho más cómodo que los brackets tradicionales, ya que no tiene alambres metálicos ni piezas que rocen la boca. Solo se siente una ligera presión los primeros días con cada nuevo juego de alineadores."
        : "Invisalign is significantly more comfortable than metal braces since there are no metal wires or brackets to irritate cheeks. You may feel gentle pressure for the first 1-2 days of each new tray.",
    },
    {
      question: locale === "es" ? "¿Aceptan planes de pago para Invisalign?" : "Do you offer financing for Invisalign in Dallas?",
      answer: locale === "es"
        ? "¡Sí! Ofrecemos opciones de pago mensual a través de Cherry Financing con opciones al 0% de interés y verificación de beneficios de ortodoncia de tu seguro PPO."
        : "Yes! We partner with Cherry Financing to offer flexible monthly payment plans, including 0% APR promotional options, and verify eligible orthodontic benefits through your dental PPO insurance.",
    },
  ];

  const url = `https://dallassmilesco.com/${locale}/services/invisalign`;
  const procedureName = "Invisalign® Clear Aligners in Dallas, TX";

  return (
    <div className="w-full max-w-full bg-white overflow-x-hidden">
      <ServiceJsonLd
        procedureName={procedureName}
        description={t("hero.p1")}
        url={url}
        locale={locale}
        faqs={faqs}
      />

      {/* ================= HERO ================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/invisalignhero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#f1f6fd]/40 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#0A2540] text-sky-200 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Certified Invisalign® Provider in Dallas, TX
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            {t("hero.title")}
          </h1>

          <p className="text-gray-900 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-6">
            {t("hero.p1")}
          </p>

          <p className="text-gray-800 text-base md:text-lg max-w-3xl mx-auto mb-8">
            {t("hero.p2")}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={BOOK_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:scale-105"
            >
              {t("hero.cta")}
            </a>
            <a
              href="tel:+19724845400"
              className="bg-[#0A2540] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#153655] transition"
            >
              (972) 484-5400
            </a>
          </div>
        </div>
      </section>

      {/* ================= DOCTOR ================= */}
      <section className="pt-16 pb-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/profilepic.jpeg"
              alt="Dr. Sandeep Bariki - Dallas Invisalign Provider"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
              Experienced Dallas Orthodontic Care
            </span>
            <h2 className="text-3xl font-semibold text-gray-900 mt-2 mb-4">
              {t("doctor.title")}
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {t("doctor.p1")}
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              {t("doctor.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      <section className="bg-white pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] mb-4">
            {t("conditions.title")}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
            {t("conditions.subtitle")}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["c1", "c2", "c3", "c4", "c5", "c6"].map((key) => (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 hover:shadow-xl transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center mb-3">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-[#0A2540]">
                  {t(`conditions.${key}.title`)}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {t(`conditions.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-12 text-base md:text-lg">
            {t("conditions.bottom")}
          </p>
        </div>
      </section>

      {/* ================= KIDS & TEENS ================= */}
      <section className="pt-16 pb-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] mb-6">
              {t("kids.title")}
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed text-base md:text-lg">{t("kids.p1")}</p>
            <p className="mb-4 text-gray-700 leading-relaxed text-base md:text-lg">{t("kids.p2")}</p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{t("kids.p3")}</p>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/teenagers1.png"
              alt="Invisalign for teenagers"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ================= BRACES ALTERNATIVE ================= */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#0A2540] mb-4">
              {t("braces.title")}
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed">{t("braces.p1")}</p>
            <p className="mb-6 text-gray-700 leading-relaxed">{t("braces.p2")}</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-800">
                <span className="text-blue-600 font-bold">✔</span> {t("braces.b1")}
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="text-blue-600 font-bold">✔</span> {t("braces.b2")}
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="text-blue-600 font-bold">✔</span> {t("braces.b3")}
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="text-blue-600 font-bold">✔</span> {t("braces.b4")}
              </li>
            </ul>

            <Link
              href={`/${locale}/services/braces`}
              className="inline-block bg-[#0A2540] hover:bg-[#163a63] text-white px-8 py-3.5 rounded-full font-semibold transition"
            >
              {t("braces.cta")}
            </Link>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/dentalbraces11.jpg"
              alt="Orthodontic braces"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-[#f1f6fd] pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-12">
            {t("benefits.title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["b1", "b2", "b3", "b4", "b5", "b6", "b7"].map((key) => (
              <div key={key} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-semibold text-[#0A2540] mb-2 text-lg">
                  {t(`benefits.${key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`benefits.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="pt-16 pb-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
          {t("trust.title")}
        </h2>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">{t("trust.p1")}</p>
        <p className="text-gray-700 text-lg leading-relaxed">{t("trust.p2")}</p>
      </section>

      {/* ================= PAYMENT & FINANCING ================= */}
      <section className="pt-16 pb-20 bg-[#f1f6fd]">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">{t("payment.title")}</h2>
            <p className="mb-4 text-gray-700 leading-relaxed text-base md:text-lg">{t("payment.p1")}</p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{t("payment.p2")}</p>
          </div>

          <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/payment.png"
              alt="Flexible payment plans"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ================= CHERRY FINANCING ================= */}
      <section className="pt-16 pb-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 items-center">
          <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="/cherry2.png"
              alt="Cherry Financing partner"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">{t("cherry.title")}</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">{t("cherry.p1")}</p>

            <ul className="space-y-2.5 mb-6 text-gray-800">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✔</span> {t("cherry.b1")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✔</span> {t("cherry.b2")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✔</span> {t("cherry.b3")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✔</span> {t("cherry.b4")}
              </li>
            </ul>

            <p className="mb-6 text-gray-700 leading-relaxed">{t("cherry.p2")}</p>

            <a
              href="https://pay.withcherry.com/dallas-smiles-dental-orthodontics?utm_source=practice&m=78410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition shadow-md"
            >
              {t("cherry.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQS SECTION ================= */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-10">
            {locale === "es" ? "Preguntas Frecuentes sobre Invisalign" : "Invisalign Frequently Asked Questions"}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
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
      </section>

      {/* ================= FINAL CTA & SIDEBAR ================= */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("final.title")}</h2>
          <p className="mb-4 text-white/90 text-lg leading-relaxed">{t("final.p1")}</p>
          <p className="mb-8 text-white/90 text-lg leading-relaxed">{t("final.p2")}</p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={BOOK_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-400 hover:bg-sky-300 text-[#0A2540] px-8 py-4 rounded-full font-bold shadow-lg transition hover:scale-105"
            >
              {t("final.cta")}
            </a>

            <a
              href="tel:+19724845400"
              className="border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-full font-semibold transition"
            >
              (972) 484-5400
            </a>
          </div>
        </div>
      </section>

      {/* ================= SIDEBAR ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <MoreServicesSidebar title={locale === "es" ? "Más Servicios Dentales" : "More Dental Services"} />
        </div>
      </section>
    </div>
  );
}