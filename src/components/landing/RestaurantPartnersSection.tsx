import { motion } from "framer-motion";
import { TrendingUp, Eye, ShoppingCart, BarChart3, Users, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Your Sales",
    description: "Get more orders from hungry customers actively searching for food in your area.",
  },
  {
    icon: Eye,
    title: "Visibility to Millions",
    description: "Showcase your restaurant to thousands of users browsing the app every day.",
  },
  {
    icon: ShoppingCart,
    title: "Easy Order Management",
    description: "Simple dashboard to manage incoming orders, update menus, and track performance.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Understand your customers better with detailed analytics and sales reports.",
  },
  {
    icon: Users,
    title: "Build Your Community",
    description: "Connect with food lovers and build a loyal customer base through reviews and reels.",
  },
  {
    icon: Megaphone,
    title: "Free Marketing",
    description: "Get featured in our reels section and reach new customers without ad costs.",
  },
];

const scrollToSignup = () => {
  document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
};

const RestaurantPartnersSection = () => {
  return (
    <section id="partners" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-fresh uppercase tracking-wide">
            For Restaurants
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Grow Your Restaurant with{" "}
            <span className="text-gradient-brand">Dhadhan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join East Africa's fastest-growing food platform. We help local restaurants 
            reach more customers, increase sales, and build their brand.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-fresh/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-fresh-light text-fresh mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ready to take your restaurant to the next level?
          </p>
          <Button
            size="lg"
            className="bg-fresh hover:bg-fresh/90 text-white"
            onClick={scrollToSignup}
          >
            Partner with Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantPartnersSection;
