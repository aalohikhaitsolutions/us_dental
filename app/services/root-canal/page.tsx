import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Root Canal Treatment in Dallas | Dallas Smiles",
  description:
    "Pain-relieving root canal treatment in Dallas to save your natural tooth and eliminate infection.",
};

export default function RootCanalPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Endodontic Care
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pain-Relieving <br />
              <span className="text-sky-300">
                Root Canal Treatment
              </span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Gentle, effective root canal treatment to save your natural tooth
              and eliminate pain.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/services/root-canal/hero.jpeg"
              alt="Root Canal Treatment in Dallas"
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
              src="/services/root-canal/section.jpeg"
              alt="Root canal procedure"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Comfortable & Effective
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Save Your Tooth — Relieve the Pain
            </h2>

            <p className="mt-4 text-gray-600">
              A root canal removes infected tissue inside the tooth while
              preserving the natural structure. Modern techniques make the
              procedure comfortable and stress-free.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Advanced pain-free techniques</li>
              <li>✔ No extraction needed</li>
              <li>✔ Protects your natural smile</li>
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
              Benefits of Root Canal Treatment
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Long-Term Relief & Oral Health
            </h2>

            <p className="mt-4 text-gray-600">
              Root canals stop infection, prevent further damage, and allow
              you to keep your natural tooth for years to come.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Eliminates severe tooth pain</li>
              <li>Prevents infection from spreading</li>
              <li>Preserves your natural tooth</li>
              <li>Improves chewing comfort</li>
              <li>Restores normal oral function</li>
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
                <Link href="/services/wisdom-teeth">Wisdom Teeth</Link>
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