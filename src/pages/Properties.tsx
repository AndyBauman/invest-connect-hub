
import Navbar from "@/components/Navbar";
import FeaturedProperties from "@/components/FeaturedProperties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Grid, List, Search, X, WalletCards, Key } from "lucide-react";
import { useState } from "react";

const Properties = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    baths: "",
    propertyType: "",
    financing: [] as ("Seller Financing" | "Subject To")[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFinancingToggle = (type: "Seller Financing" | "Subject To") => {
    setSearchParams(prev => {
      const currentFinancing = [...prev.financing];
      if (currentFinancing.includes(type)) {
        return {
          ...prev,
          financing: currentFinancing.filter(item => item !== type)
        };
      } else {
        return {
          ...prev,
          financing: [...currentFinancing, type]
        };
      }
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API with the search parameters
    console.log("Searching with params:", searchParams);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-display font-semibold text-slate-900">Investment Properties</h1>
              <p className="text-slate-600">Browse our curated selection of investment opportunities</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-1"
                onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
              >
                {showAdvancedSearch ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                {showAdvancedSearch ? "Close" : "Filters"}
              </Button>
              
              <div className="border rounded-md flex overflow-hidden">
                <button 
                  className={`p-2 ${viewMode === 'grid' ? 'bg-slate-100' : 'bg-white'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  className={`p-2 ${viewMode === 'list' ? 'bg-slate-100' : 'bg-white'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Button 
              variant={searchParams.financing.includes("Seller Financing") ? "default" : "outline"}
              size="sm" 
              className="gap-2"
              onClick={() => handleFinancingToggle("Seller Financing")}
            >
              <WalletCards className="h-4 w-4" />
              Seller Financing
            </Button>
            <Button 
              variant={searchParams.financing.includes("Subject To") ? "default" : "outline"}
              size="sm" 
              className="gap-2"
              onClick={() => handleFinancingToggle("Subject To")}
            >
              <Key className="h-4 w-4" />
              Subject To
            </Button>
          </div>
          
          {showAdvancedSearch && (
            <div className="bg-white border border-slate-200 rounded-lg p-4 mb-6 shadow-sm">
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="City, Zip, or Address"
                      value={searchParams.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="minPrice" className="block text-sm font-medium text-slate-700 mb-1">Min Price</label>
                      <Input
                        id="minPrice"
                        name="minPrice"
                        type="number"
                        placeholder="$"
                        value={searchParams.minPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPrice" className="block text-sm font-medium text-slate-700 mb-1">Max Price</label>
                      <Input
                        id="maxPrice"
                        name="maxPrice"
                        type="number"
                        placeholder="$"
                        value={searchParams.maxPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="beds" className="block text-sm font-medium text-slate-700 mb-1">Beds</label>
                      <select
                        id="beds"
                        name="beds"
                        value={searchParams.beds}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="baths" className="block text-sm font-medium text-slate-700 mb-1">Baths</label>
                      <select
                        id="baths"
                        name="baths"
                        value={searchParams.baths}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="1.5">1.5+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={searchParams.propertyType}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Any</option>
                      <option value="Single Family">Single Family</option>
                      <option value="Multi-Family">Multi-Family</option>
                      <option value="Condo">Condo</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Land">Land</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  
                  <div className="flex-col space-y-3">
                    <label className="block text-sm font-medium text-slate-700">Financing Options</label>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        type="button"
                        variant={searchParams.financing.includes("Seller Financing") ? "default" : "outline"} 
                        size="sm"
                        className="gap-2"
                        onClick={() => handleFinancingToggle("Seller Financing")}
                      >
                        <WalletCards className="h-4 w-4" />
                        Seller Financing
                      </Button>
                      <Button 
                        type="button"
                        variant={searchParams.financing.includes("Subject To") ? "default" : "outline"} 
                        size="sm"
                        className="gap-2"
                        onClick={() => handleFinancingToggle("Subject To")}
                      >
                        <Key className="h-4 w-4" />
                        Subject To
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="gap-2">
                    <Search className="h-4 w-4" />
                    Search Properties
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          <FeaturedProperties />
        </div>
      </main>
      
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-medium text-xl">InvestConnect</h3>
              </div>
              <p className="text-sm text-slate-600 mt-2">
                Connecting real estate investors, lenders, and service providers
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-medium mb-3">Platform</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="/properties" className="hover:text-primary">Properties</a></li>
                  <li><a href="/lenders" className="hover:text-primary">Lenders</a></li>
                  <li><a href="/services" className="hover:text-primary">Services</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="/about" className="hover:text-primary">About</a></li>
                  <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                  <li><a href="/blog" className="hover:text-primary">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><a href="/terms" className="hover:text-primary">Terms</a></li>
                  <li><a href="/privacy" className="hover:text-primary">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-slate-200 text-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} InvestConnect Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Properties;
