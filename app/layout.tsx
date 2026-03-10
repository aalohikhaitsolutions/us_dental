import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";

export const metadata: Metadata = {
  title: "Dallas Smiles",
  description: "Dental & Orthodontics in Dallas, TX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </body>
    </html>
  );
}