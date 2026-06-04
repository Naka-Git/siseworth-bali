import { motion } from "framer-motion";
import { TrendingUp, Share2, ShoppingBag } from "lucide-react"; // Mengganti ikon monitor dengan TrendingUp

const services = [
  {
    icon: TrendingUp, // Ikon grafik naik untuk melambangkan pertumbuhan penjualan
    title: "Brand Strategy & Marketing",
    desc: "Helping businesses expand their reach and boost sales through targeted digital marketing strategies and compelling creative campaigns.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Developing aesthetic content calendars and engagement strategies to elevate your brand's digital presence and visibility.",
  },
  {
    icon: ShoppingBag,
    title: "Sustainable Goods",
    desc: "Designing and selling our signature eco-products, proving that beautiful design and environmental responsibility can coexist.",
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

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card" id="services">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Our Expertise
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-background p-8 rounded-3xl border border-border hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
