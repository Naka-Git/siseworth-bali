import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import productsImg from "@/assets/products-showcase.jpg";

const processSteps = [
  { step: "01", title: "Collection", desc: "Sourcing waste materials from local communities across Bali." },
  { step: "02", title: "Sorting", desc: "Carefully categorizing plastics, glass, and textiles by type." },
  { step: "03", title: "Crafting", desc: "Local artisans transform sorted waste into beautiful products." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const ProductsSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card" id="products">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span custom={0} variants={fadeUp} className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block">
            Eco-Catalog
          </motion.span>
          <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Worthy Products
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
            Each piece tells a story — from discarded waste to handcrafted treasure, made with care by Balinese artisans.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden"
          >
            <img src={productsImg} alt="SiseWorth eco-products collection" className="w-full h-auto" />
          </motion.div>

          <div className="space-y-4">
            {["Recycled Plastic Jewelry", "Woven Textile Bags", "Glass Art Decor", "Upcycled Home Accessories"].map((product, i) => (
              <motion.div
                key={product}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-center justify-between p-5 rounded-2xl border border-border hover:bg-background transition-colors group cursor-pointer"
              >
                <span className="font-medium text-lg">{product}</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 custom={0} variants={fadeUp} className="font-display text-2xl font-bold text-center mb-12">
            From Waste to Wonder
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} custom={i + 1} variants={fadeUp} className="text-center">
                <div className="font-display text-5xl font-bold text-primary/20 mb-3">{step.step}</div>
                <h4 className="font-display text-xl font-semibold mb-2">{step.title}</h4>
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
