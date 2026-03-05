import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="SiseWorth eco products in Bali" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/70">
              Bali · Eco-Products · Sustainable Tourism
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 text-primary-foreground">
            Transforming Waste into{" "}
            <span className="italic text-primary">Worthy</span>{" "}
            Wonders
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-10 max-w-lg leading-relaxed">
            We turn Bali's waste into beautiful, handcrafted eco-products while offering immersive sustainability workshops for conscious travelers.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Shop Eco-Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#workshops"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-colors text-sm sm:text-base"
            >
              Join a Workshop
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
