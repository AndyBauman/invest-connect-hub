
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Map, Locate, Route, MicIcon } from "lucide-react";

const MapPreview = () => {
  const [propertiesCount, setPropertiesCount] = useState(0);
  
  useEffect(() => {
    // Get the initial count from localStorage
    const savedProperties = JSON.parse(localStorage.getItem("savedProperties") || "[]");
    setPropertiesCount(savedProperties.length);
    
    // Set up an event listener for storage changes
    const handleStorageChange = () => {
      const properties = JSON.parse(localStorage.getItem("savedProperties") || "[]");
      setPropertiesCount(properties.length);
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    // Also set up a custom event listener for changes made within this tab
    window.addEventListener("propertiesUpdated", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("propertiesUpdated", handleStorageChange);
    };
  }, []);

  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="relative h-[500px] w-full bg-slate-200">
        <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-600">
          <Map className="h-16 w-16 mb-4 opacity-50" />
          <p className="text-lg font-medium">Interactive Map</p>
          <p className="text-sm">Start driving to activate</p>
        </div>
        
        {/* Controls overlay */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-md">
            <Locate className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-md">
            <Route className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="default" className="h-10 w-10 rounded-full shadow-md">
            <MicIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Current Route</p>
            <p className="font-medium">No active route</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Properties Marked</p>
            <p className="font-medium">{propertiesCount}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Distance Covered</p>
            <p className="font-medium">0 miles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPreview;
