
import Navbar from "@/components/Navbar";
import BuyBox from "@/components/BuyBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, ListFilter, Settings, Sliders } from "lucide-react";
import { PropertyData } from "@/components/PropertyCard";
import FeaturedProperties from "@/components/FeaturedProperties";

const BuyBoxPage = () => {
  const [activeTab, setActiveTab] = useState("properties");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-display font-semibold text-slate-900">Buy Box</h1>
              <p className="text-slate-600">Set your investment criteria and find matching properties</p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="relative">
                <Input 
                  placeholder="Quick search properties..."
                  className="pl-10 min-w-[280px]"
                />
                <Filter className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <BuyBox />
            </div>
            
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <TabsList>
                    <TabsTrigger value="properties" className="gap-2">
                      <ListFilter className="h-4 w-4" />
                      <span>Matching Properties</span>
                    </TabsTrigger>
                    <TabsTrigger value="saved" className="gap-2">
                      <Settings className="h-4 w-4" />
                      <span>Saved Buy Boxes</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <Button variant="outline" size="sm" className="gap-2">
                    <Sliders className="h-4 w-4" />
                    <span>Sort</span>
                  </Button>
                </div>
                
                <TabsContent value="properties" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Properties Matching Your Criteria</h3>
                    <FeaturedProperties />
                  </div>
                </TabsContent>
                
                <TabsContent value="saved" className="mt-0">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Your Saved Buy Boxes</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <SavedBuyBoxItem
                        name="Residential Flips"
                        description="Single-family homes for fix & flip in Austin, TX"
                        propertyCount={23}
                        lastUpdated="2 days ago"
                      />
                      <SavedBuyBoxItem
                        name="Rental Properties"
                        description="Multi-family buy & hold in Denver, CO with min 12% ROI"
                        propertyCount={18}
                        lastUpdated="1 week ago"
                      />
                      <SavedBuyBoxItem
                        name="BRRRR Strategy"
                        description="Properties for renovation and rental in Houston, TX"
                        propertyCount={32}
                        lastUpdated="3 days ago"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper component for saved buy boxes
interface SavedBuyBoxItemProps {
  name: string;
  description: string;
  propertyCount: number;
  lastUpdated: string;
}

const SavedBuyBoxItem = ({ name, description, propertyCount, lastUpdated }: SavedBuyBoxItemProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-lg">{name}</h4>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold text-primary">{propertyCount} properties</span>
          <span className="text-xs text-slate-500">Updated {lastUpdated}</span>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button variant="outline" size="sm">View</Button>
        <Button variant="outline" size="sm">Edit</Button>
        <Button variant="outline" size="sm" className="ml-auto text-red-500 hover:text-red-700 hover:bg-red-50">Delete</Button>
      </div>
    </div>
  );
};

export default BuyBoxPage;
