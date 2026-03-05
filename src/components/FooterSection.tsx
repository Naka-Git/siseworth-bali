import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const FooterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-primary-foreground" id="contact">
      {/* CTA Band */}
      <div className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Create Together
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-md mx-auto">
            Interested in a collaboration, bulk order, or workshop booking? We'd love to hear from you.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-primary-foreground/10 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold">SiseWorth</div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm text-primary-foreground/60">
            <a href="https://instagram.com/siseworth.bali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary-foreground transition-colors">
              <Instagram className="w-4 h-4" /> @siseworth.bali
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Bali, Indonesia
            </span>
            <a href="mailto:hello@siseworth.com" className="flex items-center gap-1 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" /> hello@siseworth.com
            </a>
          </div>

          <div className="text-sm text-primary-foreground/40">
            © 2026 SiseWorth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
