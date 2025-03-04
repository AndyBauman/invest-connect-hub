
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MicIcon, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addDays } from "date-fns";

const AddPropertyForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    address: "",
    propertyType: "Single Family",
    condition: "Good",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate saving the property
    setTimeout(() => {
      // Calculate creation and expiration dates
      const createdAt = new Date().toISOString();
      // Property expires after 45 days
      const expiresAt = addDays(new Date(), 45).toISOString();
      
      // Save to local storage for demo purposes
      const savedProperties = JSON.parse(localStorage.getItem("savedProperties") || "[]");
      const newProperty = {
        id: Date.now().toString(),
        ...formData,
        createdAt,
        expiresAt,
        reminderSent14Days: false,
        reminderSent30Days: false
      };
      
      savedProperties.push(newProperty);
      localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
      
      // Schedule reminder checks (in a real app this would be done by a server)
      // For demo, we'll save the reminder flags to local storage
      
      // Show success message
      toast({
        title: "Property Saved",
        description: `${formData.address} was successfully added to your properties and will expire in 45 days.`,
      });
      
      // Reset form
      setFormData({
        address: "",
        propertyType: "Single Family",
        condition: "Good",
        notes: ""
      });
      
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Add Property</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
            <Input 
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter property address" 
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
              <select 
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option>Single Family</option>
                <option>Multi-Family</option>
                <option>Vacant Lot</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Condition</label>
              <select 
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
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
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="min-h-[80px] flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
              placeholder="Enter notes about the property..."
            ></textarea>
          </div>
          <div className="flex justify-between">
            <Button type="button" variant="outline" className="gap-2">
              <MicIcon className="h-4 w-4" /> Voice Input
            </Button>
            <Button type="submit" className="gap-2" disabled={isSubmitting}>
              <Save className="h-4 w-4" /> Save Property
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyForm;
