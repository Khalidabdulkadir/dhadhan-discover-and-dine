import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import logo from "@/assets/dhadhan-logo.png";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Preview", href: "#preview" },
  { name: "About", href: "#about" },
];

const openWhatsAppForAPK = () => {
  const phoneNumber = "254794940900";
  const message = encodeURIComponent("Hi! I want to test the Dhadhan App. I have an Android device.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Dhadhan App Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-foreground">
            Dhadhan<span className="text-brand">App</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-muted-foreground hover:text-brand transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={openWhatsAppForAPK}
            className="border-fresh text-fresh hover:bg-fresh hover:text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Install APK
          </Button>
          <Button
            variant="default"
            onClick={scrollToSignup}
          >
            Join the Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border/50"
          >
            <nav className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-brand transition-colors font-medium py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="outline"
                onClick={openWhatsAppForAPK}
                className="border-fresh text-fresh hover:bg-fresh hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Install APK
              </Button>
              <Button variant="default" onClick={scrollToSignup}>
                Join the Waitlist
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
