
import { Route } from "lucide-react";
import { Link } from "react-router-dom";

const AccessBanner = () => {
  return (
    <section className="bg-amber-50 border-b border-amber-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-800">
          <Route className="h-5 w-5" />
          <span className="text-sm md:text-base">
            <strong>Quick Tip:</strong> Access Driving for Dollars directly at <code className="bg-white px-2 py-1 rounded text-amber-700">/driving-for-dollars</code> or from the footer navigation
          </span>
        </div>
        <Link to="/" className="text-sm text-amber-700 font-medium hover:underline">Back to Home</Link>
      </div>
    </section>
  );
};

export default AccessBanner;
