import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AppPreviewSection from "@/components/landing/AppPreviewSection";
import SignupSection from "@/components/landing/SignupSection";
import AboutSection from "@/components/landing/AboutSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section - Above the fold */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* App Preview / Food Gallery Section */}
        <AppPreviewSection />

        {/* Email Signup Section */}
        <SignupSection />

        {/* About / Story Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
