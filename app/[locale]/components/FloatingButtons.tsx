"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaTooth, FaPhoneAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

const BOOK_APPOINTMENT_URL = "https://patientviewer.com/?RSID=3437333638&CID=30&C=1359&TCP=.1a3678";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  const tfb = useTranslations("floating");

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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#0A2540] text-white 
                     flex items-center justify-center shadow-lg 
                     hover:scale-105 transition"
          aria-label={tfb("top")}
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {/* Call */}
      <a
        href="tel:+19724845400"
        className="w-12 h-12 rounded-full bg-[#22C55E] text-white 
                   flex items-center justify-center shadow-lg 
                   hover:scale-105 transition"
        aria-label={tfb("call")}
      >
        <FaPhoneAlt size={18} />
      </a>

      {/* Book Appointment */}
      <a
        href={BOOK_APPOINTMENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 
                   rounded-full bg-[#0A2540] text-white 
                   font-semibold shadow-lg 
                   hover:scale-105 transition"
        aria-label={tfb("book")}
      >
        <FaTooth size={18} />
        {tfb("book")}
      </a>

    </div>
  );
}