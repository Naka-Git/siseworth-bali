import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Sustainability",
    title: "How to Reduce Waste While Traveling in Bali",
    excerpt: "Simple tips for conscious travelers who want to minimize their environmental footprint on the Island of the Gods.",
  },
  {
    tag: "Behind the Scenes",
    title: "Meet the Artisans Behind SiseWorth",
    excerpt: "Stories from the local creators who pour their hearts into transforming waste into beautiful, meaningful products.",
  },
  {
    tag: "Impact",
    title: "The Circular Economy in Bali: Where We Stand",
    excerpt: "An honest look at Bali's waste crisis and how community-led initiatives are making a measurable difference.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const BlogSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card" id="blog">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span custom={0} variants={fadeUp} className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block">
            Insights
          </motion.span>
          <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Stories & Sustainability
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              custom={i}
              variants={fadeUp}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">
                {post.tag}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read More <ArrowRight className="w-3 h-3" />
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
