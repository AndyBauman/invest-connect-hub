
import Navbar from "@/components/Navbar";
import AccessBanner from "@/components/driving/AccessBanner";
import DrivingHero from "@/components/driving/DrivingHero";
import MapTools from "@/components/driving/MapTools";
import FeatureGrid from "@/components/driving/FeatureGrid";
import Footer from "@/components/Footer";

const DrivingForDollars = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <AccessBanner />
        <DrivingHero />
        <MapTools />
        <FeatureGrid />
      </main>
      
      <Footer />
    </div>
  );
};

export default DrivingForDollars;
