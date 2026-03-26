import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
// 1. Tambahkan useLocation di sini
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/#mission", label: "Mission" },
  { href: "/#products", label: "Products" },
  { href: "/catalog", label: "Catalog" },
  { href: "/#workshops", label: "Workshops" },
  { href: "/#blog", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 2. Ambil informasi URL saat ini
  const location = useLocation();

  // 3. Logika Pintar: Navbar solid jika sudah di-scroll ATAU jika BUKAN di halaman utama
  const isHome = location.pathname === "/";
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        /* Menggunakan isSolid sebagai ganti scrolled */
        isSolid
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <Leaf
            className={`w-6 h-6 ${isSolid ? "text-primary" : "text-primary-foreground"}`}
          />
          <span
            className={`font-display text-xl font-bold ${isSolid ? "text-foreground" : "text-primary-foreground"}`}
          >
            SiseWorth
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.includes("#") ? (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isSolid ? "text-foreground/70" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isSolid ? "text-foreground/70" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${isSolid ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) =>
                link.href.includes("#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground/70 hover:text-primary py-2 font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground/70 hover:text-primary py-2 font-medium"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
