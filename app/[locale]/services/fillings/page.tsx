"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";

export default function FillingsPage() {
  const t = useTranslations("fillings");
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "es" ? "es" : "en";
  const localePrefix = locale === "es" ? "/es" : "/en";
  const getServiceHref = (slug: string) => `${localePrefix}/services/${slug}`;

  return (
    <>
      <section className="bg-[#0A2540] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm"> {t("hero.tag")}</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("hero.title1")} <br />
              <span className="text-sky-300">
                {t("hero.title2")}
              </span>
            </h1>            
            <h2 className="mt-5 text-2xl font-semibold text-sky-200 md:text-3xl">Restore Your Smile with Strong, Natural-Looking Fillings</h2>
            <p className="mt-6 max-w-2xl leading-8 text-white/90">A cavity doesn&apos;t have to become a bigger dental problem. At Dallas Smiles Dental &amp; Orthodontics, we provide modern tooth-colored composite fillings that restore the strength, function, and appearance of your teeth while blending naturally with your smile. Our goal is simple: preserve as much healthy tooth structure as possible while giving you a comfortable, long-lasting result.</p>
            <p className="mt-5 max-w-2xl leading-8 text-white/90">Whether you&apos;ve noticed sensitivity, pain while chewing, or a visible dark spot on a tooth, early treatment can prevent decay from spreading deeper into the tooth and reduce the likelihood of needing more extensive treatment later.</p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/Dental Smile.png" alt="Happy patient smiling after dental care" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-[#f1f6fd] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="mb-4 inline-block rounded-full bg-sky-200 px-4 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#0A2540]">The natural choice</span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#0A2540] md:text-4xl">What Are Tooth-Colored Fillings?</h2>
              <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
                <Image src="/Fillings.png" alt="Before and after resin composite fillings" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="leading-8 text-gray-700">Resin based composite fillings are made from durable, tooth-colored resin that bonds directly to your natural tooth. Unlike traditional silver fillings, composite restorations are designed to match the shade of your existing teeth, making them virtually unnoticeable when you smile or speak.</p>
              <p className="mt-8 font-semibold text-[#0A2540]">Fillings may be recommended to:</p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {["Repair cavities caused by tooth decay", "Replace worn or leaking fillings", "Restore chipped or fractured teeth", "Protect weakened areas of a tooth", "Improve comfort when eating and drinking"].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-t border-sky-200 pt-3 text-gray-700"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0A2540] text-xs text-white">+</span>{item}</li>
                ))}
              </ul>
              <p className="mt-8 border-l-2 border-sky-500 pl-5 leading-8 text-gray-700">Every filling is carefully shaped and polished to help restore your natural bite and maintain a comfortable chewing experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-0">
            <article className="border-b border-slate-200 pb-10 md:border-b-0 md:border-r md:pr-12 md:pb-0">
              <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-[#0A2540] px-4 text-lg font-semibold text-white">01</span>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A2540] md:text-4xl">Our Approach to Treatment</h2>
              <p className="mt-6 leading-8 text-gray-700">We believe healthy tooth structure is valuable. Whenever possible, we remove only the damaged portion of the tooth while preserving healthy enamel and dentin. This philosophy helps maintain the long-term strength of your natural teeth.</p>
              <p className="mt-5 leading-8 text-gray-700">Before beginning treatment, we perform a thorough examination and use digital X-rays when needed to accurately diagnose the extent of decay. We discuss your treatment options, answer your questions, and ensure you understand every step before we begin.</p>
            </article>
            <article className="md:pl-12">
              <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-[#0A2540] px-4 text-lg font-semibold text-white">02</span>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A2540] md:text-4xl">Comfortable Dental Care</h2>
              <p className="mt-6 leading-8 text-gray-700">Many patients postpone treatment because they worry about discomfort. Our team focuses on making your visit as comfortable as possible.</p>
              <p className="mt-5 leading-8 text-gray-700">We use gentle techniques, effective local anesthesia when indicated, and take time to ensure you remain comfortable throughout your appointment. Most fillings can be completed in a single visit, allowing you to return to your normal routine the same day.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f6fd] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-sky-200 px-4 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#0A2540]">Know the signs</span>
            <h2 className="mt-3 text-3xl font-semibold text-[#0A2540] md:text-4xl">Signs You May Need a Filling</h2>
            <p className="mt-6 text-gray-700">You may benefit from a dental evaluation if you experience:</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Tooth sensitivity to hot, cold, or sweets", "Pain when biting or chewing", "A visible hole or dark spot on a tooth", "Food frequently getting trapped between teeth", "A chipped or broken tooth", "An old filling that feels loose or rough"].map((item, index) => (
              <li key={item} className="flex min-h-24 items-start gap-4 border border-sky-100 bg-white p-5 shadow-sm"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0A2540] text-sm font-semibold text-white">{String(index + 1).padStart(2, "0")}</span><span className="pt-1 text-gray-700">{item}</span></li>
            ))}
          </ul>
          <p className="mt-10 max-w-4xl border-l-2 border-sky-500 pl-5 leading-8 text-gray-700">Even if you don&apos;t have symptoms, cavities can develop silently. Routine dental examinations allow us to identify problems before they become larger and more expensive to treat.</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20"><div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]"><div><h2 className="text-3xl font-semibold text-[#0A2540] md:text-4xl">Why Patients Choose Dallas Smiles Dental &amp; Orthodontics</h2><p className="mt-6 leading-8 text-gray-700">Choosing a dental office is about more than fixing a cavity—it&apos;s about trusting a team that values your long-term oral health.</p><p className="mt-6 font-semibold text-[#0A2540]">At Dallas Smiles Dental &amp; Orthodontics, we focus on:</p><ul className="mt-5 space-y-3 list-disc pl-5 text-gray-700"><li>Personalized treatment plans instead of one-size-fits-all dentistry.</li><li>Conservative care that prioritizes saving natural teeth.</li><li>High-quality tooth-colored materials selected for durability and aesthetics.</li><li>Digital technology for accurate diagnosis and treatment planning.</li><li>Gentle, patient-centered care for children, teens, and adults.</li><li>Transparent communication so you understand your options before treatment begins.</li><li>Flexible scheduling, including emergency appointments whenever possible.</li></ul><p className="mt-8 leading-8 text-gray-700">Our philosophy is to treat every patient like family. We take the time to listen, explain, and deliver care that is designed to support both immediate comfort and long-term oral health.</p></div><MoreServicesSidebar title="More Services" /></div></section>

      <section className="bg-[#0A2540] py-16 text-center text-white md:py-20"><div className="mx-auto max-w-3xl px-6"><h2 className="text-3xl font-semibold md:text-4xl">Schedule Your Dental Filling Appointment</h2><p className="mt-6 leading-8 text-white/90">If you think you may have a cavity or need an old filling replaced, our team is here to help. We are committed to providing comfortable, high-quality restorative dentistry using modern techniques and materials that help protect your smile for years to come.</p><p className="mt-5 leading-8 text-white/90">Contact Dallas Smiles Dental &amp; Orthodontics today to schedule your examination and learn how we can restore your tooth comfortably, naturally.</p></div></section>
    </>
  );
}