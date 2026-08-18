import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./features/banners/HeroBanner";
import CtaBanner from "./features/banners/CtaBanner";
import BenefitsSection from "./features/benefits/BenefitsSection";
import HowItWorksSection from "./features/how-it-works/HowItWorksSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfaf5]">
      <Header />
      <HeroBanner />
      <BenefitsSection />
      <HowItWorksSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
