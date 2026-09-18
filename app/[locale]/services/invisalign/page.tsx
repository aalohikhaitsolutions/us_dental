"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaArrowRight, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";

export default function InvisalignPage() {
  const router = useRouter();
  const t = useTranslations("invisalign");

  return (
    <main className="w-full overflow-hidden bg-white text-gray-700">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#0A2540] py-20 text-white md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/invisalignhero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A2540]/65"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_.95fr] md:px-10">
          <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Invisalign Provider</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("hero.title")}
          </h1>

          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-6 leading-8">
            {t("hero.p1")}
          </p>

          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8 leading-8">
            {t("hero.p2")}
          </p>

          <button onClick={() => router.push("/#contact")} className="inline-flex items-center gap-3 rounded-full bg-sky-300 px-7 py-3.5 font-semibold text-[#0A2540] transition hover:bg-white">
            <FaCalendarCheck />
            {t("hero.cta")}
          </button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white/10 shadow-2xl"><Image src="/invisalignhero.jpg" alt={t("hero.title")} fill className="object-cover" priority /></div>
        </div>
      </section>

      {/* ================= DOCTOR ================= */}
      <section className="border-b border-blue-100 bg-[#f1f6fd] py-7">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-3 md:px-10">
          {["doctor.title", "conditions.title", "benefits.title"].map((key) => <div key={key} className="flex items-center gap-3 text-sm font-semibold text-[#0A2540]"><FaCheckCircle className="shrink-0 text-blue-600" /> {t(key)}</div>)}
        </div>
      </section>

      <section className="pt-10 pb-20 bg-[#f1f6fd] md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image src="/kids.png" alt="" fill className="object-cover"/>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4 md:text-5xl">
              {t("doctor.title")}
            </h2>

            <p className="text-gray-600 mb-6 leading-8">
              {t("doctor.p1")}
            </p>

            <p className="text-gray-600 leading-8">
              {t("doctor.p2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] mb-4">
            {t("conditions.title")}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            {t("conditions.subtitle")}
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {["c1","c2","c3","c4","c5","c6"].map((key)=>(
              <div key={key} className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[#0A2540]">
                  {t(`conditions.${key}.title`)}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {t(`conditions.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-12">
            {t("conditions.bottom")}
          </p>

        </div>
      </section>

      {/* ================= KIDS ================= */}
      <section className="pt-10 pb-20 bg-[#f1f6fd] md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
              {t("kids.title")}
            </h2>

            <p className="mb-4 leading-8">{t("kids.p1")}</p>
            <p className="mb-4 leading-8">{t("kids.p2")}</p>
            <p className="leading-8">{t("kids.p3")}</p>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image src="/teenagers1.png" alt="" fill className="object-cover"/>
          </div>

        </div>
      </section>

      {/* ================= BRACES ================= */}
      <section className="pt-10 pb-20 bg-white md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4 md:text-5xl">
              {t("braces.title")}
            </h2>

            <p className="mb-6 leading-8">{t("braces.p1")}</p>
            <p className="mb-6 leading-8">{t("braces.p2")}</p>

            <ul className="space-y-3 mb-6">
              {["b1", "b2", "b3", "b4"].map((key) => <li key={key} className="flex gap-3"><FaCheckCircle className="mt-1 shrink-0 text-blue-600" />{t(`braces.${key}`)}</li>)}
            </ul>

            <button className="bg-[#0A2540] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
              {t("braces.cta")}
            </button>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image src="/dentalbraces11.jpg" alt="" fill className="object-cover"/>
          </div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-[#0A2540] pt-10 pb-20 text-white md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl text-center mb-12 md:text-5xl font-bold">
            {t("benefits.title")}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["b1","b2","b3","b4","b5","b6","b7"].map((key)=>(
              <div key={key} className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm text-center text-[#0A2540]">
                <h3 className="font-semibold mb-2 text-lg">
                  {t(`benefits.${key}.title`)}
                </h3>
                <p className="text-sm">
                  {t(`benefits.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="pt-10 pb-20 text-center md:py-28">
        <h2 className="text-3xl mb-6 font-bold text-[#0A2540] md:text-5xl">{t("trust.title")}</h2>
        <p className="mx-auto mb-4 max-w-3xl leading-8">{t("trust.p1")}</p>
        <p className="mx-auto max-w-3xl leading-8">{t("trust.p2")}</p>
      </section>

      {/* ================= PAYMENT ================= */}
      <section className="pt-10 pb-20 bg-[#f1f6fd] md:py-28">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

          <div>
            <h2 className="text-3xl mb-4 font-bold text-[#0A2540] md:text-5xl">{t("payment.title")}</h2>
            <p className="mb-4 leading-8">{t("payment.p1")}</p>
            <p className="leading-8">{t("payment.p2")}</p>
          </div>

          <div className="relative h-[350px] rounded-xl overflow-hidden">
            <Image src="/payment.png" alt="" fill className="object-cover"/>
          </div>

        </div>
      </section>

      {/* ================= CHERRY ================= */}
      <section className="pt-10 pb-20 bg-white md:py-28">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

          <div className="relative h-[350px] rounded-xl overflow-hidden">
            <Image src="/cherry2.png" alt="" fill className="object-cover"/>
          </div>

          <div>
            <h2 className="text-3xl mb-4 font-bold text-[#0A2540] md:text-5xl">{t("cherry.title")}</h2>
            <p className="mb-4 leading-8">{t("cherry.p1")}</p>

            <ul className="space-y-2 mb-4">
              <li>• {t("cherry.b1")}</li>
              <li>• {t("cherry.b2")}</li>
              <li>• {t("cherry.b3")}</li>
              <li>• {t("cherry.b4")}</li>
            </ul>

            <p className="mb-6">{t("cherry.p2")}</p>

            <a
              href="https://pay.withcherry.com/dallas-smiles-dental-orthodontics"
              target="_blank"
              className="bg-[#0A2540] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
            >
              {t("cherry.cta")}
            </a>
          </div>

        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section className="bg-[#f1f6fd] pt-10 pb-20 text-center md:py-24">
        <h2 className="text-3xl mb-6 font-bold text-[#0A2540] md:text-5xl">{t("final.title")}</h2>
        <p className="mx-auto mb-4 max-w-3xl leading-8">{t("final.p1")}</p>
        <p className="mx-auto mb-6 max-w-3xl leading-8">{t("final.p2")}</p>

        <button
          onClick={() => router.push("/#contact")}
          className="bg-[#0A2540] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition"
        >
          {t("final.cta")}
        </button>
      </section>

      <section className="bg-white px-6 py-20 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_280px]"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Ready to start?</p><h2 className="text-3xl font-bold text-[#0A2540] md:text-4xl">A straighter smile, planned around you</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">Our team will help you understand your options and choose a treatment path that fits your goals.</p><Link href="/#contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0A2540] px-7 py-4 font-bold text-white transition hover:bg-blue-800">Book a consultation <FaArrowRight /></Link></div><MoreServicesSidebar title="More Services" /></div></section>

    </main>
  );
}