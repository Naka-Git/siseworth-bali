import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9]">
      {" "}
      {/* Menggunakan warna latar terang yang estetik */}
      <Navbar />
      <main className="flex-grow flex items-center pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sisi Kiri: Angka Besar yang Bold */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="text-[12rem] md:text-[16rem] font-display font-bold text-primary/10 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Off The <br />
                <span className="italic text-primary">Beaten Path.</span>
              </h1>
            </div>
          </motion.div>

          {/* Sisi Kanan: Penjelasan dan Tombol */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-border mb-6">
              <Compass className="w-10 h-10 text-primary animate-[spin_4s_linear_infinite]" />
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-md">
              It looks like you've strayed too far from the SiseWorth map.
              Halaman The page you're looking for may have moved, been renamed,
              or simply doesn't exist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all group"
              >
                <span>Return to Basecamp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/catalog"
                className="inline-flex items-center space-x-2 bg-transparent border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary transition-all"
              >
                <span>View Catalog</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default NotFound;
