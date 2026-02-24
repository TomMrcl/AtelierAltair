import Header from "./components/Header.jsx";
import HeroSection from "./components/Banner.jsx";
import Gallery from "./components/Gallery.jsx";
import ArtistSection from "./components/Artist.jsx";
import PricingSection from "./components/FAQ.jsx";
import ContactSection from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CreationsSection from "./components/Creations.jsx";
import Atelier from "./components/Atelier.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Gallery />
        <ArtistSection />
        <PricingSection />
        <CreationsSection />
        <Atelier />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
