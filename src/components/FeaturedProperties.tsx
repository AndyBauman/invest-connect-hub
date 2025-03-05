
import { useState, useEffect } from "react";
import PropertyCard, { PropertyData } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Building, Home, Landmark, WalletCards, Key, Warehouse, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { addDays, isPast, differenceInDays } from "date-fns";
import { useToast } from "@/hooks/use-toast";

// Sample property data with creation dates and expiration dates
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
    risk: "Low",
    createdAt: new Date().toISOString(),
    expiresAt: addDays(new Date(), 45).toISOString()
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
    risk: "High",
    createdAt: addDays(new Date(), -20).toISOString(),
    expiresAt: addDays(new Date(), 25).toISOString()
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
    risk: "Moderate",
    createdAt: addDays(new Date(), -35).toISOString(),
    expiresAt: addDays(new Date(), 10).toISOString()
  },
  {
    id: "prop4",
    title: "Climate-Controlled Storage Facility",
    address: "123 Storage Lane, Houston, TX 77002",
    price: 540000,
    image: "https://images.unsplash.com/photo-1583876232113-9c31cc9f84b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    beds: 0,
    baths: 1,
    sqft: 8500,
    roi: 15.2,
    type: "Storage Units",
    status: "Available",
    risk: "Low",
    createdAt: addDays(new Date(), -5).toISOString(),
    expiresAt: addDays(new Date(), 40).toISOString()
  },
  {
    id: "prop5",
    title: "Profitable Laundromat",
    address: "456 Business Ave, Chicago, IL 60607",
    price: 275000,
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    beds: 0,
    baths: 2,
    sqft: 2200,
    roi: 22.5,
    type: "Business",
    status: "Available",
    risk: "Moderate",
    createdAt: addDays(new Date(), -10).toISOString(),
    expiresAt: addDays(new Date(), 35).toISOString()
  }
];

const FeaturedProperties = () => {
  const [category, setCategory] = useState<"all" | "Fix & Flip" | "Buy & Hold" | "Rental" | "Seller Financing" | "Subject To" | "Storage Units" | "Business">("all");
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const { toast } = useToast();
  
  // Load properties from localStorage or use sample data
  useEffect(() => {
    const storedProperties = localStorage.getItem("savedProperties");
    if (storedProperties) {
      try {
        const parsedProperties = JSON.parse(storedProperties);
        // Combine with sample properties
        setProperties([...parsedProperties, ...sampleProperties]);
      } catch (e) {
        console.error("Error parsing stored properties:", e);
        setProperties(sampleProperties);
      }
    } else {
      setProperties(sampleProperties);
    }
  }, []);

  // Check for property reminders and expiration
  useEffect(() => {
    // In a real application, this would be a server-side task
    // For demonstration, we'll check every time the component mounts
    const checkPropertyReminders = () => {
      const currentDate = new Date();
      const updatedProperties = properties.map(property => {
        if (!property.createdAt) return property;
        
        const createdDate = new Date(property.createdAt);
        const daysSinceCreation = differenceInDays(currentDate, createdDate);
        
        let updated = { ...property };
        
        // Check for 14-day reminder
        if (daysSinceCreation >= 14 && !(property as any).reminderSent14Days) {
          // In a real app, this would send an email
          console.log(`14-day reminder for property: ${property.title}`);
          
          // For demo, show a toast
          toast({
            title: "Property Reminder",
            description: `Your listing "${property.title}" was posted 2 weeks ago. Please update its status.`,
          });
          
          updated = { ...updated, reminderSent14Days: true };
        }
        
        // Check for 30-day reminder
        if (daysSinceCreation >= 30 && !(property as any).reminderSent30Days) {
          // In a real app, this would send an email
          console.log(`30-day reminder for property: ${property.title}`);
          
          // For demo, show a toast
          toast({
            title: "Property Expiring Soon",
            description: `Your listing "${property.title}" will expire in 15 days if not updated.`,
          });
          
          updated = { ...updated, reminderSent30Days: true };
        }
        
        // Check for expiration (45 days)
        if (property.expiresAt && isPast(new Date(property.expiresAt))) {
          // In a real app, this would mark the property as expired in the database
          console.log(`Property expired: ${property.title}`);
          return null; // Remove expired properties
        }
        
        return updated;
      }).filter(Boolean) as PropertyData[]; // Remove null entries (expired properties)
      
      // Update stored properties
      if (JSON.stringify(updatedProperties) !== JSON.stringify(properties)) {
        setProperties(updatedProperties);
        localStorage.setItem("savedProperties", JSON.stringify(
          updatedProperties.filter(p => !sampleProperties.some(sp => sp.id === p.id))
        ));
      }
    };
    
    checkPropertyReminders();
    
    // Real implementation would use a server-side job scheduler
    // For demo, we'll just check once when component mounts
  }, [properties, toast]);

  const filteredProperties = category === "all" 
    ? properties 
    : category === "Seller Financing" || category === "Subject To"
      ? properties // For demo purposes, show all properties when financing options are selected
      : properties.filter(prop => prop.type === category);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-display font-semibold text-slate-900 mb-2">Featured Properties</h2>
            <p className="text-slate-600">Exclusive investment opportunities curated for you</p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 max-w-full">
              <Button 
                variant={category === "all" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("all")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <Building className="mr-1 h-4 w-4" /> All Properties
              </Button>
              <Button 
                variant={category === "Fix & Flip" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("Fix & Flip")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <Home className="mr-1 h-4 w-4" /> Fix & Flip
              </Button>
              <Button 
                variant={category === "Buy & Hold" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("Buy & Hold")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <Landmark className="mr-1 h-4 w-4" /> Buy & Hold
              </Button>
              <Button 
                variant={category === "Rental" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("Rental")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <Building className="mr-1 h-4 w-4" /> Rental
              </Button>
              <Button 
                variant={category === "Storage Units" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("Storage Units")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <Warehouse className="mr-1 h-4 w-4" /> Storage Units
              </Button>
              <Button 
                variant={category === "Business" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("Business")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <Briefcase className="mr-1 h-4 w-4" /> Businesses
              </Button>
              <Button 
                variant={category === "Seller Financing" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("Seller Financing")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <WalletCards className="mr-1 h-4 w-4" /> Seller Financing
              </Button>
              <Button 
                variant={category === "Subject To" ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategory("Subject To")}
                className="whitespace-nowrap flex-shrink-0"
              >
                <Key className="mr-1 h-4 w-4" /> Subject To
              </Button>
            </div>
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
