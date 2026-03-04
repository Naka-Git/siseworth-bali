import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProductsSection from "@/components/ProductsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ProductsSection />
      <WorkshopsSection />
      <BlogSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
