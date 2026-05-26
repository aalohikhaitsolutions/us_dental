"use client";

import { useRouter, usePathname } from "next/navigation";

export function useLocaleRouter() {
  const router = useRouter();
  const pathname = usePathname();

  const getLocale = () => {
    const segment = pathname.split("/")[1];
    return segment === "es" ? "es" : "en";
  };

 const navigate = (path: string) => {
  const locale = getLocale();

  if (locale === "en") {
    router.push(`/en${path === "/" ? "" : path}`); // ✅ force /en
  } else {
    router.push(`/es${path === "/" ? "" : path}`);
  }
};

  const switchLocale = (locale: "en" | "es") => {
  let path = pathname;

  // ✅ Remove BOTH /es and /en if present
  if (path.startsWith("/es")) {
    path = path.slice(3) || "/";
  } else if (path.startsWith("/en")) {
    path = path.slice(3) || "/";
  }

  // ✅ Ensure valid path
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  // ✅ Navigate cleanly
  if (locale === "en") {
    router.push(path);
  } else {
    router.push(path === "/" ? "/es" : `/es${path}`);
  }
};

  return { navigate, getLocale, switchLocale };
}