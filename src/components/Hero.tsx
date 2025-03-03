
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Briefcase, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            <Briefcase className="w-4 h-4 mr-2" /> Real Estate Investment Platform
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-slate-900 mb-6 text-balance">
            Connect, Invest & Grow Your Real Estate Portfolio
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto text-balance">
            A premium platform connecting investors, lenders, and service providers. Find your next investment opportunity and secure funding all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button size="lg" className="gap-2">
                <Search className="w-4 h-4" /> 
                Explore Properties
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="gap-2">
                Join Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl">
              <DollarSign className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-medium mb-2">Investment Filters</h3>
              <p className="text-sm text-slate-600">
                Filter properties by investment amount, risk profile, and strategy
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <Briefcase className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-medium mb-2">Loan Options</h3>
              <p className="text-sm text-slate-600">
                Connect with lenders offering tailored financing solutions
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <Search className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-medium mb-2">Deal Tracking</h3>
              <p className="text-sm text-slate-600">
                Monitor property status from listing to closing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
