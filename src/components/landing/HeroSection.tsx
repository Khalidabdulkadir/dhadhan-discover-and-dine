import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Utensils, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup-hero.png";

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fresh/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span className="text-sm font-medium text-brand">
                Coming Soon — Join the Waitlist!
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              Discover{" "}
              <span className="text-gradient-brand">Delicious Food</span>
              <br />
              <span className="text-foreground">Near You</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Explore local restaurants, browse menus, and find exclusive offers.
              Your next favorite meal is just a tap away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
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

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border/50">
                <Utensils className="w-4 h-4 text-brand" />
                <span className="text-sm font-medium text-foreground">500+ Restaurants</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border/50">
                <MapPin className="w-4 h-4 text-fresh" />
                <span className="text-sm font-medium text-foreground">Near You</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border/50">
                <Star className="w-4 h-4 text-warm" />
                <span className="text-sm font-medium text-foreground">Top Rated</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">Restaurants</p>
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

          {/* Phone Mockup - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden md:flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-fresh/20 blur-3xl rounded-full scale-75" />

              {/* Phone image */}
              <motion.img
                src={appMockup}
                alt="Dhadhan App Preview"
                className="relative w-56 md:w-64 lg:w-72 xl:w-80 drop-shadow-2xl rounded-2xl"
                animate={{ y: [0, -8, 0] }}
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
                className="absolute -left-4 top-1/4 bg-card p-3 rounded-xl shadow-lg border border-border/50"
              >
                <span className="text-xl">🍕</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-2 top-1/3 bg-card p-3 rounded-xl shadow-lg border border-border/50"
              >
                <span className="text-xl">🍔</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-2 bottom-1/3 bg-card p-3 rounded-xl shadow-lg border border-border/50"
              >
                <span className="text-xl">🥗</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
