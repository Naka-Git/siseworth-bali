import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import ProductsSection from "@/components/ProductsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Mematikan fitur "pengingat posisi scroll" bawaan browser
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Logika untuk mengarahkan layar
    if (location.hash) {
      // Jika URL memiliki hash (misal: /#services), biarkan meluncur mulus ke sana
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Jika tidak ada hash (hanya di-reload atau buka '/'), paksa INSTAN ke paling atas
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <ServicesSection />
      <MissionSection />
      <ProductsSection />

      <FooterSection />
    </div>
  );
};

export default Index;
