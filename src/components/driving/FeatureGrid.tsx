
import FeatureCard from "./FeatureCard";
import { MapPin, Eye, Route, LocateFixed, CloudOff, MicIcon } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: MapPin,
      title: "GPS Route Tracking",
      description: "Tracks driving routes in real-time to prevent duplicate searches and maximize efficiency.",
      colorClass: "bg-blue-100 text-blue-600"
    },
    {
      icon: Eye,
      title: "Virtual Driving Mode",
      description: "Scout properties remotely using Google Streetview integration without leaving your office.",
      colorClass: "bg-green-100 text-green-600"
    },
    {
      icon: Route,
      title: "Custom Route Planning",
      description: "Optimize driving paths based on property density to save time and fuel.",
      colorClass: "bg-amber-100 text-amber-600"
    },
    {
      icon: LocateFixed,
      title: "Heat Mapping",
      description: "Identify high-probability distressed property areas to focus your driving efforts.",
      colorClass: "bg-purple-100 text-purple-600"
    },
    {
      icon: CloudOff,
      title: "Offline Mode",
      description: "Continue tracking leads even when offline, with automatic syncing when back online.",
      colorClass: "bg-rose-100 text-rose-600"
    },
    {
      icon: MicIcon,
      title: "Voice Input",
      description: "Hands-free voice-to-text for adding property details while driving safely.",
      colorClass: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-4">Driving for Dollars Features</h2>
          <p className="text-lg text-slate-600">Tools designed to help you find and track off-market properties</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
