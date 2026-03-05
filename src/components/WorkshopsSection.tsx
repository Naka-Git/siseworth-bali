import { motion } from "framer-motion";
import { Calendar, Users, Clock, ArrowRight } from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";

const workshops = [
  {
    title: "Plastic Weaving",
    desc: "Learn to weave recycled plastic into beautiful mats and bags.",
    duration: "2 hours",
    audience: "All ages",
  },
  {
    title: "Eco-Jewelry Making",
    desc: "Craft unique earrings and bracelets from reclaimed materials.",
    duration: "1.5 hours",
    audience: "Teens & Adults",
  },
  {
    title: "Glass Art Workshop",
    desc: "Transform broken glass into stunning mosaic pieces.",
    duration: "3 hours",
    audience: "Adults",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const WorkshopsSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background" id="workshops">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span custom={0} variants={fadeUp} className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block">
                Workshops & Experiences
              </motion.span>
              <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Create with{" "}
                <span className="italic text-primary">Purpose</span>
              </motion.h2>
              <motion.p custom={2} variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
                Perfect for tourists, students, or corporate team building. Our hands-on workshops let you experience the art of upcycling while contributing to Bali's sustainability movement.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden"
            >
              <img src={workshopImg} alt="SiseWorth workshop in Bali" className="w-full h-auto" />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:pt-20"
          >
            {workshops.map((ws, i) => (
              <motion.div
                key={ws.title}
                custom={i}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-display text-xl font-semibold mb-2">{ws.title}</h3>
                <p className="text-muted-foreground mb-4">{ws.desc}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {ws.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {ws.audience}</span>
                </div>
              </motion.div>
            ))}

            <motion.a
              custom={3}
              variants={fadeUp}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
            >
              <Calendar className="w-4 h-4" />
              Book Your Slot
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
