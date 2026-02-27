import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Teeth Whitening in Dallas | Dallas Smiles",
  description:
    "Professional teeth whitening in Dallas to safely remove stains and brighten your smile.",
};

export default function TeethWhiteningPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Cosmetic Dentistry
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Brighten Your Smile <br />
              <span className="text-sky-300">
                Teeth Whitening
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Safely and effectively remove stains and discoloration for a brighter,
              more confident smile.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero1.jpeg"
              alt="Professional Teeth Whitening in Dallas"
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
              alt="Teeth whitening procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Transform Your Smile
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Professional Whitening for a Brighter Smile
            </h2>

            <p className="mt-4 text-gray-600">
              Our professional whitening services lighten teeth quickly and
              comfortably, addressing stains caused by coffee, tea, wine,
              tobacco, and aging.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ In-office whitening options</li>
              <li>✔ Custom take-home whitening kits</li>
              <li>✔ Safe, enamel-friendly solutions</li>
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
              Benefits of Teeth Whitening
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              A Brighter Smile, A Boost in Confidence
            </h2>

            <p className="mt-4 text-gray-600">
              Teeth whitening enhances your smile’s appearance and can make
              everyday interactions feel more confident and vibrant. It’s one
              of the fastest ways to visually refresh your smile.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Effective stain removal</li>
              <li>Boost in self-confidence</li>
              <li>Custom treatment plans</li>
              <li>Professional results you can trust</li>
              <li>Longer-lasting brightness vs OTC products</li>
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