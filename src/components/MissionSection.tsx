import { motion } from "framer-motion";
import { Code2, Recycle, Megaphone, Users } from "lucide-react";

// Metrik sekarang mencerminkan dua sisi bisnis: Digital & Eco
const stats = [
  { icon: Code2, value: "100%", label: "Digital Excellence" },
  { icon: Recycle, value: "500kg+", label: "Plastic Repurposed" },
  { icon: Megaphone, value: "Strategic", label: "Brand Growth" },
  { icon: Users, value: "20+", label: "Artisans Supported" },
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
    <section
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      id="mission"
    >
      {/* Dekorasi latar belakang yang halus dan modern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 rounded-l-[100px] blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Sisi Kiri: Teks Misi */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-accent mb-6 block"
            >
              Our Mission
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.1]"
            >
              Designing the <span className="italic text-primary">Future</span>,
              <br />
              Preserving the <span className="italic text-primary">Earth</span>.
            </motion.h2>
            <motion.div
              custom={2}
              variants={fadeUp}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                SiseWorth was born from a dual passion: crafting pixel-perfect
                digital experiences and protecting the island we call home.
                Based in Bali, we realized that modern brands need more than
                just good aesthetics—they need a tangible purpose.
              </p>
              <p>
                We bridge the gap between the virtual and the physical. While
                our digital studio elevates your online presence through
                cutting-edge UI design and strategic social media, our workshop
                continues to transform local waste into handcrafted sustainable
                goods.
              </p>
              <p className="font-medium text-foreground">
                We believe in building a better world—both on screen and
                offline.
              </p>
            </motion.div>
          </motion.div>

          {/* Sisi Kanan: Kartu Statistik Modern */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i + 3}
                variants={fadeUp}
                className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center border border-border hover:bg-card hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
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
