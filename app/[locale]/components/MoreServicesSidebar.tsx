"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMoreServices } from "../../services/serviceCatalog";

export default function MoreServicesSidebar({
  title = "More Services",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentSlug = segments[segments.length - 1] || "";
  const locale = segments[0] === "es" ? "es" : "en";
  const localePrefix = locale === "es" ? "/es" : "/en";

  const services = getMoreServices(currentSlug);

  return (
    <div className={`rounded-3xl bg-[#0A2540] p-8 text-white shadow-xl ${className}`.trim()}>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.slug} className="bg-white/15 px-4 py-3 rounded-xl">
            <Link
              href={`${localePrefix}/services/${service.slug}`}
              className="block hover:text-sky-200 transition"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
