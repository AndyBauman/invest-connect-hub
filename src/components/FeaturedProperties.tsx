
import { useState } from "react";
import PropertyCard, { PropertyData } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Building, Home, Landmark, WalletCards, Key } from "lucide-react";
import { Link } from "react-router-dom";

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
  }
];

const FeaturedProperties = () => {
  const [category, setCategory] = useState<"all" | "Fix & Flip" | "Buy & Hold" | "Rental" | "Seller Financing" | "Subject To">("all");
  
  const filteredProperties = category === "all" 
    ? sampleProperties 
    : category === "Seller Financing" || category === "Subject To"
      ? sampleProperties // For demo purposes, show all properties when financing options are selected
      : sampleProperties.filter(prop => prop.type === category);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-display font-semibold text-slate-900 mb-2">Featured Properties</h2>
            <p className="text-slate-600">Exclusive investment opportunities curated for you</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <Button 
              variant={category === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategory("all")}
              className="whitespace-nowrap"
            >
              <Building className="mr-1 h-4 w-4" /> All Properties
            </Button>
            <Button 
              variant={category === "Fix & Flip" ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategory("Fix & Flip")}
              className="whitespace-nowrap"
            >
              <Home className="mr-1 h-4 w-4" /> Fix & Flip
            </Button>
            <Button 
              variant={category === "Buy & Hold" ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategory("Buy & Hold")}
              className="whitespace-nowrap"
            >
              <Landmark className="mr-1 h-4 w-4" /> Buy & Hold
            </Button>
            <Button 
              variant={category === "Rental" ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategory("Rental")}
              className="whitespace-nowrap"
            >
              <Building className="mr-1 h-4 w-4" /> Rental
            </Button>
            <Button 
              variant={category === "Seller Financing" ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategory("Seller Financing")}
              className="whitespace-nowrap"
            >
              <WalletCards className="mr-1 h-4 w-4" /> Seller Financing
            </Button>
            <Button 
              variant={category === "Subject To" ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategory("Subject To")}
              className="whitespace-nowrap"
            >
              <Key className="mr-1 h-4 w-4" /> Subject To
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/properties">
            <Button variant="outline" size="lg" className="gap-2">
              View All Properties
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
