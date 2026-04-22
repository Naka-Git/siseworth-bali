import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/#mission", label: "Mission" },
  { href: "/#products", label: "Products" },
  { href: "/catalog", label: "Catalog" },
  { href: "/#blog", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fungsi ini menyatukan logika render agar kode tidak berulang-ulang
  const renderNavLink = (
    link: { href: string; label: string },
    isMobile: boolean,
  ) => {
    const className = isMobile
      ? "text-foreground/70 hover:text-primary py-2 font-medium block"
      : `text-sm font-medium transition-colors hover:text-primary ${
          isSolid ? "text-foreground/70" : "text-primary-foreground/80"
        }`;

    const handleClick = () => {
      if (isMobile) setMobileOpen(false);
    };

    return link.href.includes("#") ? (
      <a
        key={link.href}
        href={link.href}
        onClick={handleClick}
        className={className}
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.href}
        to={link.href}
        onClick={handleClick}
        className={className}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          {navLinks.map((link) => renderNavLink(link, false))}
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
              {navLinks.map((link) => renderNavLink(link, true))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
