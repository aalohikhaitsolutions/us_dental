import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dental Implants in Dallas | Dallas Smiles",
  description:
    "Permanent dental implants in Dallas designed to look, feel, and function like natural teeth.",
};

export default function ImplantsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Dental Implants
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Permanent <br />
              <span className="text-sky-300">
                Dental Implants
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Replace missing teeth with durable implants designed to look,
              feel, and function like natural teeth.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero3.jpeg"
              alt="Dental Implants in Dallas"
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
              alt="Dental implant procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Long-Lasting & Natural
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Restore Your Smile with Dental Implants
            </h2>

            <p className="mt-4 text-gray-600">
              Dental implants provide a permanent solution for missing teeth that
              feels, functions, and looks like your natural smile.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Strong and durable replacement option</li>
              <li>✔ Preserves bone density and facial structure</li>
              <li>✔ Natural appearance and function</li>
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
              Benefits of Dental Implants
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Smile with Confidence & Strength
            </h2>

            <p className="mt-4 text-gray-600">
              Dental implants offer a superior tooth replacement solution by
              strengthening the jawbone and preventing deterioration that can
              occur when teeth are missing.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Improved chewing & speech function</li>
              <li>Preserved jawbone health</li>
              <li>Long-term durability</li>
              <li>Enhanced self-confidence</li>
              <li>Natural aesthetics</li>
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
                <Link href="/services/teeth-cleaning">Teeth Cleaning</Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}