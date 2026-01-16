import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup-hero.png";

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fresh/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span className="text-sm font-medium text-brand">
                Coming Soon — Join the Waitlist!
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Discover{" "}
              <span className="text-gradient-brand">Delicious Food</span> Near
              You
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Explore local restaurants, menus, and exclusive offers at your
              fingertips. Your next favorite meal is just a tap away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToSignup}
                className="group"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" onClick={scrollToSignup}>
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">Local Restaurants</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  2K+
                </p>
                <p className="text-sm text-muted-foreground">Early Signups</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  50+
                </p>
                <p className="text-sm text-muted-foreground">Cuisines</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-fresh/30 blur-3xl rounded-full scale-75" />

              {/* Phone image */}
              <motion.img
                src={appMockup}
                alt="Dhadhan App Preview"
                className="relative w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating food badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-1/4 bg-card p-3 rounded-2xl shadow-lg"
              >
                <span className="text-2xl">🍕</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 top-1/2 bg-card p-3 rounded-2xl shadow-lg"
              >
                <span className="text-2xl">🍔</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute left-0 bottom-1/4 bg-card p-3 rounded-2xl shadow-lg"
              >
                <span className="text-2xl">🥗</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
