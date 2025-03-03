
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PropertyCard, { PropertyData } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Building, Home, Landmark, Filter, SlidersHorizontal, MapPin, ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample property data
const sampleProperties: PropertyData[] = [
  {
    id: "prop1",
    title: "Modern Duplex",
    address: "123 Main St, Austin, TX 78701",
    price: 420000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80",
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    roi: 12.5,
    type: "Buy & Hold",
    status: "Available",
    risk: "Low"
  },
  {
    id: "prop2",
    title: "Fixer Upper Opportunity",
    address: "456 Oak Ave, Denver, CO 80205",
    price: 315000,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    beds: 4,
    baths: 2,
    sqft: 1800,
    roi: 18.3,
    type: "Fix & Flip",
    status: "Available",
    risk: "High"
  },
  {
    id: "prop3",
    title: "Downtown Condo",
    address: "789 Market St, San Francisco, CA 94103",
    price: 895000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    beds: 2,
    baths: 2,
    sqft: 1200,
    roi: 8.7,
    type: "Rental",
    status: "Pending",
    risk: "Moderate"
  },
  {
    id: "prop4",
    title: "Suburban Single Family",
    address: "234 Maple Dr, Chicago, IL 60007",
    price: 520000,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    beds: 4,
    baths: 3,
    sqft: 2400,
    roi: 9.5,
    type: "Buy & Hold",
    status: "Available",
    risk: "Low"
  },
  {
    id: "prop5",
    title: "Multi-Family Investment",
    address: "567 Pine St, Seattle, WA 98101",
    price: 750000,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    beds: 6,
    baths: 4,
    sqft: 3200,
    roi: 14.2,
    type: "Rental",
    status: "Available",
    risk: "Moderate"
  },
  {
    id: "prop6",
    title: "Historic Renovation Project",
    address: "890 Cherry Ln, Boston, MA 02108",
    price: 650000,
    image: "https://images.unsplash.com/photo-1577389407257-89418913f436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    beds: 5,
    baths: 3.5,
    sqft: 3800,
    roi: 22.1,
    type: "Fix & Flip",
    status: "Under Contract",
    risk: "High"
  }
];

