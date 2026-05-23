import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import PremiumProducts from "../components/home/PremiumProducts";
import StatsSection from "../components/home/StatsSection";

export default function Home({ setSelectedProduct }) {

  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white">

      {/* BACKGROUND LIGHTS */}

      <div className="absolute top-0 left-0 h-72 w-72 bg-yellow-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 bg-orange-500/20 blur-[120px]" />

      {/* SECTIONS */}

      <HeroSection />

      <FeaturesSection />

      <PremiumProducts
        setSelectedProduct={setSelectedProduct}
      />

      <StatsSection />

    </div>
  );
}
