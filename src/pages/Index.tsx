import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen font-body overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
