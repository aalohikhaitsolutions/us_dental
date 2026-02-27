import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dental Crowns in Dallas | Dallas Smiles",
  description:
    "Restore damaged teeth with natural-looking dental crowns in Dallas.",
};

export default function CrownsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Restorative Dentistry
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dental Crowns That Restore <br />
              <span className="text-sky-300">
                Strength & Confidence
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Protect damaged teeth and restore your smile with
              durable, natural-looking dental crowns in Dallas.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero1.jpeg"
              alt="Dental crowns in Dallas"
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
              alt="Patient with dental crown"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              We’re Here in Dallas
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Dental Crowns That Look Natural and Last
            </h2>

            <p className="mt-4 text-gray-600">
              Our dental crowns are custom-made to match your natural teeth
              while restoring strength and function.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Custom color-matched crowns</li>
              <li>✔ Long-lasting protection</li>
              <li>✔ Restore chewing and comfort</li>
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
              Benefits of Dental Crowns
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Stronger Teeth, Healthier Smiles
            </h2>

            <p className="mt-4 text-gray-600">
              Dental crowns do more than restore damaged teeth —
              they protect, strengthen, and enhance your smile.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Protect cracked or weakened teeth</li>
              <li>Restore natural tooth shape</li>
              <li>Improve bite alignment</li>
              <li>Prevent further decay or damage</li>
              <li>Boost smile confidence</li>
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
                Dental Crowns
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