const Properties = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([200000, 800000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedRisk, setSelectedRisk] = useState<string[]>([]);
  const [minROI, setMinROI] = useState(0);
  
  const togglePropertyType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  
  const toggleStatus = (status: string) => {
    if (selectedStatus.includes(status)) {
      setSelectedStatus(selectedStatus.filter(s => s !== status));
    } else {
      setSelectedStatus([...selectedStatus, status]);
    }
  };
  
  const toggleRisk = (risk: string) => {
    if (selectedRisk.includes(risk)) {
      setSelectedRisk(selectedRisk.filter(r => r !== risk));
    } else {
      setSelectedRisk([...selectedRisk, risk]);
    }
  };
  
  // Filter properties based on criteria
  const filteredProperties = sampleProperties.filter(property => {
    // Search filter
    if (searchTerm && !property.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !property.address.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Price range filter
    if (property.price < priceRange[0] || property.price > priceRange[1]) {
      return false;
    }
    
    // Type filter
    if (selectedTypes.length > 0 && !selectedTypes.includes(property.type)) {
      return false;
    }
    
    // Status filter
    if (selectedStatus.length > 0 && !selectedStatus.includes(property.status)) {
      return false;
    }
    
    // Risk filter
    if (selectedRisk.length > 0 && !selectedRisk.includes(property.risk)) {
      return false;
    }
    
    // ROI filter
    if (property.roi < minROI) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-display font-semibold mb-1">Investment Properties</h1>
              <p className="text-slate-600">Browse all available real estate investment opportunities</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="roi-desc">Highest ROI First</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search by location, title or keyword"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="default">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            {showFilters && (
              <Card className="mb-6 animate-fade-in">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Price Range */}
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="space-y-4">
                        <Slider
                          defaultValue={[200000, 800000]}
                          max={1000000}
                          step={10000}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">${priceRange[0].toLocaleString()}</span>
                          <span className="text-sm text-slate-600">${priceRange[1].toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Property Type */}
                    <div>
                      <h3 className="font-medium mb-3">Property Type</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge 
                          variant={selectedTypes.includes("Fix & Flip") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => togglePropertyType("Fix & Flip")}
                        >
                          <Home className="h-3 w-3 mr-1" /> Fix & Flip
                        </Badge>
                        <Badge 
                          variant={selectedTypes.includes("Buy & Hold") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => togglePropertyType("Buy & Hold")}
                        >
                          <Landmark className="h-3 w-3 mr-1" /> Buy & Hold
                        </Badge>
                        <Badge 
                          variant={selectedTypes.includes("Rental") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => togglePropertyType("Rental")}
                        >
                          <Building className="h-3 w-3 mr-1" /> Rental
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Status and Risk */}
                    <div>
                      <h3 className="font-medium mb-3">Status</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge 
                          variant={selectedStatus.includes("Available") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleStatus("Available")}
                        >
                          Available
                        </Badge>
                        <Badge 
                          variant={selectedStatus.includes("Pending") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleStatus("Pending")}
                        >
                          Pending
                        </Badge>
                        <Badge 
                          variant={selectedStatus.includes("Under Contract") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleStatus("Under Contract")}
                        >
                          Under Contract
                        </Badge>
                      </div>
                      
                      <h3 className="font-medium mb-3">Risk Level</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge 
                          variant={selectedRisk.includes("Low") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleRisk("Low")}
                        >
                          Low Risk
                        </Badge>
                        <Badge 
                          variant={selectedRisk.includes("Moderate") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleRisk("Moderate")}
                        >
                          Moderate Risk
                        </Badge>
                        <Badge 
                          variant={selectedRisk.includes("High") ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleRisk("High")}
                        >
                          High Risk
                        </Badge>
                      </div>
                    </div>
                    
                    {/* ROI and More Filters */}
                    <div>
                      <h3 className="font-medium mb-3">Minimum ROI</h3>
                      <div className="space-y-4">
                        <Slider
                          defaultValue={[0]}
                          max={25}
                          step={1}
                          value={[minROI]}
                          onValueChange={(value) => setMinROI(value[0])}
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">0%</span>
                          <span className="text-sm font-medium">{minROI}%+</span>
                          <span className="text-sm text-slate-600">25%</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => {
                          setSelectedTypes([]);
                          setSelectedStatus([]);
                          setSelectedRisk([]);
                          setPriceRange([200000, 800000]);
                          setMinROI(0);
                          setSearchTerm("");
                        }}>
                          Reset
                        </Button>
                        <Button size="sm">Apply Filters</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Active Filters */}
            {(selectedTypes.length > 0 || selectedStatus.length > 0 || selectedRisk.length > 0 || minROI > 0 || searchTerm) && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm font-medium text-slate-700 mr-1 flex items-center">
                  <SlidersHorizontal className="h-4 w-4 mr-1" /> Active Filters:
                </span>
                
                {searchTerm && (
                  <Badge variant="secondary" className="gap-1">
                    <Search className="h-3 w-3" />
                    "{searchTerm}"
                    <button className="ml-1 hover:text-slate-900" onClick={() => setSearchTerm("")}>×</button>
                  </Badge>
                )}
                
                {priceRange[0] !== 200000 || priceRange[1] !== 800000 ? (
                  <Badge variant="secondary" className="gap-1">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                    <button className="ml-1 hover:text-slate-900" onClick={() => setPriceRange([200000, 800000])}>×</button>
                  </Badge>
                ) : null}
                
                {selectedTypes.map(type => (
                  <Badge key={type} variant="secondary" className="gap-1">
                    {type}
                    <button className="ml-1 hover:text-slate-900" onClick={() => togglePropertyType(type)}>×</button>
                  </Badge>
                ))}
                
                {selectedStatus.map(status => (
                  <Badge key={status} variant="secondary" className="gap-1">
                    {status}
                    <button className="ml-1 hover:text-slate-900" onClick={() => toggleStatus(status)}>×</button>
                  </Badge>
                ))}
                
                {selectedRisk.map(risk => (
                  <Badge key={risk} variant="secondary" className="gap-1">
                    {risk} Risk
                    <button className="ml-1 hover:text-slate-900" onClick={() => toggleRisk(risk)}>×</button>
                  </Badge>
                ))}
                
                {minROI > 0 && (
                  <Badge variant="secondary" className="gap-1">
                    {minROI}%+ ROI
                    <button className="ml-1 hover:text-slate-900" onClick={() => setMinROI(0)}>×</button>
                  </Badge>
                )}
                
                <Button variant="ghost" size="sm" className="text-sm h-7" onClick={() => {
                  setSelectedTypes([]);
                  setSelectedStatus([]);
                  setSelectedRisk([]);
                  setPriceRange([200000, 800000]);
                  setMinROI(0);
                  setSearchTerm("");
                }}>
                  Clear All
                </Button>
              </div>
            )}
          </div>
          
          {/* Properties Grid */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-slate-600">{filteredProperties.length} properties found</p>
              <p className="text-sm text-slate-500 flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> Map view coming soon
              </p>
            </div>
            
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-slate-200">
                <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No properties found</h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your search filters or explore other areas
                </p>
                <Button onClick={() => {
                  setSelectedTypes([]);
                  setSelectedStatus([]);
                  setSelectedRisk([]);
                  setPriceRange([200000, 800000]);
                  setMinROI(0);
                  setSearchTerm("");
                }}>
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Properties;
