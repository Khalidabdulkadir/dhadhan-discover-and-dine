import { motion } from "framer-motion";
import { MapPin, Menu, Percent, MessageSquare } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Browse Local Restaurants",
    description:
      "Find amazing eateries near you with real-time location-based search and filters.",
    color: "brand",
  },
  {
    icon: Menu,
    title: "Explore Menus & Prices",
    description:
      "View complete menus with photos, prices, and detailed descriptions before you visit.",
    color: "fresh",
  },
  {
    icon: Percent,
    title: "Get Exclusive Discounts",
    description:
      "Unlock special offers and deals available only to Dhadhan App users.",
    color: "warm",
  },
  {
    icon: MessageSquare,
    title: "Read Community Reviews",
    description:
      "Make informed decisions with honest reviews from fellow food lovers.",
    color: "brand",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand uppercase tracking-wide">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-brand">Discover Food</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dhadhan App makes finding your next meal simple, fun, and rewarding.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-brand/30 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === "brand"
                    ? "bg-brand-light text-brand"
                    : feature.color === "fresh"
                    ? "bg-fresh-light text-fresh"
                    : "bg-amber-100 text-warm"
                }`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent */}
              <div
                className={`absolute inset-x-0 bottom-0 h-1 rounded-b-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                  feature.color === "brand"
                    ? "bg-brand"
                    : feature.color === "fresh"
                    ? "bg-fresh"
                    : "bg-warm"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
