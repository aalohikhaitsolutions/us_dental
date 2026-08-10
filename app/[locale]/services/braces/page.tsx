import Image from "next/image";
import MoreServicesSidebar from "../../components/MoreServicesSidebar";

export const metadata = {
  title: "Affordable Braces in Dallas | Dallas Smiles",
  description:
    "Affordable braces in Dallas with flexible monthly payments and no insurance required.",
};

export default function BracesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Orthodontics
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Braces That Fit Your Smile <br />
              <span className="text-sky-300">and Your Budget</span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Affordable braces in Dallas with flexible monthly payments —
              no insurance required.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/hero3.jpeg"
              alt="Affordable Braces in Dallas"
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
              alt="Teen wearing braces"
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
              Braces That Boost Your Smile Without Breaking the Bank
            </h2>

            <p className="mt-4 text-gray-600">
              Our orthodontic treatments are designed to be affordable,
              effective, and comfortable.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ No insurance required</li>
              <li>✔ Flexible monthly payments</li>
              <li>✔ Low down payment options</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          <div className="md:col-span-2">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Benefits of Braces
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Braces That Build Healthy Smiles for Life
            </h2>

            <p className="mt-4 text-gray-600">
              Braces do more than straighten teeth — they improve oral health,
              confidence, and long-term comfort.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Straighter teeth for easier cleaning</li>
              <li>Improved bite and chewing comfort</li>
              <li>Reduced risk of cavities and gum disease</li>
              <li>Clearer speech</li>
              <li>Boosted self-confidence</li>
            </ul>
          </div>

          {/* Sidebar */}
          <MoreServicesSidebar />

        </div>
      </section>
    </>
  );
}