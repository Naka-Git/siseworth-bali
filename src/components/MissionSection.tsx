import { motion } from "framer-motion";
import { Recycle, Users, Leaf, Globe } from "lucide-react";

const stats = [
  { icon: Recycle, value: "50kg+", label: "Plastic Repurposed" },
  { icon: Users, value: "20+", label: "Local Artisans Empowered" },
  { icon: Leaf, value: "1,200+", label: "Eco-Products Created" },
  { icon: Globe, value: "10+", label: "Workshops Hosted" },
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

const MissionSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background" id="mission">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block"
            >
              Our Mission
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Eco-Products ×{" "}
              <span className="italic text-primary">Sustainable Tourism</span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-4"
            >
              SiseWorth was born from a simple belief: waste is just a resource
              in the wrong place. Based in Bali, we collect discarded materials
              — plastic, glass, textiles — and transform them into beautiful,
              functional products through the hands of local artisans.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Beyond products, we invite travelers to experience sustainability
              firsthand through our immersive workshops, turning tourism into a
              force for environmental good.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 text-center border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
