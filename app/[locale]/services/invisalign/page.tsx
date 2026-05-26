"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function InvisalignPage() {
  const router = useRouter();
  const t = useTranslations("invisalign");

  return (
    <div className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/invisalignhero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#f1f6fd]/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            {t("hero.title")}
          </h1>

          <p className="text-black text-lg max-w-3xl mx-auto mb-6">
            {t("hero.p1")}
          </p>

          <p className="text-black text-lg max-w-3xl mx-auto mb-8">
            {t("hero.p2")}
          </p>

          <button
            onClick={() => router.push("/#contact")}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {t("hero.cta")}
          </button>
        </div>
      </section>

      {/* ================= DOCTOR ================= */}
      <section className="pt-10 pb-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image src="/kids.png" alt="" fill className="object-cover"/>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {t("doctor.title")}
            </h2>

            <p className="text-gray-600 mb-6">
              {t("doctor.p1")}
            </p>

            <p className="text-gray-600">
              {t("doctor.p2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      <section className="bg-white pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] mb-4">
            {t("conditions.title")}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            {t("conditions.subtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {["c1","c2","c3","c4","c5","c6"].map((key)=>(
              <div key={key} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
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
      <section className="pt-10 pb-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {t("kids.title")}
            </h2>

            <p className="mb-4">{t("kids.p1")}</p>
            <p className="mb-4">{t("kids.p2")}</p>
            <p>{t("kids.p3")}</p>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image src="/teenagers1.png" alt="" fill className="object-cover"/>
          </div>

        </div>
      </section>

      {/* ================= BRACES ================= */}
      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {t("braces.title")}
            </h2>

            <p className="mb-6">{t("braces.p1")}</p>
            <p className="mb-6">{t("braces.p2")}</p>

            <ul className="space-y-3 mb-6">
              <li>✔ {t("braces.b1")}</li>
              <li>✔ {t("braces.b2")}</li>
              <li>✔ {t("braces.b3")}</li>
              <li>✔ {t("braces.b4")}</li>
            </ul>

            <button className="bg-[#0A2540] text-white px-6 py-3 rounded-full">
              {t("braces.cta")}
            </button>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image src="/dentalbraces11.jpg" alt="" fill className="object-cover"/>
          </div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-[#f1f6fd] pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl text-center mb-12">
            {t("benefits.title")}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["b1","b2","b3","b4","b5","b6","b7"].map((key)=>(
              <div key={key} className="bg-white p-6 rounded-2xl shadow text-center">
                <h3 className="font-semibold mb-2">
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
      <section className="pt-10 pb-20 text-center">
        <h2 className="text-3xl mb-6">{t("trust.title")}</h2>
        <p className="mb-4">{t("trust.p1")}</p>
        <p>{t("trust.p2")}</p>
      </section>

      {/* ================= PAYMENT ================= */}
      <section className="pt-10 pb-20 bg-[#f1f6fd]">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

          <div>
            <h2 className="text-3xl mb-4">{t("payment.title")}</h2>
            <p className="mb-4">{t("payment.p1")}</p>
            <p>{t("payment.p2")}</p>
          </div>

          <div className="relative h-[350px] rounded-xl overflow-hidden">
            <Image src="/payment.png" alt="" fill className="object-cover"/>
          </div>

        </div>
      </section>

      {/* ================= CHERRY ================= */}
      <section className="pt-10 pb-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

          <div className="relative h-[350px] rounded-xl overflow-hidden">
            <Image src="/cherry2.png" alt="" fill className="object-cover"/>
          </div>

          <div>
            <h2 className="text-3xl mb-4">{t("cherry.title")}</h2>
            <p className="mb-4">{t("cherry.p1")}</p>

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
              className="bg-blue-600 text-white px-6 py-3 rounded-full"
            >
              {t("cherry.cta")}
            </a>
          </div>

        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section className="bg-[#f1f6fd] pt-10 pb-20 text-center">
        <h2 className="text-3xl mb-6">{t("final.title")}</h2>
        <p className="mb-4">{t("final.p1")}</p>
        <p className="mb-6">{t("final.p2")}</p>

        <button
          onClick={() => router.push("/#contact")}
          className="bg-blue-600 text-white px-8 py-3 rounded-full"
        >
          {t("final.cta")}
        </button>
      </section>

    </div>
  );
}