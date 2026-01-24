import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/dhadhan-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img
                src={logo}
                alt="Dhadhan App"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold">
                Dhadhan<span className="text-brand">App</span>
              </span>
            </div>
            <p className="text-background/60 max-w-xs">
              Discover delicious food near you. Coming soon to your favorite app
              store.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-brand hover:text-brand-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-brand hover:text-brand-foreground transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-brand hover:text-brand-foreground transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="tel:+254794940900"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-brand hover:text-brand-foreground transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-background/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© 2025 Dhadhan App. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="hover:text-background transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <a
                href="#"
                className="hover:text-background transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="tel:+254794940900"
                className="hover:text-background transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
