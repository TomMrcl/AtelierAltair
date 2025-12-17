import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Gallery from "./components/Gallery.jsx";
import ArtistSection from "./components/ArtistSection.jsx";
import PricingSection from "./components/PricingSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import AvailabilitySection from "./components/AvailabilitySection.jsx";
import CreationsSection from "./components/CreationsSection.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Gallery />
        <ArtistSection />
        <AvailabilitySection />
        <PricingSection />
        <CreationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
