import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
    toast.success("You're on the list! 🎉 We'll be in touch soon.");
    setEmail("");

    // Reset success state after animation
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section
      id="signup"
      className="py-20 md:py-28 bg-gradient-brand relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-foreground/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-brand-foreground/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Content */}
          <span className="inline-block px-4 py-1.5 bg-brand-foreground/20 rounded-full text-brand-foreground text-sm font-medium mb-6">
            Early Access
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4">
            Be the First to Know
          </h2>
          <p className="text-brand-foreground/80 text-lg mb-8">
            Sign up now for early access and exclusive launch offers. We promise
            not to spam you!
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 px-5 bg-brand-foreground text-foreground placeholder:text-muted-foreground border-0 rounded-xl focus-visible:ring-2 focus-visible:ring-brand-foreground/50"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="h-14 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold whitespace-nowrap"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isSuccess ? (
                <>
                  <Check className="w-5 h-5" />
                  Joined!
                </>
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          {/* Privacy note */}
          <p className="text-brand-foreground/60 text-sm mt-4">
            🔒 Your email is safe with us. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupSection;
