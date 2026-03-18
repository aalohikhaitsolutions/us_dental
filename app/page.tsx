"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaCalendarCheck, FaTooth, FaShieldAlt, FaUserMd } from "react-icons/fa";
import HeroSlider from "./components/HeroSlider";

export default function HomeHero() {
  const router = useRouter();

  interface Service {
  title: string;
  desc: string;
  icon: string;
  link: string;
}

const services: Service[] = [
  {
  title: " Invisalign/ Clear Aligners",
  desc: "Invisalign & Braces treatments are coming soon. Stay tuned for smile alignment solutions.",
  icon: "/orthodontics.gif",
  link: "/services/invisalign",
},
  // {
  //   title: "Dental Braces",
  //   desc: "Improve bite and alignment with low-cost braces designed for every age.",
  //   icon: "/1.gif",
  //   link: "/services/braces",
  // },
  {
    title: "Dental Crowns",
    desc: "Protect and strengthen weak teeth with custom-made dental crowns.",
    icon: "/2.gif",
    link: "/services/crowns",
  },
  {
    title: "Tooth Extractions",
    desc: "Safe extractions to relieve pain and prevent future dental problems.",
    icon: "/3.gif",
    link: "/services/extractions",
  },
  {
    title: "Wisdom Teeth",
    desc: "Safe and stress-free wisdom tooth removal with minimal recovery time.",
    icon: "/4.gif",
    link: "/services/wisdom-teeth",
  },
  {
    title: "Root Canal",
    desc: "Painless root canals to treat infection and preserve your natural smile.",
    icon: "/design8.gif",
    link: "/services/root-canal",
  },
  {
    title: "Teeth Cleaning",
    desc: "Remove plaque and stains with a quick and affordable teeth cleaning.",
    icon: "/6666.gif",
    link: "/services/teeth-cleaning",
  },
  {
    title: "Deep Teeth Cleaning",
    desc: "Stop gum issues early with thorough and effective deep cleanings.",
    icon: "/deepcleaning.gif",
    link: "/services/deep-cleaning",
  },
  {
    title: "Simple Filling",
    desc: "Restore small tooth damage with quick, painless dental fillings.",
    icon: "/design7.gif",
    link: "/services/fillings",
  },
  {
    title: "Dental Implants",
    desc: "Restore missing teeth with durable solutions that look completely natural.",
    icon: "/9.gif",
    link: "/services/implants",
  },
  {
    title: "Dental Restoration",
    desc: "Durable, natural-looking options for broken or lost teeth.",
    icon: "/design6.gif",
    link: "/services/restoration",
  },
  {
    title: "Gingivectomy",
    desc: "Reshape your gum line for a healthier, more even smile.",
    icon: "/design11.gif",
    link: "/services/gingivectomy",
  },
  {
    title: "Dentures",
    desc: "Replace missing teeth with comfortable, natural-looking dentures.",
    icon: "/den 2.gif",
    link: "/services/dentures",
  },
];

interface Logo {
  src: string;
}

const logos: Logo[] = [
  { src: "/insurance1.png" },
  { src: "/insurance2.jpg" },
  { src: "/insurance3.png" },
  { src: "/insurance4.png" },
  { src: "/insurance5.png" },
  { src: "/insurance6.png" },
  { src: "/insurance7.png" },
  { src: "/insurance8.png" },
  { src: "/insurance9.png" },
  { src: "/insurance10.jpg" },
  { src: "/insurance11.jpg" },
  { src: "/insurance12.webp" },
  { src: "/insurance13.jpg" },
  { src: "/insurance14.png" },
  { src: "/insurance15.png" },
  { src: "/insurance16.png" },
];

const form = useRef<HTMLFormElement | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [success, setSuccess] = useState<boolean>(false);

const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!form.current) return;

  setLoading(true);

  try {
    await emailjs.sendForm(
      "service_xl6x2ze",
      "template_vx8i16p",
      form.current,
      "YOUR_PUBLIC_KEY"
    );

    setSuccess(true);
    form.current.reset();
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }

  setLoading(false);
};

  return (
    <>
    <section
      id="home"
      className="relative w-full min-h-[90svh] md:h-[90vh] overflow-hidden pt-5 pb-5 px-3"
    >
      {/* Image Slider */}
      <HeroSlider />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10
        bg-gradient-to-r
        from-[#0A2540]/90
        via-[#1E5EFF]/50
        to-[#1E5EFF]/20"
      />

      {/* Mobile Blur Fallback */}
      <div
        className="absolute bottom-0 left-0 right-0
        h-[45%] md:hidden
        bg-gradient-to-t
        from-[#0A2540]/95
        via-[#1E5EFF]/70
        to-transparent
        backdrop-blur-md
        z-10"
      />

      {/* Content */}
      <div
        className="relative z-20 max-w-7xl mx-auto
        min-h-full
        flex items-start md:items-center
        px-4 sm:px-6
        pt-14 sm:pt-20 md:pt-0
        pb-12"
      >
        <div className="max-w-2xl text-white w-full">

          {/* Category Tag */}
          <span
            className="inline-flex items-center gap-2
            mb-4 px-4 py-1.5
            rounded-full
            bg-white/15 backdrop-blur-md
            text-xs sm:text-sm font-medium tracking-wide
            text-white shadow-sm"
          >
            Family Dental Care
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Your Smile Deserves <br />
            <span className="text-sky-300">the Best Care</span>
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Experience compassionate, state-of-the-art dental care for your entire family.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            From routine cleanings to advanced orthodontics, we're here to give you the
            confident smile you deserve.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">

            {/* Schedule */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center gap-0
              px-6 py-3 rounded-full
              bg-[#0A2540] text-white text-sm font-semibold
              hover:bg-[#163a63] hover:-translate-y-0.5
              transition-all duration-300 shadow-md"
            >
              <FaCalendarCheck className="text-sm" />
              Schedule Your Visit
            </button>

            {/* Explore Services */}
            <button
            
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center gap-0
              px-6 py-3 rounded-full
              border border-white/50 text-white text-sm font-semibold
              hover:bg-white hover:text-[#0A2540]
              hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaTooth className="text-sm" />
              Explore Our Services
            </button>

            {/* Financing */}
            {/* Financing */}
<button
  onClick={() => router.push("/financing")}
  className="flex items-center justify-center gap-0
  px-6 py-3 rounded-full text-lg font-semibold
  border border-white/50 text-white text-sm font-semibold
  hover:bg-white hover:text-[#0A2540]
  hover:-translate-y-0.5 transition-all duration-300"
>
  <img 
    src="/cherrylogo.png" 
    alt="Cherry Financing"
    className="w-15 h-15"
  />
Financial Partner - Cherry
</button>

          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Insurance */}
            <div className="group flex items-center gap-4
              px-4 py-4 rounded-2xl
              bg-white/15 backdrop-blur-md
              text-white font-semibold shadow-md
              hover:bg-white hover:text-[#0A2540]
              hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaShieldAlt className="text-xl group-hover:text-[#0A2540]" />
              <div>
                <p className="text-sm sm:text-base">Insurance Accepted</p>
                <p className="text-xs text-white/70 group-hover:text-gray-600">
                  Most major plans
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="group flex items-center gap-4
              px-4 py-4 rounded-2xl
              bg-white/15 backdrop-blur-md
              text-white font-semibold shadow-md
              hover:bg-white hover:text-[#0A2540]
              hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaUserMd className="text-xl group-hover:text-[#0A2540]" />
              <div>
                <p className="text-sm sm:text-base">10+ Years</p>
                <p className="text-xs text-white/70 group-hover:text-gray-600">
                  Experience
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* ================= FOUNDER INTRO ================= */}
<section className="pt-10 pb-10 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-100 text-[#0A2540] text-sm font-medium">
        About the Founder
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] leading-tight">
        Meet Dr. Sandeep Bariki
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed">
        At our private practice, Dr. Sandeep Bariki is committed to delivering
        truly personalized dental care built around each patient’s unique needs,
        comfort, and long-term oral health.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        With over a decade of clinical experience practicing in the United States
        and a strong international educational foundation, Dr. Bariki combines
        advanced clinical expertise with a compassionate, patient-centered
        philosophy.
      </p>

      {/* READ MORE */}
      <button
        onClick={() => {
          router.push("/about-founder");
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
        className="mt-8 inline-flex items-center gap-2
        px-6 py-3 rounded-full
        bg-[#0A2540] text-white font-semibold
        hover:bg-[#163a63] transition"
      >
        Read More
        <span className="text-lg">→</span>
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[25/20]">
        <Image
          src="/profilepic.jpeg"
          alt="Dr. Sandeep Bariki"
          fill
          className="rounded-3xl shadow-xl object-cover
      w-full
      max-w-sm          /* mobile */
      md:max-w-md       /* tablet */
      lg:max-w-lg "
        />
      </div>
    </div>

  </div>
</section>

{/* ================= ABOUT US SECTION ================= */}
<section id="about" className="w-full bg-[#f1f6fd] pt-10 pb-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE - IMAGE GRID */}
    <div className="flex gap-6">

      {/* LEFT STACK */}
      <div className="flex flex-col gap-6 w-1/2">

        <div className="relative h-56 w-full">
          <Image
            src="/download-1.jpeg"
            alt="Dental Consultation"
            fill
            className="object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="relative h-64 w-full">
          <Image
            src="/download-2.jpeg"
            alt="Dental Care"
            fill
            className="object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>

      {/* RIGHT SINGLE (OFFSET) */}
      <div className="w-1/2 flex items-center">
        <div className="relative h-[360px] w-full mt-10">
          <Image
            src="/download-3.jpeg"
            alt="Dental Chair"
            fill
            className="object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

    </div>

    {/* RIGHT SIDE - CONTENT */}
    <div>
      <p className="text-blue-600 text-2xl font-semibold mb-3">
        About Us
      </p>

      <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
        Professionals and <br />
        Personalized Dental <br />
        Excellence
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        We offer high-quality dental care tailored for the whole family.
        From routine checkups to advanced treatments, our compassionate
        team ensures your smile stays healthy and confident.
      </p>

      <div className="grid grid-cols-1 text-black sm:grid-cols-2 gap-4 mb-8">
        {[
          "Personalized Treatment Plans",
          "State-of-the-Art Technology",
          "Gentle Care for Kids and Adults",
          "Flexible Appointment Scheduling",
        ].map((item: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-3 hover:text-blue-600 transition-colors"
          >
            <span className="text-blue-600 text-xl">✓</span>
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="
        bg-[#0A2540] text-white px-6 py-3 rounded-lg font-semibold
        transition-all duration-300
        hover:bg-[#163a63] hover:shadow-lg hover:-translate-y-0.5
      "
      >
        Book Appointment
      </button>
    </div>

  </div>
</section>

{/* ================= INVISALIGN SECTION ================= */}
<section className="w-full bg-white pt-10 pb-20 px-6">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}

      <div>

        <p className="text-blue-600 font-bold text-xl mb-2">
          Invisalign Provider
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
          Straighten Your Smile with Invisalign
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          At <strong>Dallas Smiles</strong> Dental & Orthodontics, <span className="font-bold">Dr. Sandeep Bariki is an 
          Official Invisalign® Provider</span> offering advanced clear aligner 
          treatments designed to straighten teeth comfortably and discreetly.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          Invisalign aligners are custom-made, removable, and nearly invisible. 
          They gradually move your teeth into perfect alignment without the 
          need for traditional metal braces, allowing you to smile with confidence 
          throughout your treatment.
        </p>

        <button
          onClick={() => {
            router.push("/services/invisalign");
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
          className="
            inline-flex items-center gap-2
            bg-blue-600
            text-white
            px-7 py-3
            rounded-full
            font-semibold
            transition-all
            hover:bg-blue-700
          "
        >
          Learn More
          <span>→</span>
        </button>

      </div>


      {/* RIGHT CONTENT */}
      <div className="relative w-full h-[320px] md:h-[380px]">

        <Image
          src="/invisalign.webp"
          alt="Invisalign Clear Aligners"
          fill
          className="object-contain"
        />

      </div>

    </div>

  </div>

</section>


{/* ================= OUR SERVICES ================= */}
<section id="services" className="pt-10 pb-20 bg-[#f1f6fd]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-blue-600 font-bold text-2xl mb-2">
        Our Services
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Complete Care for Every Smile
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        From routine cleanings to advanced procedures, we provide
        personalized dental care for all ages.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {services.map((service: Service, index: number) => (

        <div
          key={index}
          className="
            relative bg-white rounded-3xl p-7
            border border-gray-100
            shadow-md
            transition-all duration-300 ease-out
            hover:-translate-y-4 hover:rotate-3
            hover:shadow-[0_25px_50px_rgba(37,99,235,0.35)]
            hover:bg-blue-600
            group cursor-pointer
          "
        >

          {/* Icon Box */}
          <div
            className="
              w-16 h-16 rounded-2xl
              flex items-center justify-center
              bg-blue-600 text-white
              mb-6
              transition-all duration-300
              group-hover:bg-white
              group-hover:text-blue-600
            "
          >
            <div className="relative w-full h-full">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h3
            className="
              text-xl font-semibold
              text-gray-900
              mb-2
              transition-colors duration-300
              group-hover:text-white
            "
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="
              text-gray-500 text-sm leading-relaxed
              line-clamp-3
              transition-colors duration-300
              group-hover:text-blue-100
            "
          >
            {service.desc}
          </p>

          {/* Learn More Button */}
          <div className="mt-6">
            <button

              type="button"
              onClick={() => {
                router.push(service.link);
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="
                inline-flex items-center gap-2
                border border-blue-600
                text-blue-600
                px-5 py-2 rounded-full
                text-sm font-semibold
                transition-all duration-300
                group-hover:border-white
                group-hover:text-white
                group-hover:bg-white/20
              "
            >
              Learn More
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

{/* ================= Insurance Partners SECTION ================= */}
<section
  id="insurance-partners"
  className="
    relative w-full
    pt-10 pb-20
    overflow-hidden
    bg-gradient-to-r
    from-[#0A2540]
    via-[#0f2f57]
    to-[#0A2540]
  "
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 z-0" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="text-3xl sm:text-5xl font-bold text-white">
        Insurance Partners
      </h2>
      <p className="mt-2 sm:mt-3 text-white/80 text-xs sm:text-base">
        We proudly accept most major dental insurance plans
      </p>
    </div>

    {/* Scrolling Logos */}
    <div className="relative overflow-hidden">
      <div
        className="
          insurance-marquee
          flex gap-3 sm:gap-8 w-max
          hover:[animation-play-state:paused]
        "
      >
        {[...logos, ...logos].map((logo: Logo, index: number) => (
          <div
            key={index}
            className="
              flex items-center justify-center
              min-w-[200px] sm:min-w-[300px]
              h-[120px] sm:h-[160px]
              bg-white
              rounded-xl sm:rounded-2xl
              shadow-md sm:shadow-lg
              px-2
            "
          >
            <div className="relative w-full h-[70px] sm:h-[110px]">
              <Image
                src={logo.src}
                alt="Insurance Partner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}
<section id="why" className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="relative">
        {/* Background Offset Box */}
        <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-3xl"></div>

        {/* Image Wrapper */}
        <div className="relative z-10 w-full aspect-[4/3]">
          <Image
            src="/whychooseus.png"
            alt="Happy family"
            fill
            className="rounded-3xl shadow-xl object-cover"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="text-2xl font-semibold text-blue-600 mb-2">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Your Trusted Partner for{" "}
          <span className="text-blue-600">
            Lifelong Dental Health
          </span>
        </h2>

        <p className="text-gray-600 mb-8">
          At Dallas Smiles Dental & Orthodontics, we believe everyone deserves
          a beautiful, healthy smile. Our dedicated team combines advanced
          technology with compassionate care to deliver exceptional results
          in a comfortable, welcoming environment.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            "State-of-the-art technology & equipment",
            "Flexible payment & financing options",
            "Experienced, board-certified dentists",
            "Comfortable, spa-like environment",
            "Emergency same-day appointments",
            "Warm, caring team focused on you",
          ].map((item: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
        
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="
            inline-flex items-center gap-2
            bg-[#0A2540] text-white
            px-6 py-3 rounded-full font-semibold
            hover:bg-[#163a63]
            hover:-translate-y-0.5
            transition-all duration-300
          "
        >
          Meet Our Team
          <ArrowRightIcon className="w-4 h-4" />
        </button>

      </div>
    </div>
  </div>
</section>

{/* ================= CONTACT / BOOK APPOINTMENT ================= */}
<section id="contact" className="pt-10 pb-20 bg-[#f1f6fd]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* MAP */}
      <div className="w-full h-[520px] rounded-3xl overflow-hidden shadow">
        <iframe
          title="Dallas Smiles & Co Location"
          src="https://www.google.com/maps?q=3234%20Forest%20Lane,%20Dallas,%20TX%2075234&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FORM */}
      <div>
        <p className="text-xl text-blue-600 font-semibold mb-1">
          BOOK APPOINTMENT
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Care at Dallas Smiles
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Dental & Orthodontics
        </h3>

        <p className="text-gray-600 mb-4">
          Experience gentle, personalized dental care in a welcoming
          environment where your comfort and smile come first.
        </p>

        {/* FORM START */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          {/* NAME + MOBILE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NAME
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name..."
                className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MOBILE NUMBER
              </label>
              <input
                type="tel"
                name="mobile"
                required
                placeholder="Your mobile number..."
                className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              MESSAGE
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Enter your message..."
              className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BUTTON + CALL */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">

            {/* CALL */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 7.87 6.38 14.25 14.25 14.25.69 0 1.25-.56 1.25-1.25v-2.5a1.25 1.25 0 00-1.25-1.25c-1.04 0-2.04-.17-2.98-.48a1.25 1.25 0 00-1.3.31l-1.2 1.2a11.43 11.43 0 01-5.09-5.09l1.2-1.2a1.25 1.25 0 00.31-1.3c-.31-.94-.48-1.94-.48-2.98A1.25 1.25 0 005.5 2.25H3c-.69 0-1.25.56-1.25 1.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us</p>
                <p className="font-semibold text-gray-900">
                  +1 (972) 484-5400
                </p>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0A2540] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#163a63] transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

          </div>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-600 font-medium mt-2">
              Appointment request sent successfully!
            </p>
          )}

        </form>
        {/* FORM END */}

      </div>
    </div>
  </div>
</section>
  </>
  );
}