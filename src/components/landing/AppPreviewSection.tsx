import { motion } from "framer-motion";
import foodUgali from "@/assets/food-ugali.png";
import foodChapati from "@/assets/food-chapati.png";
import foodAnjera from "@/assets/food-anjera.png";

const foods = [
  { image: foodUgali, name: "Ugali & Nyama", tag: "Kenyan Classic", origin: "🇰🇪 Kenya" },
  { image: foodChapati, name: "Fresh Chapati", tag: "East African", origin: "🇰🇪 Kenya" },
  { image: foodAnjera, name: "Anjera & Suugo", tag: "Somali Favorite", origin: "🇸🇴 Somalia" },
];

const AppPreviewSection = () => {
  return (
    <section id="preview" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-fresh uppercase tracking-wide">
            Local Food Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Taste of <span className="text-gradient-brand">East Africa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Authentic Kenyan & Somali cuisines — from Ugali to Anjera, discover your local favorites.
          </p>
        </motion.div>

        {/* Food Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {foods.map((food, index) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-card-hover transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />

                {/* Tag */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-brand text-brand-foreground text-xs font-semibold rounded-full">
                  {food.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-card mb-1">{food.name}</h3>
                <p className="text-card/70 text-sm">{food.origin} • Available near you</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Store Preview Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            📱 Full app experience coming soon to iOS & Android
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
