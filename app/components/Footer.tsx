"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../public/dentallogo.png";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#173B63] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-0 mb-3">
              <Image
                src={logo}
                alt="Dallas Smiles"
                height={110}
                width={110}
                className="h-28 w-auto"
              />
              <div>
                <p className="text-2xl font-semibold">Dallas Smiles</p>
                <p className="text-sm text-white/70">
                  Dental & Orthodontics
                </p>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Providing compassionate, state-of-the-art dental care for Dallas
              families.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/people/Dallas-Smiles-Dental-Orthodontics/61588607086599/?mibextid=wwXIfr&rdid=k6BcRicb9yPqfPWP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17V6hpqaiK%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#173B63] transition"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="https://www.instagram.com/dallas_smiles_dental?igsh=MThmdncyM2NlNW8zNA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#173B63] transition"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#173B63] transition"
              >
                <FaTwitter className="text-sm" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li
                onClick={() => scrollToSection("home")}
                className="cursor-pointer hover:text-white"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection("services")}
                className="cursor-pointer hover:text-white"
              >
                Services
              </li>
              <li
                onClick={() => scrollToSection("about")}
                className="cursor-pointer hover:text-white"
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSection("testimonial")}
                className="cursor-pointer hover:text-white"
              >
                Testimonials
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer hover:text-white"
              >
                Contact
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold mb-5">Our Services</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Orthodontics</li>
              <li>Pediatric Dentistry</li>
              <li>Dental Implants</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold mb-5">Contact Us</h4>
            <div className="space-y-4 text-white/80 text-sm">
              <p>
                3234 Forest Lane
                <br />
                Dallas, TX 75234
              </p>
              <p>(972) 484-5400</p>
              <p>info@dallassmiles.com</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR — DO NOT CHANGE TEXT */}
        <div
          className={`border-t border-white/10 mt-12 pt-6 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center lg:text-left">
            <p className="text-white/70 text-sm flex flex-wrap items-center gap-2 justify-center lg:justify-start">
              © {new Date().getFullYear()}
              <span className="font-semibold text-white">
                Dallas Smiles Dental & Orthodontics
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-red-500" /> by Amplinovians.
              </span>
            </p>

            <p className="text-white/50 text-xs mt-1">
              Creating healthy smiles with care & trust
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}