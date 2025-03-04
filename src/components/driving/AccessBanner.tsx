
import { Route } from "lucide-react";
import { Link } from "react-router-dom";

const AccessBanner = () => {
  return (
    <section className="bg-amber-50 border-b border-amber-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-800">
          <Route className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-xs sm:text-sm md:text-base">
            Driving for Dollars
          </span>
        </div>
        <Link to="/" className="text-xs sm:text-sm text-amber-700 font-medium hover:underline">Back to Home</Link>
      </div>
    </section>
  );
};

export default AccessBanner;
