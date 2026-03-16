import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Affordable Dentures in Dallas | Dallas Smiles",
  description:
    "Restore your smile with comfortable and affordable dentures in Dallas. Flexible payment options and expert care.",
};

export default function DenturesPage() {
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
              Comfortable Dentures That <br />
              <span className="text-sky-300">Restore Your Smile</span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              High-quality dentures in Dallas designed to restore your
              confidence, improve chewing, and give you a natural-looking smile.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero3.jpeg"
              alt="Affordable Dentures in Dallas"
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
              src="/hero2.jpeg"
              alt="Patient smiling with dentures"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Trusted Dental Care in Dallas
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Restore Function and Confidence with Modern Dentures
            </h2>

            <p className="mt-4 text-gray-600">
              Dentures are a reliable solution for replacing missing teeth.
              Our custom-made dentures are designed for comfort, durability,
              and a natural appearance.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Custom-fitted for comfort</li>
              <li>✔ Natural-looking tooth replacement</li>
              <li>✔ Flexible and affordable payment options</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          <div className="md:col-span-2">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Benefits of Dentures
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Dentures Designed for Comfort and Everyday Life
            </h2>

            <p className="mt-4 text-gray-600">
              Dentures help restore your ability to eat, speak, and smile
              comfortably while maintaining the natural appearance of your
              face and jaw structure.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Replace multiple missing teeth</li>
              <li>Restore natural facial structure</li>
              <li>Improve chewing and speech</li>
              <li>Enhance smile and confidence</li>
              <li>Affordable tooth replacement solution</li>
            </ul>
          </div>

          {/* Sidebar */}
          <div className="bg-[#0A2540] rounded-3xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">
              More Services
            </h3>

            <ul className="space-y-4">
              <li className="bg-white/15 px-4 py-3 rounded-xl">
                Dentures
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