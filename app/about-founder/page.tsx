import Image from "next/image";

export default function AboutFounderPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              About the Founder
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Meet Dr. Sandeep Bariki
            </h1>

            <p className="mt-6 text-white/90 max-w-xl">
              Personalized, compassionate dental care built around trust,
              comfort, and long-term oral health.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[25/20]">
              <Image
                src="/profilepic.jpeg"
                alt="Dr. Sandeep Bariki"
                fill
                className="rounded-3xl shadow-xl object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-700">

          <p>
            At our private practice, Dr. Sandeep Bariki is committed to delivering
            truly personalized dental care built around each patient’s unique
            needs, comfort, and long-term oral health. With over a decade of
            clinical experience practicing in the United States and a strong
            international educational foundation, Dr. Bariki combines advanced
            clinical expertise with a compassionate, patient-centered philosophy.
          </p>

          <p>
            Dr. Bariki began his dental journey by earning his Bachelor of Dental
            Surgery (BDS) degree in India before pursuing advanced education in
            the United States. He completed a Master’s degree in Health
            Informatics from Saint Louis University and later earned his Doctor
            of Dental Surgery (DDS) degree from the University of Southern
            California (USC) in 2016.
          </p>

          <p>
            In his private practice, Dr. Bariki focuses on comprehensive oral
            health — from preventive care and routine checkups to advanced
            restorative and implant dentistry. By offering a full spectrum of
            services under one roof, he strives to make dental care convenient,
            complete, and comfortable for every patient.
          </p>

          <p>
            Known for his gentle approach and calm chairside manner, Dr. Bariki
            prioritizes patient comfort and clear communication. His goal is to
            build lasting relationships based on trust, education, and
            exceptional care.
          </p>

          {/* Personal Welcome */}
          <div className="bg-[#f1f6fd] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-[#0A2540] mb-4">
              A Personal Welcome from Dr. Sandeep Bariki
            </h2>

            <p className="mb-4">
              Welcome, and thank you for choosing our dental family. As the owner
              and dentist of this practice, my goal is simple — to create a place
              where patients feel genuinely cared for, respected, and confident
              about their oral health.
            </p>

            <p className="mb-4">
              Dentistry is not just about treating teeth; it’s about building
              lasting relationships with the families and individuals we serve
              here in our Dallas community.
            </p>

            <p className="mb-6">
              Whether you’re visiting for a routine checkup, restorative
              treatment, or a complete smile transformation, my team and I are
              committed to delivering high-quality care in a friendly,
              welcoming environment.
            </p>

            <p className="font-semibold">
              Warm regards,<br />
              Dr. Sandeep Bariki
            </p>
          </div>

        </div>
      </section>
    </>
  );
}