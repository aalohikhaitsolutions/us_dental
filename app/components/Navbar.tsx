"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  HomeIcon,
  InformationCircleIcon,
  SparklesIcon,
  StarIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import {
  FaTeeth,
  FaTeethOpen,
  FaTooth,
  FaCrown,
  FaHandSparkles,
  FaPlusCircle,
  FaCut,
  FaScrewdriver,
  FaTools,
  FaSyringe,
  FaSun,
  FaLightbulb,
} from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsServicesOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const handleNavClick = (id: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { name: "Orthodontics split into Invisalign", path: "/services/invisalign" },
    { name: "Crowns", path: "/services/crowns" },
    { name: "Deep Cleaning", path: "/services/deep-cleaning" },
    { name: "Extractions", path: "/services/extractions" },
    { name: "Fillings", path: "/services/fillings" },
    { name: "Gingivectomy", path: "/services/gingivectomy" },
    { name: "Implants", path: "/services/implants" },
    { name: "Restoration", path: "/services/restoration" },
    { name: "Root Canal", path: "/services/root-canal" },
    { name: "Teeth Cleaning", path: "/services/teeth-cleaning" },
    { name: "Dentures", path: "/services/dentures" },
    { name: "Wisdom Teeth", path: "/services/wisdom-teeth" },
  ];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Braces":
        return <FaTeethOpen className="w-5 h-5" />;
      case "Crowns":
        return <FaCrown className="w-5 h-5" />;
      case "Deep Cleaning":
        return <FaHandSparkles className="w-5 h-5" />;
      case "Extractions":
        return <FaTooth className="w-5 h-5" />;
      case "Fillings":
        return <FaPlusCircle className="w-5 h-5" />;
      case "Gingivectomy":
        return <FaCut className="w-5 h-5" />;
      case "Implants":
        return <FaScrewdriver className="w-5 h-5" />;
      case "Restoration":
        return <FaTools className="w-5 h-5" />;
      case "Root Canal":
        return <FaSyringe className="w-5 h-5" />;
      case "Teeth Cleaning":
        return <FaTeeth className="w-5 h-5" />;
      case "Teeth Whitening":
        return <FaSun className="w-5 h-5" />;
      case "Wisdom Teeth":
        return <FaLightbulb className="w-5 h-5" />;
      default:
        return <FaTooth className="w-5 h-5" />;
    }
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-12 text-sm font-medium">

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-sky-300" />
                <span>3234 Forest Lane, Dallas, TX 75234</span>
              </div>

              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-sky-300" />
                <span>Monday to Friday 9-6 PM and Saturday by Appointment only</span>
              </div>
            </div>

            <a
              href="tel:+19724845400"
              className="flex items-center gap-2 font-semibold hover:text-sky-300 transition"
            >
              <PhoneIcon className="w-5 h-5 text-sky-300" />
              <span>(972) 484-5400</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-24">

          {/* LOGO */}
          <button
          
            onClick={() => router.push("/")}
            className="flex items-center gap-2"
          >
            <Image
              src="/dentallogo.png"
              alt="Dallas Smiles"
              width={90}
              height={90}
            />
            <div>
              <h1 className="text-3xl font-semibold text-[#0A2540]">
                Dallas Smiles
              </h1>
              <p className="text-sm uppercase text-gray-500">
                Dental & Orthodontics
              </p>
            </div>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center ml-auto gap-8">

            <button
              onClick={() => handleNavClick("home")}
              className="nav-link group"
            >
              <HomeIcon className="w-5 h-5 transition-colors duration-300 group-hover:text-[#0A2540]" />
              Home
            </button>

            <button
              onClick={() => handleNavClick("about")}
              className="nav-link group"
            >
              <InformationCircleIcon className="w-5 h-5" />
              About Us
            </button>

            {/* SERVICES DROPDOWN */}
<div ref={dropdownRef} className="relative">

  <button
    onClick={() => setIsServicesOpen(!isServicesOpen)}
    className="nav-link group"
  >
    <SparklesIcon className="w-5 h-5" />
    Our Services
    <ChevronDownIcon
      className={`w-4 h-4 transition-transform ${
        isServicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {isServicesOpen && (
    <div className="absolute top-full left-0 mt-4 w-[520px] bg-white rounded-2xl shadow-2xl border p-6 z-50">

      <div className="grid grid-cols-2 gap-4">

        {services.map((service) => (
          <Link
  key={service.name}
  href={service.path}
  className="group flex items-center gap-3 w-full h-full px-4 py-3 rounded-xl
  text-sm font-medium text-gray-700
  hover:bg-[#0A2540] hover:text-white
  transition-all duration-200"
>
  <div
    className="w-9 h-9 flex items-center justify-center rounded-lg
    bg-blue-50 text-[#0A2540]
    transition-all duration-200
    group-hover:bg-white group-hover:text-blue-600"
  >
    {getServiceIcon(service.name)}
  </div>

  <span className="group-hover:text-white">
    {service.name}
  </span>
</Link>
        ))}

      </div>
    </div>
  )}
</div>

            <button
              onClick={() => handleNavClick("why")}
              className="nav-link group"
            >
              <StarIcon className="w-5 h-5" />
              Why Choose Us
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="nav-link group"
            >
              <PhoneIcon className="w-5 h-5" />
              Contact Us
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="bg-[#0A2540] hover:bg-[#163a63] text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Book Appointment
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
}