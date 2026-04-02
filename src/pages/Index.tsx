import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyHub from "@/components/CompanyHub";
import AIHub from "@/components/AIHub";
import SessionsSection from "@/components/SessionsSection";
import EventsSection from "@/components/EventsSection";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <CompanyHub />
    <AIHub />
    <SessionsSection />
    <EventsSection />
    <WhySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
