
import { Button } from "@/components/ui/button";
import { Car, Eye } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const DrivingHero = () => {
  // Start driving function 
  const handleStartDriving = () => {
    toast({
      title: "Driving Mode Activated",
      description: "GPS tracking has started. Drive safely!",
    });
  };

  // Virtual driving function
  const handleVirtualDriving = () => {
    toast({
      title: "Virtual Mode Activated",
      description: "You can now scout properties virtually",
    });
  };

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Driving For Dollars</h1>
          <p className="text-xl text-slate-300 mb-8">
            Find off-market properties and potential deals while driving through neighborhoods
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={handleStartDriving}>
              <Car className="h-5 w-5" /> Start Driving
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-slate-800 hover:bg-slate-700" onClick={handleVirtualDriving}>
              <Eye className="h-5 w-5" /> Virtual Driving
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingHero;
