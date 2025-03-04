
import { Button } from "@/components/ui/button";
import { Car, Eye, CloudOff, Route } from "lucide-react";

const ModeSelector = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Mode Selection</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <Car className="h-6 w-6" />
            <span>Driving Mode</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <Eye className="h-6 w-6" />
            <span>Virtual Mode</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <CloudOff className="h-6 w-6" />
            <span>Offline Mode</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
            <Route className="h-6 w-6" />
            <span>Route Planning</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;
