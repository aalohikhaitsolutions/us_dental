"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp, FaTooth } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#0A2540] text-white 
                     flex items-center justify-center shadow-lg 
                     hover:scale-105 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/919032035039"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white 
                   flex items-center justify-center shadow-lg 
                   hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Book Appointment */}
      <button
      
        onClick={scrollToContact}
        className="flex items-center gap-2 px-5 py-3 
                   rounded-full bg-[#0A2540] text-white 
                   font-semibold shadow-lg 
                   hover:scale-105 transition"
      >
        <FaTooth size={18} />
        Book Appointment
      </button>
    </div>
  );
}