import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Deep Teeth Cleaning in Dallas | Dallas Smiles",
  description:
    "Comprehensive deep teeth cleaning in Dallas to improve gum health and prevent periodontal disease.",
};

export default function DeepCleaningPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Periodontal Care
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Deep <br />
              <span className="text-sky-300">
                Teeth Cleaning
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Thorough cleaning below the gumline for healthier gums and lasting oral health.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero2.jpeg"
              alt="Deep Teeth Cleaning in Dallas"
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
              src="/hero4.jpeg"
              alt="Deep dental cleaning procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Comprehensive Gum Care
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              A Cleaner Mouth from Gums to Teeth
            </h2>

            <p className="mt-4 text-gray-600">
              Deep cleaning treatments remove plaque and tartar buildup below
              the gumline to protect your gums and improve overall oral health.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Removes built-up plaque & tartar</li>
              <li>✔ Helps fight gum disease</li>
              <li>✔ Promotes long-term oral health</li>
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
              Benefits of Deep Cleaning
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Protect Your Gums and Prevent Disease
            </h2>

            <p className="mt-4 text-gray-600">
              Deep cleanings help reduce gum inflammation and prevent the
              progression of periodontal disease, keeping your mouth healthier
              and more comfortable.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Reduces gum swelling and bleeding</li>
              <li>Helps stop periodontal disease progression</li>
              <li>Freshens breath</li>
              <li>Improves overall oral health</li>
              <li>Supports stronger healthy gums</li>
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