import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dental Restoration in Dallas | Dallas Smiles",
  description:
    "Comprehensive dental restoration in Dallas including crowns, bridges, and fillings to restore strength and beauty to your smile.",
};

export default function RestorationPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Dental Restoration
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Restore Function & Beauty <br />
              <span className="text-sky-300">
                to Your Smile
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Dental restoration brings back strength, appearance, and function
              to damaged or missing teeth — giving you a confident and healthy smile.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero2.jpeg"
              alt="Dental Restoration in Dallas"
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
              alt="Dental restoration procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Comprehensive Care
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Customized Dental Restorations
            </h2>

            <p className="mt-4 text-gray-600">
              Dental restoration includes treatments like crowns, bridges, and
              fillings that repair and strengthen damaged or decayed teeth.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Restore chewing ability</li>
              <li>✔ Enhance appearance</li>
              <li>✔ Protect against further damage</li>
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
              Benefits of Dental Restoration
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Long-Lasting Comfort & Function
            </h2>

            <p className="mt-4 text-gray-600">
              Restorative dentistry improves both the health and look of your
              teeth — giving you confidence and comfort that lasts.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Strengthen weak or broken teeth</li>
              <li>Replace missing teeth</li>
              <li>Support chewing and speaking</li>
              <li>Improve smile aesthetics</li>
              <li>Prevent further dental problems</li>
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