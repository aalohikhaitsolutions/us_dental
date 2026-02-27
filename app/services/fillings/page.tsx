import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dental Fillings in Dallas | Dallas Smiles",
  description:
    "Quick and comfortable dental fillings in Dallas to restore minor tooth damage and stop decay.",
};

export default function FillingsPage() {
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
              Quick & Comfortable <br />
              <span className="text-sky-300">
                Dental Fillings
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Restore minor tooth damage quickly and comfortably with conservative
              dental fillings that stop decay and strengthen your smile.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero1.jpeg"
              alt="Dental Fillings in Dallas"
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
              alt="Dental fillings procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Fast & Effective
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Strong Protection for Your Teeth
            </h2>

            <p className="mt-4 text-gray-600">
              Dental fillings halt the progression of cavities and protect your
              tooth structure from further decay using durable, tooth-colored
              materials.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Durable composite or porcelain materials</li>
              <li>✔ Natural-looking restorations</li>
              <li>✔ Quick, painless procedure</li>
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
              Benefits of Dental Fillings
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Prevent Pain & Future Damage
            </h2>

            <p className="mt-4 text-gray-600">
              Fillings not only treat existing cavities but also help protect
              your teeth from further decay — saving you time, discomfort, and
              cost in the long run.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Stops decay from spreading</li>
              <li>Restores biting surfaces</li>
              <li>Improves overall oral health</li>
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