import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Tourist from Australia",
    quote: "The plastic weaving workshop was the highlight of our Bali trip. Such a meaningful experience — we left with beautiful handmade bags and a new perspective on waste.",
  },
  {
    name: "Ketut W.",
    role: "Local Artisan",
    quote: "SiseWorth gave me a way to earn a living while protecting the island I love. Every piece I create carries the spirit of Bali.",
  },
  {
    name: "David & Emma",
    role: "Sustainable Travel Bloggers",
    quote: "Finally, a brand that walks the talk. The quality of their upcycled products is incredible — you'd never guess these were once waste.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background" id="testimonials">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span custom={0} variants={fadeUp} className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block">
            Voices
          </motion.span>
          <motion.h2 custom={1} variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold">
            What People Say
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={fadeUp}
              className="bg-card rounded-2xl p-8 border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
