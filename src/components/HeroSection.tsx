import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react"; // Mengganti Code menjadi TrendingUp
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Gambar Latar Belakang */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg-siseworth.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay Gradasi Pintar */}
      <div className="absolute inset-0 z-0 bg-background/80 md:bg-gradient-to-r md:from-background/95 md:via-background/70 md:to-transparent" />

      {/* Konten Teks */}
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-md border border-border px-4 py-2 rounded-full mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Creative Digital Agency & Goods
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.1]"
        >
          Digital Excellence. <br />
          <span className="italic text-primary">Sustainable Impact.</span>
        </motion.h1>

        {/* Teks Deskripsi yang Sudah Disesuaikan dengan Fokus Marketing */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 leading-relaxed font-medium"
        >
          We elevate brands through strategic digital marketing and engaging
          social media campaigns, while continuing to curate our own line of
          handcrafted sustainable goods.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            {/* Ikon diperbarui agar sesuai dengan tema agensi pemasaran */}
            <TrendingUp className="w-5 h-5" />
            <span>Our Agency Services</span>
          </a>

          <Link
            to="/catalog"
            className="inline-flex items-center justify-center space-x-2 bg-card/90 backdrop-blur-sm border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary transition-all shadow-sm"
          >
            <span>Shop Eco-Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
