import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gingivectomy in Dallas | Dallas Smiles",
  description:
    "Advanced gingivectomy treatment in Dallas to improve gum health, reduce pockets, and enhance your smile.",
};

export default function GingivectomyPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Periodontal Surgery
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Soft Tissue <br />
              <span className="text-sky-300">
                Gingivectomy
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Advanced periodontal treatment to reshape and improve gum health,
              comfort, and aesthetics.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero2.jpeg"
              alt="Gingivectomy Treatment in Dallas"
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
              alt="Gingivectomy procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Healthy Gum Focus
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Treat Your Gums with Precision
            </h2>

            <p className="mt-4 text-gray-600">
              Gingivectomy is a periodontal surgery in which excess gum tissue
              is removed to reduce pockets and improve gum health.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Reduces gum pockets</li>
              <li>✔ Helps prevent infection</li>
              <li>✔ Promotes easier cleaning</li>
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
              Benefits of Gingivectomy
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Improve Gum Health & Comfort
            </h2>

            <p className="mt-4 text-gray-600">
              Gingivectomy removes excess or diseased gum tissue to reduce
              pockets, improve hygiene, reduce inflammation, and enhance smile
              appearance.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Reduce gum inflammation and pain</li>
              <li>Minimize deep gum pockets</li>
              <li>Improve ability to clean teeth effectively</li>
              <li>Enhance periodontal health</li>
              <li>Restore confident smile</li>
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