import { useEffect } from "react"; // Tambahkan ini untuk efek gulir
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ManualProductsSection } from "@/components/ManualProductsSection";

const Catalog = () => {
  // Efek ini memaksa browser selalu kembali ke kordinat paling atas (0, 0) saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Saya menambahkan pt-32 (padding-top ekstra) agar judulnya tidak tertutup Navbar
    <div className="min-h-screen pt-32 bg-[#fcfbf9]">
      <Navbar />
      <ManualProductsSection />
      <FooterSection />
    </div>
  );
};

export default Catalog;
