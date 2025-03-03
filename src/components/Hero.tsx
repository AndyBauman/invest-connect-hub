
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MapPin, ArrowRight, Building, Home } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[700px] flex items-center justify-center pt-16 bg-slate-50">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-slate-900/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Real estate background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 text-balance drop-shadow-sm">
              Find Your Next Investment Property
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto text-balance drop-shadow-sm">
              Connect with investors, lenders, and service providers to build your real estate portfolio.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="flex items-center mb-4 overflow-x-auto">
              <Button variant="ghost" className="rounded-full text-slate-700 whitespace-nowrap">
                <Building className="mr-2 h-4 w-4" /> 
                All Properties
              </Button>
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <Button variant="ghost" className="rounded-full text-slate-700 whitespace-nowrap">
                <Home className="mr-2 h-4 w-4" /> 
                Residential
              </Button>
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <Button variant="ghost" className="rounded-full text-slate-700 whitespace-nowrap">
                <Building className="mr-2 h-4 w-4" /> 
                Commercial
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="City, Address, ZIP, or MLS#"
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button size="lg" className="px-6">
                <Search className="mr-2 h-5 w-5" /> Search
              </Button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="text-sm text-slate-500 mb-2 sm:mb-0">Popular: Austin, Miami, Nashville, Phoenix</div>
              <Link to="/properties" className="text-sm font-medium text-primary flex items-center">
                Advanced Search <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-sm">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Find Properties</h3>
              <p className="text-sm text-slate-600">
                Search by location, price, ROI, and investment strategy
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-sm">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect with Lenders</h3>
              <p className="text-sm text-slate-600">
                Find financing options tailored to your investment needs
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-sm">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Close Deals Faster</h3>
              <p className="text-sm text-slate-600">
                From finding properties to closing, all in one platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
