import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Professional Teeth Cleaning in Dallas | Dallas Smiles",
  description:
    "Gentle and effective professional teeth cleaning in Dallas to prevent cavities and maintain long-term oral health.",
};

export default function TeethCleaningPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Preventive Dentistry
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional <br />
              <span className="text-sky-300">
                Teeth Cleaning in Dallas
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Keep your smile healthy and bright with regular professional
              teeth cleanings.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero2.jpeg"
              alt="Professional Teeth Cleaning in Dallas"
              fill
              className="rounded-3xl shadow-xl object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero3.jpeg"
              alt="Dental cleaning procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Gentle & Effective Care
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              A Healthier Smile Starts with Clean Teeth
            </h2>

            <p className="mt-4 text-gray-600">
              Professional teeth cleanings remove plaque and tartar that
              brushing alone can’t reach, helping prevent cavities and gum disease.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Removes plaque and tartar buildup</li>
              <li>✔ Helps prevent cavities and gum disease</li>
              <li>✔ Leaves your smile fresh and bright</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="md:col-span-2">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Benefits of Teeth Cleaning
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Simple Care with Long-Term Benefits
            </h2>

            <p className="mt-4 text-gray-600">
              Routine dental cleanings are one of the easiest ways to maintain
              long-term oral health and avoid costly dental treatments.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Prevents cavities and tooth decay</li>
              <li>Reduces risk of gum disease</li>
              <li>Improves breath freshness</li>
              <li>Helps maintain natural tooth color</li>
              <li>Supports overall oral health</li>
            </ul>
          </div>

          {/* Sidebar */}
          <div className="bg-[#0A2540] rounded-3xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">
              More Services
            </h3>

            <ul className="space-y-4">
              <li className="bg-white/15 px-4 py-3 rounded-xl">
                <Link href="/services/braces">Braces</Link>
              </li>

              <li className="bg-white/15 px-4 py-3 rounded-xl">
                <Link href="/services/crowns">Dental Crowns</Link>
              </li>

              <li className="bg-white/15 px-4 py-3 rounded-xl">
                <Link href="/services/root-canal">Root Canal</Link>
              </li>

              <li className="bg-white/15 px-4 py-3 rounded-xl">
                <Link href="/services/wisdom-teeth">Wisdom Teeth</Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}