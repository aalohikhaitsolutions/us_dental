"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InvisalignPage() {

const router = useRouter();

return (
<div className="w-full bg-white">


{/* ================= HERO ================= */}
<section className="relative py-24">

{/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/invisalignhero.jpg')" }}
/>

{/* Overlay */}
<div className="absolute inset-0 bg-[#f1f6fd]/30"></div>

{/* Content */}
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
Why Choose Invisalign®
</h1>

<p className="text-black text-lg max-w-3xl mx-auto mb-6">
A confident smile should feel natural — not forced, not hidden, and not uncomfortable.
At Dallas Smiles Dental & Orthodontics, we offer Invisalign® as a modern orthodontic
solution designed for people who want straighter teeth without disrupting their lifestyle.
</p>

<p className="text-black text-lg max-w-3xl mx-auto mb-8">
Unlike traditional braces, Invisalign uses a series of custom-made, clear aligners that
gradually guide your teeth into their ideal position. These aligners are virtually
invisible, comfortable to wear, and removable — giving you the flexibility that metal
braces simply cannot offer.
</p>

<button
onClick={() => router.push("/#contact")}
className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
>
Book Free Consultation
</button>

</div>
</section>


{/* ================= DR BARIKI ================= */}
<section className="pt-10 pb-20">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div className="relative h-[420px] rounded-3xl overflow-hidden">
<Image
src="/kids.png"
alt="Dr Sandeep Bariki Invisalign Provider"
fill
className="object-cover"
/>
</div>

<div>

<h2 className="text-3xl font-semibold text-gray-900 mb-4">
Personalized Invisalign Treatment
</h2>

<p className="text-gray-600 leading-relaxed mb-6">
Dr. Sandeep Bariki carefully evaluates each patient’s bite, alignment, and facial harmony
to create a personalized digital treatment plan.
</p>

<p className="text-gray-600 leading-relaxed">
Using advanced 3D imaging technology, you can even preview how your smile is expected
to look before treatment begins.
</p>

</div>

</div>
</section>



{/* ================= CONDITIONS TREATED ================= */}
<section className="bg-[#f1f6fd] py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] mb-4">
      Invisalign Can Treat
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-14">
      Invisalign aligners are designed to treat many common orthodontic
      problems comfortably and discreetly.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#0A2540]">Crowded Teeth</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Teeth overlap because there isn't enough room in the jaw.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#0A2540]">Spacing Issues</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Gaps between teeth caused by missing teeth or jaw size.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#0A2540]">Overbite</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Upper teeth overlap too much over the lower teeth.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#0A2540]">Underbite</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Lower teeth extend past the upper teeth when biting.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#0A2540]">Crossbite</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Some upper teeth sit inside the lower teeth instead of outside.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#0A2540]">
          Alignment Concerns
        </h3>
        <p className="text-gray-600 mt-2 text-sm">
          Invisalign can treat mild to moderate alignment issues.
        </p>
      </div>

    </div>

    <p className="text-gray-600 max-w-3xl mx-auto mt-12">
      Whether you're a busy professional, a teen involved in activities, or an
      adult who never had braces growing up, Invisalign allows you to improve
      your smile discreetly and comfortably.
    </p>

  </div>
</section>


{/* ================= KIDS & TEENS ================= */}
<section className="pt-10 pb-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

{/* LEFT CONTENT */}
<div>

<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
Invisalign for Kids & Teenagers
</h2>

<p className="text-gray-600 leading-relaxed mb-4">
Invisalign is a great orthodontic option for kids and teenagers who want
a comfortable and nearly invisible way to straighten their teeth.
Unlike traditional braces, Invisalign aligners are made from clear,
smooth plastic that fits comfortably over the teeth and gradually
moves them into proper alignment.
</p>

<p className="text-gray-600 leading-relaxed mb-4">
Because the aligners are removable, kids and teens can easily take them
out while eating, brushing, and flossing. This helps maintain better
oral hygiene and allows them to continue enjoying their favorite foods
without restrictions.
</p>

<p className="text-gray-600 leading-relaxed">
Invisalign is especially popular among teenagers because it allows them
to straighten their teeth discreetly while staying confident in school,
sports, and social activities.
</p>

</div>


{/* RIGHT IMAGE */}
<div className="relative h-[420px] rounded-3xl overflow-hidden">
<Image
src="/teenagers1.png"
alt="Invisalign for Kids and Teenagers"
fill
className="object-cover"
/>
</div>

</div>

</section>



{/* ================= BENEFITS ================= */}
<section className="bg-[#f1f6fd] pt-10 pb-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">
Benefits of Invisalign
</h2>

<div className="grid md:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-2xl shadow text-center">
<h3 className="font-semibold text-black mb-2">Nearly Invisible Appearance</h3>
<p className="text-gray-500 text-sm">
Clear aligners blend naturally with your teeth so most people won’t notice treatment.
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow text-center">
<h3 className="font-semibold text-black mb-2">Comfortable Fit</h3>
<p className="text-gray-500 text-sm">
Smooth BPA-free plastic aligners eliminate irritation from wires and brackets.
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow text-center">
<h3 className="font-semibold text-black mb-2">Removable Aligners</h3>
<p className="text-gray-500 text-sm">
Remove aligners while eating, brushing, and flossing for better oral hygiene.
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow text-center">
<h3 className="font-semibold text-black mb-2">Fewer Office Visits</h3>
<p className="text-gray-500 text-sm">
Appointments are shorter and less frequent compared to traditional braces.
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow text-center">
<h3 className="font-semibold text-black mb-2">Predictable Digital Planning</h3>
<p className="text-gray-500 text-sm">
Advanced digital scanning allows you to preview your future smile.
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow text-center">
<h3 className="font-semibold text-black mb-2">Confidence During Treatment</h3>
<p className="text-gray-500 text-sm">
Discreet aligners let you smile confidently during treatment.
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow text-center">
<h3 className="font-semibold text-black mb-2">Customized Treatment</h3>
<p className="text-gray-500 text-sm">
Every Invisalign plan is tailored to your facial structure and dental health.
</p>
</div>

</div>

</div>

</section>



{/* ================= WHY TRUST DALLAS SMILES ================= */}
<section className="pt-10 pb-20">

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
Why Patients Trust Dallas Smiles
</h2>

<p className="text-gray-600 text-lg leading-relaxed mb-6">
At Dallas Smiles Dental & Orthodontics, Invisalign is not a “one-size-fits-all” treatment.
Dr. Bariki combines over a decade of clinical experience with advanced continuing education
to ensure your treatment is efficient, precise, and stable long-term.
</p>

<p className="text-gray-600 text-lg leading-relaxed">
We focus not only on straight teeth — but on balanced bites, healthy gums, and a smile
that enhances your overall facial aesthetics.
</p>

</div>

</section>

{/* ================= FLEXIBLE PAYMENT PLANS ================= */}
<section className="pt-10 pb-20 bg-[#f1f6fd]">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>

<h2 className="text-3xl font-semibold text-gray-900 mb-4">
Flexible Monthly Payment Plans
</h2>

<p className="text-gray-600 leading-relaxed mb-4">
We understand that every patient’s financial situation is different. 
Our team will review your treatment plan with full transparency and 
help you choose a payment structure that works best for you.
</p>

<p className="text-gray-600 leading-relaxed">
Whether you prefer a lower upfront cost or manageable monthly 
installments, we will customize an option that aligns with your needs.
</p>

</div>

<div className="relative w-full h-[350px] rounded-xl overflow-hidden">
<Image
src="/payment.png"
alt="Flexible Payment Plans"
fill
className="object-cover"
/>
</div>

</div>

</section>



{/* ================= CHERRY FINANCING ================= */}
<section className="bg-white pt-10 pb-20">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div className="relative w-full h-[350px] rounded-xl overflow-hidden">
<Image
src="/cherry2.png"
alt="Cherry Financing"
fill
className="object-cover"
/>
</div>

<div>

<h2 className="text-3xl font-semibold text-gray-900 mb-4">
Cherry – Our Official Financing Partner
</h2>

<p className="text-gray-600 leading-relaxed mb-4">
To make Invisalign even more affordable, we proudly partner with Cherry,
our official patient financing provider.
</p>

<h3 className="font-semibold mb-3 text-gray-800">
Cherry Offers:
</h3>

<ul className="space-y-2 text-gray-600">
<li>• Fast, simple application process</li>
<li>• Quick approval decisions</li>
<li>• Flexible monthly payment plans</li>
<li>• Options for qualifying patients, including promotional plans</li>
</ul>

<p className="text-gray-600 mt-4">
The application process is straightforward and can often be completed
in just minutes. Our team will guide you through every step to ensure
a smooth experience.
</p>

<a
  href="https://pay.withcherry.com/dallas-smiles-dental-orthodontics?utm_source=practice&m=78410"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
>
Apply for Financing
</a>

</div>

</div>

</section>

{/* ================= FINANCING ================= */}
<section className="bg-[#f1f6fd] pt-10 pb-20">

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
Affordable Invisalign with Flexible Financing
</h2>

<p className="text-gray-600 mb-6">
A straighter smile should be accessible — not stressful. That’s why Dallas Smiles
offers flexible payment plans designed to fit comfortably within your budget.
</p>

<p className="text-gray-600 mb-6">
We proudly partner with Cherry, our official patient financing provider,
offering fast applications, quick approval decisions, and convenient monthly payment plans.
</p>

<button
onClick={() => router.push("/#contact")}
className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
>
Schedule Free Consultation
</button>

</div>

</section>


</div>
);
}