import { motion } from "framer-motion";
import logo from "@/assets/dhadhan-logo.jpg";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Dhadhan App Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-foreground">
            Dhadhan<span className="text-brand">App</span>
          </span>
        </a>

        {/* CTA Button */}
        <Button variant="default" size="sm" className="md:hidden">
          Join Waitlist
        </Button>
        <Button variant="default" className="hidden md:inline-flex">
          Join the Waitlist
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
