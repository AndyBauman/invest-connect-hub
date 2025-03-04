
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, MapPin } from "lucide-react";

export const DrivingForDollarsPromoBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl overflow-hidden shadow-lg">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-semibold">Driving For Dollars</h3>
            <p className="text-white/90 max-w-md">
              Find off-market deals while driving through neighborhoods. Track properties and potential investments with our mobile-friendly tools.
            </p>
          </div>
          <div className="flex flex-shrink-0">
            <Link to="/driving-for-dollars">
              <Button size="lg" variant="secondary" className="gap-2 shadow-sm">
                <Car className="h-5 w-5" />
                Start Finding Deals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingForDollarsPromoBanner;
