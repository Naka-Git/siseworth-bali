import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react"; // Menambahkan ArrowLeft untuk tombol mundur
import { Link } from "react-router-dom";

// Data produk sekarang dilengkapi dengan gambar dan deskripsi untuk slider
const previewProducts = [
  {
    name: "Ganesha Incense Burner",
    category: "Plastic • Home Decor",
    image: "/product1.jpg",
    desc: "Transform your space into a sanctuary of peace with this beautifully crafted Lord Ganesha incense burner.",
  },
  {
    name: "Balinese Keychain",
    category: "Plastic • Accessories",
    image: "/product2.jpg",
    desc: "An exquisite high-relief keychain beautifully blending cultural heritage with detailed artisanal craftsmanship.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Collection",
    desc: "Sourcing waste materials from local communities across Bali.",
  },
  {
    step: "02",
    title: "Sorting",
    desc: "Carefully categorizing plastics, glass, and textiles by type.",
  },
  {
    step: "03",
    title: "Crafting",
    desc: "Local artisans transform sorted waste into beautiful products.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
};

const ProductsSection = () => {
  // State untuk melacak produk mana yang sedang ditampilkan (dimulai dari 0)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk geser ke kanan (Next)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % previewProducts.length);
  };

  // Fungsi untuk geser ke kiri (Prev)
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + previewProducts.length) % previewProducts.length,
    );
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card" id="products">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block"
          >
            Eco-Catalog
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Worthy Products
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Swipe through our latest handcrafted treasures, made with care by
            Balinese artisans.
          </motion.p>
        </motion.div>

        {/* --- AREA SLIDER MULAI DI SINI --- */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 bg-background p-6 md:p-8 rounded-3xl border border-border shadow-sm">
          {/* Sisi Kiri: Gambar Slider */}
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex} // Key ini penting agar framer-motion tahu kapan harus menganimasi
                src={previewProducts[currentIndex].image}
                alt={previewProducts[currentIndex].name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>

          {/* Sisi Kanan: Informasi & Kontrol Slider */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <div className="min-h-[160px]">
              {" "}
              {/* Tinggi minimal agar tombol tidak naik-turun saat teks berubah */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2">
                    {previewProducts[currentIndex].category}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {previewProducts[currentIndex].name}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {previewProducts[currentIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tombol Navigasi Slider */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Previous product"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Next product"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              <span className="text-sm font-medium text-muted-foreground ml-4">
                {currentIndex + 1} / {previewProducts.length}
              </span>
            </div>

            {/* Tombol ke halaman katalog */}
            <div className="pt-4">
              <Link
                to="/catalog"
                className="inline-flex items-center space-x-2 text-primary font-medium hover:underline group"
              >
                <span>Explore All in Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        {/* --- AREA SLIDER SELESAI --- */}

        {/* Process - "From Waste to Wonder" */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            custom={0}
            variants={fadeUp}
            className="font-display text-2xl font-bold text-center mb-12"
          >
            From Waste to Wonder
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i + 1}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-display text-5xl font-bold text-primary/20 mb-3">
                  {step.step}
                </div>
                <h4 className="font-display text-xl font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
