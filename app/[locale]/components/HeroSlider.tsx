"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IMAGES: string[] = [
  "/hero-5.png",
  "/hero2.jpeg",
  "/hero-3.png",
  "/hero4.jpeg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      
      {/* Images */}
      {IMAGES.map((img, index) => (
        <Image
  key={index}
  src={img}
  alt="Dental Hero"
  fill
  priority={index === 0}
  sizes="100vw"
  className={`
    absolute inset-0
    object-cover
    transition-opacity duration-700 ease-in-out
    object-[70%_center] scale-100
    md:object-right-top md:scale-100
    ${index === current ? "opacity-100" : "opacity-0"}
  `}
/>
      ))}

      {/* Overlay (important for text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/80 via-[#0A2540]/50 to-transparent md:from-[#0A2540]/70" />

    </div>
  );
}