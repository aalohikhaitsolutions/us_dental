import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tooth Extractions in Dallas | Dallas Smiles",
  description:
    "Safe and comfortable tooth extractions in Dallas with minimal discomfort and expert care.",
};

export default function ExtractionsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Tooth Extractions
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Safe & Comfortable <br />
              <span className="text-sky-300">
                Tooth Extractions
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Expert extractions with minimal discomfort — from simple to surgical,
              we’re here to care for your smile safely.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero2.jpeg"
              alt="Tooth Extractions in Dallas"
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
              alt="Dental extraction procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Quick, Safe Procedures
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Gentle Tooth Extractions with Expert Care
            </h2>

            <p className="mt-4 text-gray-600">
              Whether your extraction is simple or surgical, our experienced team
              ensures maximum comfort and safety throughout your visit.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Simple & surgical extractions</li>
              <li>✔ Minimal discomfort techniques</li>
              <li>✔ Fast recovery guidance</li>
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
              Why Choose Our Extractions
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Gentle Care, Strong Results
            </h2>

            <p className="mt-4 text-gray-600">
              Extractions can be stressful — but with us, you’re in expert hands.
              We minimize discomfort and help your smile heal quickly.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Experienced dental surgeons</li>
              <li>Comfort-first anesthesia techniques</li>
              <li>After-care comfort instructions</li>
              <li>Emergency extraction available</li>
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