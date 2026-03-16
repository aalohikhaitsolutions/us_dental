"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const images: string[] = [
    "/hero-5.png",
    "/hero2.jpeg",
    "/hero-333.jpg",
    "/hero4.jpeg",
  ];

  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Dental Hero"
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover object-right-top
            transition-opacity duration-700
            ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}