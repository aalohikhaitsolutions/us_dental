"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutFounderPage() {
  const t = useTranslations("aboutFounder");

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              {t("badge")}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")}
            </h1>

            <p className="mt-6 text-white/90 max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[25/20]">
              <Image
                src="/profilepic.jpeg"
                alt="Dr. Sandeep Bariki"
                fill
                className="rounded-3xl shadow-xl object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-700">

          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>

          {/* Welcome */}
          <div className="bg-[#f1f6fd] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-[#0A2540] mb-4">
              {t("welcomeTitle")}
            </h2>

            <p className="mb-4">{t("w1")}</p>
            <p className="mb-4">{t("w2")}</p>
            <p className="mb-6">{t("w3")}</p>

            <p className="font-semibold">
              {t("sign")}<br />
              Dr. Sandeep Bariki
            </p>
          </div>

        </div>
      </section>
    </>
  );
}