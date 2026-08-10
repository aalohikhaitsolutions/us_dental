"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaCalendarCheck, FaTooth, FaShieldAlt, FaUserMd } from "react-icons/fa";
import HeroSlider from "./components/HeroSlider";
import { useTranslations } from "next-intl";
import { useLocaleRouter } from "./utils/navigation";
import { PhoneIcon } from "@heroicons/react/24/outline";


export default function HomeHero() {
  const router = useRouter();
  const t = useTranslations("home.hero");
  const tf = useTranslations("home.founder");
  const ta = useTranslations("home.about");
  const ti = useTranslations("home.invisalign");
  const ts = useTranslations("home.services");
  const tin = useTranslations("home.insurance");
  const tw = useTranslations("home.why");
  const tq = useTranslations("home.faq");
  const tc = useTranslations("home.contact");
  const tConsultation = useTranslations("home.consultation");
  const { navigate } = useLocaleRouter();
  const services = ts.raw("list");
  const logos = tin.raw("logos");

  interface Service {
  title: string;
  desc: string;
  icon: string;
  link: string;
}

// const services: Service[] = [
//   {
//   title: " Invisalign",
//   desc: "Invisalign & Braces treatments are coming soon. Stay tuned for smile alignment solutions.",
//   icon: "/orthodontics.gif",
//   link: "/services/invisalign",
// },
//   // {
//   //   title: "Dental Braces",
//   //   desc: "Improve bite and alignment with low-cost braces designed for every age.",
//   //   icon: "/1.gif",
//   //   link: "/services/braces",
//   // },
//   {
//     title: "Dental Crowns",
//     desc: "Protect and strengthen weak teeth with custom-made dental crowns.",
//     icon: "/2.gif",
//     link: "/services/crowns",
//   },
//   {
//     title: "Tooth Extractions",
//     desc: "Safe extractions to relieve pain and prevent future dental problems.",
//     icon: "/3.gif",
//     link: "/services/extractions",
//   },
//   {
//     title: "Wisdom Teeth",
//     desc: "Safe and stress-free wisdom tooth removal with minimal recovery time.",
//     icon: "/4.gif",
//     link: "/services/wisdom-teeth",
//   },
//   {
//     title: "Root Canal",
//     desc: "Painless root canals to treat infection and preserve your natural smile.",
//     icon: "/design8.gif",
//     link: "/services/root-canal",
//   },
//   {
//     title: "Teeth Cleaning",
//     desc: "Remove plaque and stains with a quick and affordable teeth cleaning.",
//     icon: "/6666.gif",
//     link: "/services/teeth-cleaning",
//   },
//   {
//     title: "Deep Teeth Cleaning",
//     desc: "Stop gum issues early with thorough and effective deep cleanings.",
//     icon: "/deepcleaning.gif",
//     link: "/services/deep-cleaning",
//   },
//   {
//     title: "Simple Filling",
//     desc: "Restore small tooth damage with quick, painless dental fillings.",
//     icon: "/design7.gif",
//     link: "/services/fillings",
//   },
//   {
//     title: "Dental Implants",
//     desc: "Restore missing teeth with durable solutions that look completely natural.",
//     icon: "/9.gif",
//     link: "/services/implants",
//   },
//   {
//     title: "Dental Restoration",
//     desc: "Durable, natural-looking options for broken or lost teeth.",
//     icon: "/design6.gif",
//     link: "/services/restoration",
//   },
//   {
//     title: "Gingivectomy",
//     desc: "Reshape your gum line for a healthier, more even smile.",
//     icon: "/design11.gif",
//     link: "/services/gingivectomy",
//   },
//   {
//     title: "Dentures",
//     desc: "Replace missing teeth with comfortable, natural-looking dentures.",
//     icon: "/dentures7.gif",
//     link: "/services/dentures",
//   },
// ];

interface Logo {
  src: string;
}

// const logos: Logo[] = [
//   { src: "/insurance1.png" },
//   { src: "/insurance2.jpg" },
//   { src: "/insurance3.png" },
//   { src: "/insurance4.png" },
//   { src: "/insurance5.png" },
//   { src: "/insurance6.png" },
//   { src: "/insurance7.png" },
//   { src: "/insurance8.png" },
//   { src: "/insurance9.png" },
//   { src: "/insurance10.jpg" },
//   { src: "/insurance11.jpg" },
//   { src: "/insurance12.webp" },
//   { src: "/insurance13.jpg" },
//   { src: "/insurance14.png" },
//   // { src: "/insurance15.png" },
//   { src: "/insurance16.png" },
// ];

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
      "PzEF79UaLwmDin7Sw"
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
{/* ================= HERO SECTION ================= */}
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
              {t("tag")}
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              {t("title1")} <br />
              <span className="text-sky-300">{t("title2")}</span>
            </h1>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              {t("desc1")}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              {t("desc2")}
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
                className="flex items-center justify-center gap-2
                px-6 py-3 rounded-full
                bg-[#0A2540] text-white text-sm font-semibold
                hover:bg-[#163a63] hover:-translate-y-0.5
                transition-all duration-300 shadow-md"
              >
                <FaCalendarCheck className="text-sm" />
                {t("cta1")}
              </button>

              {/* Explore Services */}
              <button
              
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center gap-2
                px-6 py-3 rounded-full
                border border-white/50 text-white text-sm font-semibold
                hover:bg-white hover:text-[#0A2540]
                hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaTooth className="text-sm" />
                {t("cta2")}
              </button>

              {/* Financing */}
              {/* Financing */}
  <button
    onClick={() => navigate("/financing")}
    className="flex items-center justify-center gap-0
    px-6 py-3 rounded-full text-lg font-semibold
    border border-white/50 text-white text-sm font-semibold
    hover:bg-white hover:text-[#0A2540]
    hover:-translate-y-0.5 transition-all duration-300"
  >
    <Image 
    src="/cherrylogo.png"
    alt="Cherry Financing"
    width={40}
    height={40}
  />
  {t("cta3")}
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

{/* ================= FREE CONSULTATION ================= */}
<section id="consultation" className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-10">
    <div className="rounded-[2rem] border border-slate-200 bg-[#f3f8fd] p-8 md:p-10 lg:p-12 shadow-sm">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
            {tConsultation("tag")}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] leading-tight">
            {tConsultation("title")}
          </h2>
          <p className="mt-6 text-gray-700 leading-8">
            {tConsultation("desc")}
          </p>
          <p className="mt-6 text-gray-700 leading-8">
            {tConsultation("body")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+19724845400"
              className="inline-flex items-center justify-center rounded-full bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              {tConsultation("cta")}
            </a>
            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0A2540] transition hover:border-sky-300 hover:text-sky-700"
            >
              {tConsultation("secondary")}
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-[#0A2540] p-8 md:p-10 text-white shadow-xl">
          <h3 className="text-2xl font-semibold">
            {tConsultation("cardTitle")}
          </h3>
          <ul className="mt-6 space-y-4 text-sm sm:text-base text-sky-50/90">
            {[
              tConsultation("items.1"),
              tConsultation("items.2"),
              tConsultation("items.3"),
              tConsultation("items.4"),
              tConsultation("items.5"),
              tConsultation("items.6"),
              tConsultation("items.7"),
              tConsultation("items.8"),
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-300 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
        {tf("tag")}
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] leading-tight">
        {tf("title")}
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed">
        {tf("desc1")}
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {tf("desc2")}
      </p>

      {/* READ MORE */}
      <button
        onClick={() => navigate("/about-founder")}
        className="mt-8 inline-flex items-center gap-2
        px-6 py-3 rounded-full
        bg-[#0A2540] text-white font-semibold
        hover:bg-[#163a63] hover:-translate-y-0.5
        transition-all duration-300 shadow-md"
      >
        {tf("cta")}
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
          priority
          className="rounded-3xl shadow-xl object-cover"
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

        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src="/download-1.jpeg"
            alt="Dental Consultation"
            fill
            priority
            className="object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src="/download-2.jpeg"
            alt="Dental Care"
            fill
            className="object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>

      {/* RIGHT SINGLE */}
      <div className="w-1/2 flex items-center">
        <div className="relative h-[360px] w-full mt-10 overflow-hidden">
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
        {ta("tag")}
      </p>

      <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
        {ta("title1")} <br />
        {ta("title2")} <br />
        {ta("title3")}
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {ta("desc")}
      </p>

      <div className="grid grid-cols-1 text-black sm:grid-cols-2 gap-4 mb-8">
        {ta.raw("features").map((item: string, index: number) => (
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
        {ta("cta")}
      </button>
    </div>

  </div>
</section>

{/* ================= INVISALIGN SECTION ================= */}
<section className="w-full bg-white pt-10 pb-20 px-6">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>

        <p className="text-blue-600 font-bold text-xl mb-2">
          {ti("tag")}
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
          {ti("title")}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
  {ti.rich("desc1", {
    b: (chunks) => (
  <strong className="font-semibold text-gray-900">
    {chunks}
  </strong>
)
  })}
</p>

        <p className="text-gray-600 leading-relaxed mb-6">
  {ti.rich("desc2", {
    b: (chunks) => (
  <strong className="font-semibold text-gray-900">
    {chunks}
  </strong>
)
  })}
</p>

        <button
          onClick={() => navigate("/services/invisalign")}
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
          {ti("cta")}
          <span>→</span>
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full h-[320px] md:h-[380px] overflow-hidden">
        <Image
          src="/invisalign.webp"
          alt="Invisalign Clear Aligners"
          fill
          priority
          className="object-contain"
        />
      </div>

    </div>

  </div>
</section>

{/* ================= OUR SERVICES ================= */}
<section id="services" className="pt-10 pb-20 bg-[#f1f6fd] relative z-40">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-blue-600 font-bold text-2xl mb-2">
        {ts("tag")}
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        {ts("title")}
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        {ts("desc")}
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {services.map((service: any, index: number) => (
        <div
          key={index}
          className="
            relative bg-white rounded-3xl p-7
            border border-gray-100 shadow-md
            transition-all duration-300 ease-out
            transform-gpu perspective-[1000px]
            hover:-translate-y-3 hover:scale-105 hover:rotate-3
            hover:shadow-2xl hover:bg-blue-600
            group cursor-pointer
          "
        >

          {/* Icon */}
          <div className="
            w-16 h-16 rounded-2xl flex items-center justify-center
            bg-blue-600 text-white mb-6
            transition-all duration-300
            group-hover:bg-white group-hover:text-blue-600
          ">
            <div className="relative w-full h-full">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="
            text-xl font-semibold text-gray-900 mb-2
            transition-colors duration-300 group-hover:text-white
          ">
            {service.title}
          </h3>

          {/* Desc */}
          <p className="
            text-gray-500 text-sm leading-relaxed line-clamp-3
            transition-colors duration-300 group-hover:text-blue-100
          ">
            {service.desc}
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button
              onClick={() => navigate(service.link)}
              className="
                inline-flex items-center gap-2
                border border-blue-600 text-blue-600
                px-5 py-2 rounded-full text-sm font-semibold
                transition-all duration-300
                group-hover:border-white
                group-hover:text-white
                group-hover:bg-white/20
              "
            >
              {ts("cta")}
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

  <div className="relative z-10 w-full px-2">

    {/* Heading */}
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="text-3xl sm:text-5xl font-bold text-white">
        {tin("title")}
      </h2>

      <p className="mt-2 sm:mt-3 text-white/80 text-xs sm:text-base">
        {tin("desc")}
      </p>
    </div>

    {/* Marquee */}
    <div className="relative overflow-hidden">
      <div
        className="
          insurance-marquee
          flex gap-3 sm:gap-8 w-max
          hover:[animation-play-state:paused]
        "
      >
        {[...logos, ...logos].map((logo: any, index: number) => (
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
        <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-3xl"></div>

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
          {tw("tag")}
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {tw("title1")}{" "}
          <span className="text-blue-600">
            {tw("title2")}
          </span>
        </h2>

        <p className="text-gray-600 mb-8">
          {tw("desc")}
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {tw.raw("features").map((item: string, idx: number) => (
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
          {tw("cta")}
          <ArrowRightIcon className="w-4 h-4" />
        </button>

      </div>
    </div>
  </div>
</section>

{/* ================= FAQ ================= */}
<section className="py-20 bg-[#f1f6fd]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
        {tq("tag")}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">
        {tq("title")}
      </h2>
    </div>

    <div className="grid gap-6 xl:grid-cols-2">
      {[
        { q: tq("q1"), a: tq("a1") },
        { q: tq("q2"), a: tq("a2") },
        { q: tq("q3"), a: tq("a3") },
        { q: tq("q4"), a: tq("a4") },
        { q: tq("q5"), a: tq("a5") },
      ].map((item, index) => (
        <div key={index} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0A2540]">{item.q}</h3>
          <p className="mt-4 text-gray-600 leading-7">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= CONTACT ================= */}
<section id="contact" className="pt-10 pb-20 bg-[#f1f6fd]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* MAP */}
      <div className="w-full h-[520px] rounded-3xl overflow-hidden shadow">
        <iframe
          title="Dallas Smiles Location"
          src="https://www.google.com/maps?q=3234%20Forest%20Lane,%20Dallas,%20TX%2075234&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      {/* FORM */}
      <div>
        <p className="text-xl text-blue-600 font-semibold mb-1">
          {tc("tag")}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {tc("title")}
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {tc("subtitle")}
        </h3>

        <p className="text-gray-600 mb-4">
          {tc("desc")}
        </p>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {tc("name")}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={tc("namePlaceholder")}
                className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {tc("mobile")}
              </label>
              <input
                type="tel"
                name="mobile"
                required
                placeholder={tc("mobilePlaceholder")}
                className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {tc("message")}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder={tc("messagePlaceholder")}
              className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BUTTON + CALL */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <PhoneIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{tc("call")}</p>
                <p className="font-semibold text-gray-900">
                  +1 (972) 484-5400
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#0A2540] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#163a63] transition disabled:opacity-50"
            >
              {loading ? tc("sending") : tc("cta")}
            </button>

          </div>

          {success && (
            <p className="text-green-600 font-medium mt-2">
              {tc("success")}
            </p>
          )}

        </form>

      </div>
    </div>
  </div>
</section>
  </>
  );
}

// export default function HomePage() {
//   return <div>Home Page Working</div>;
// }