"use client";

import Image from "next/image";

export default function CareersPage() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden">

      {/* LEFT IMAGE (50%) */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
        <Image
          src="/careers.png"
          alt="Careers"
          fill
          className="object-cover"
          priority
        />

        {/* Smooth fade to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-[#f7fafd]" />
      </div>

      {/* RIGHT CONTENT (50%) */}
      <div className="w-full md:w-1/2 flex items-center bg-[#f7fafd] relative">

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

        <div className="relative z-10 px-6 md:px-12 py-12">

          <p className="text-blue-500 font-semibold mb-2 text-lg">
            Careers
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Join Our Team
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl">
            We are looking for talented and experienced people to join our team at{" "}
            <span className="font-semibold text-[#0A2540]">
              Dallas Smiles Dental & Orthodontics
            </span>.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 text-gray-700 text-lg">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
              Registered Dental Assistant
            </li>
            <li className="flex items-start gap-3 text-gray-700 text-lg">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
              Front Desk & Treatment Coordinator
            </li>
          </ul>

          <p className="text-gray-600 mb-4 text-lg">
            To apply, please send your resume to:
          </p>

          <a
            href="mailto:management@dallassmilesco.com"
            className="inline-block bg-[#3B82F6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md transition hover:scale-105"
          >
            management@dallassmilesco.com
          </a>

        </div>
      </div>
    </section>
  );
}