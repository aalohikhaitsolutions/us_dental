"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function FinancingPage() {

  useEffect(() => {
    // Load Cherry widget script once
    if (!document.getElementById("cherry-widget-script")) {
      const script = document.createElement("script");
      script.id = "cherry-widget-script";
      script.src = "https://provider.withcherry.com/assets/widget.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
    <section className="bg-[#f1f6fd] pt-10 pb-5 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
          {/* TEXT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">
              Flexible Financing with Cherry
            </h1>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We’ve partnered with <strong>Cherry </strong>  to make dental care more
              affordable. Get approved in seconds and split your treatment cost
              into easy monthly payments — with no financial stress.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔️ Instant approval (soft credit check)</li>
              <li>✔️ 0% APR options available</li>
              <li>✔️ No hard credit impact</li>
              <li>✔️ Flexible monthly payments</li>
            </ul>
          </div>

          {/* IMAGE */}
<div className="relative flex justify-center">

  <div className="relative w-full max-w-md aspect-[4/3]">
    <Image
      src="/download-2.jpeg"
      alt="Dental financing options"
      fill
      className="rounded-2xl shadow-lg object-cover"
      priority
    />
  </div>

  {/* Cherry Logo */}
  <div className="absolute left-4 top-52 w-36 bg-white p-3 rounded-xl shadow-lg">
    <div className="relative w-full h-20">
      <Image
        src="/cherry.png"
        alt="Cherry Financing"
        fill
        className="object-contain"
      />
    </div>
  </div>

</div>

        </div>
      </div>
    </section>
 {/* ================= LEARN MORE ABOUT CHERRY ================= */}
<section className="pt-10 pb-20 bg-white">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

{/* LEFT TEXT */}
<div>

<h2 className="text-3xl font-semibold text-[#0A2540] mb-4">
Learn More About Our Financing Partner Cherry
</h2>

<p className="text-gray-600 leading-relaxed mb-4">
Dallas Smiles Dental & Orthodontics proudly partners with <strong>Cherry</strong><br />
to make dental treatments more accessible and affordable for our patients.
Cherry allows you to split your treatment cost into manageable monthly payments
so you can receive the care you need without financial stress.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
With a quick application process, fast approvals, and flexible payment options,
Cherry helps patients move forward with their treatment confidently.
</p>

<button
onClick={() => window.open("https://pay.withcherry.com/dallas-smiles-dental-orthodontics?utm_source=practice&m=78410", "_blank")}
className="bg-[#0A2540] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#123a63] transition"
>
Learn More About Cherry
</button>

</div>

{/* RIGHT IMAGE */}
<div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg">
<Image
src="/kids.png"
alt="Cherry dental financing"
fill
className="object-cover"
/>
</div>

</div>

</section>
</>
  );
}
