import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
// Menggunakan ProductsSection bawaan asli (From Waste to Wonder)
import ProductsSection from "@/components/ProductsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />

      {/* Bagian "Worthy Products & From Waste to Wonder" kembali hadir di sini */}
      <ProductsSection />

      <WorkshopsSection />
      <BlogSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
