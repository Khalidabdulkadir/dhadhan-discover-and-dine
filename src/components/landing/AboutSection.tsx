import { motion } from "framer-motion";
import { Heart, Users, Utensils } from "lucide-react";
import logo from "@/assets/dhadhan-logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-brand uppercase tracking-wide">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Built by <span className="text-gradient-brand">Food Lovers</span>,
              for Food Lovers
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Dhadhan App was born from a simple idea: make discovering great
                local food easy, fun, and rewarding. We're on a mission to connect
                food enthusiasts with the best restaurants in their neighborhood.
              </p>
              <p>
                Whether you're craving comfort food or exploring new cuisines, our
                community-driven platform helps you find your next favorite meal
                while supporting local businesses.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quality First</h4>
                  <p className="text-sm text-muted-foreground">
                    Only the best local spots
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-fresh-light flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-fresh" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Community Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    Real reviews, real people
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Support Local</h4>
                  <p className="text-sm text-muted-foreground">
                    Helping businesses thrive
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logo/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-fresh/20 blur-3xl rounded-full scale-150" />

              {/* Logo container */}
              <div className="relative bg-card p-12 md:p-16 rounded-3xl shadow-xl border border-border">
                <img
                  src={logo}
                  alt="Dhadhan App Logo"
                  className="w-40 h-40 md:w-52 md:h-52 object-contain"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand rounded-full animate-pulse-soft" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-fresh rounded-full animate-pulse-soft" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
