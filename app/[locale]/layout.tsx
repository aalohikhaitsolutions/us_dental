// import "./globals.css";
// import type { Metadata } from "next";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import FloatingButtons from "./components/FloatingButtons";
// import ScrollToTop from "./components/ScrollToTop";

// export const metadata: Metadata = {
//   title: "Dallas Smiles",
//   description: "Dental & Orthodontics in Dallas, TX",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white text-gray-900">
//         <Navbar />
//         {children}
//         <Footer />
//         <FloatingButtons />
//         <ScrollToTop />
//       </body>
//     </html>
//   );
// }

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import FloatingButtons from "../[locale]/components/FloatingButtons";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!["en", "es"].includes(locale)) {
    notFound();
  }

  let messages;

  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
  
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons /> 
      </NextIntlClientProvider>
    
);
}