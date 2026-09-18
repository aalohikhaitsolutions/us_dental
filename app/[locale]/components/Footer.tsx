"use client";

import Image from "next/image";
import { FaHeart, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../../public/dentallogo.png";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { useLocaleRouter } from "../utils/navigation";

export default function Footer() {
  const { navigate } = useLocaleRouter();
  const t = useTranslations("navbar");
  const ft = useTranslations("footer");

  const scrollToSection = (id: string) => {
    navigate("");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="w-full bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src={logo} alt="Dallas Smiles" height={90} width={90} />
              <div>
                <p className="text-2xl font-semibold">Dallas Smiles</p>
                <p className="text-sm text-white/70">
                  Dental & Orthodontics
                </p>
              </div>
            </div>

            <p className="text-white/80 text-sm">
              Experience compassionate, state-of-the-art dental care for your entire family.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A2540] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A2540] transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A2540] transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-white">
                {t("home")}
              </li>
              <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-white">
                {t("services")}
              </li>
              <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-white">
                {t("about")}
              </li>
              <li onClick={() => scrollToSection("why")} className="cursor-pointer hover:text-white">
                {t("why")}
              </li>
              <li onClick={() => navigate("/careers")} className="cursor-pointer hover:text-white">
                {t("careers")}
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold mb-5">Services</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>Invisalign</li>
              <li>Root Canal</li>
              <li>Teeth Cleaning</li>
              <li>Implants</li>
              <li>Wisdom Teeth</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold mb-5">Contact</h4>
            <div className="space-y-4 text-white/80 text-sm">

              <a
                href="https://maps.app.goo.gl/c7LAa7PWotVtkvii7"
                target="_blank"
                className="flex items-center gap-2 hover:text-sky-300"
              >
                <MapPinIcon className="w-4 h-4 text-sky-300" />
                3234 Forest Lane, Dallas, TX
              </a>

              <a
                href="tel:+19724845400"
                className="flex items-center gap-2 hover:text-sky-300"
              >
                <PhoneIcon className="w-4 h-4 text-sky-300" />
                (972) 484-5400
              </a>

              <a
                href="mailto:info@dallassmilesco.com"
                className="flex items-center gap-2 hover:text-sky-300"
              >
                <EnvelopeIcon className="w-4 h-4 text-sky-300" />
                info@dallassmilesco.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
<div
  className={`border-t border-white/10 mt-12 pt-6 transition-all duration-700 ${
    "opacity-100 translate-y-0"
  }`}
>
  <div className="flex flex-col items-start gap-2">

    {/* MAIN TEXT */}
    <p className="text-white/70 text-sm flex flex-wrap items-center gap-2">
      © {new Date().getFullYear()}
      <span className="font-semibold text-white">
        Dallas Smiles Dental & Orthodontics
      </span>
      <span>|</span>
      <span className="flex items-center gap-1">
        {ft("made")} <FaHeart className="text-red-500" /> by Amplinovians
      </span>
    </p>

    {/* TAGLINE BELOW (LEFT SIDE) */}
    <p className="text-white/50 text-xs">
      {ft("tagline")}
    </p>

  </div>
</div>
      </div>
    </footer>
  );
}