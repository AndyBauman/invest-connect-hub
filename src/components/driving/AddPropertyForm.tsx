
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MicIcon, Clipboard } from "lucide-react";

const AddPropertyForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Add Property</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
            <Input placeholder="Enter property address" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option>Single Family</option>
                <option>Multi-Family</option>
                <option>Vacant Lot</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Condition</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
                <option>Very Poor</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
            <textarea 
              className="min-h-[80px] flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
              placeholder="Enter notes about the property..."
            ></textarea>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" className="gap-2">
              <MicIcon className="h-4 w-4" /> Voice Input
            </Button>
            <Button className="gap-2">
              <Clipboard className="h-4 w-4" /> Save Property
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
