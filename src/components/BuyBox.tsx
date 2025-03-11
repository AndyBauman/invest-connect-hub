
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  Home, Building, Landmark, Warehouse, Briefcase, MapPin, 
  DollarSign, BarChart3, Ruler, BedDouble, Bath, Tool, 
  UserX, Repeat, CreditCard, Bell, X, Plus, Filter, Save
} from "lucide-react";
import { toast } from "sonner";

export interface BuyBoxCriteria {
  locations: string[];
  propertyTypes: string[];
  priceRange: [number, number];
  arvRange: [number, number];
  minRoi: number;
  squareFeetRange: [number, number];
  bedrooms: number[];
  bathrooms: number[];
  propertyConditions: string[];
  sellerMotivations: string[];
  exitStrategies: string[];
  financingOptions: string[];
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

const defaultBuyBox: BuyBoxCriteria = {
  locations: [],
  propertyTypes: [],
  priceRange: [100000, 500000],
  arvRange: [150000, 750000],
  minRoi: 12,
  squareFeetRange: [1000, 3000],
  bedrooms: [3, 4],
  bathrooms: [2],
  propertyConditions: [],
  sellerMotivations: [],
  exitStrategies: [],
  financingOptions: [],
  notifications: {
    email: true,
    push: false,
    sms: false
  }
};

const BuyBox = () => {
  const [criteria, setCriteria] = useState<BuyBoxCriteria>(defaultBuyBox);
  const [locationInput, setLocationInput] = useState("");
  
  // Property types options
  const propertyTypeOptions = [
    { label: "Single Family", icon: <Home className="h-4 w-4" /> },
    { label: "Multi-Family", icon: <Building className="h-4 w-4" /> },
    { label: "Commercial", icon: <Landmark className="h-4 w-4" /> },
    { label: "Land", icon: <MapPin className="h-4 w-4" /> },
    { label: "Storage", icon: <Warehouse className="h-4 w-4" /> },
    { label: "Mixed-Use", icon: <Briefcase className="h-4 w-4" /> },
  ];
  
  // Property condition options
  const conditionOptions = [
    { label: "Turnkey", value: "Turnkey" },
    { label: "Light Rehab", value: "Light Rehab" },
    { label: "Medium Rehab", value: "Medium Rehab" },
    { label: "Full Renovation", value: "Full Renovation" },
    { label: "Teardown", value: "Teardown" },
  ];
  
  // Seller motivation options
  const motivationOptions = [
    { label: "Distressed", value: "Distressed" },
    { label: "Pre-Foreclosure", value: "Pre-Foreclosure" },
    { label: "Probate", value: "Probate" },
    { label: "Divorce", value: "Divorce" },
    { label: "Tired Landlord", value: "Tired Landlord" },
    { label: "Relocation", value: "Relocation" },
    { label: "Tax Liens", value: "Tax Liens" },
  ];
  
  // Exit strategy options
  const exitStrategyOptions = [
    { label: "Buy & Hold", value: "Buy & Hold" },
    { label: "Fix & Flip", value: "Fix & Flip" },
    { label: "Wholesale", value: "Wholesale" },
    { label: "BRRRR", value: "BRRRR" },
    { label: "Seller Finance", value: "Seller Finance" },
    { label: "Subject To", value: "Subject To" },
  ];
  
  // Financing options
  const financingOptions = [
    { label: "Cash", value: "Cash" },
    { label: "Hard Money", value: "Hard Money" },
    { label: "Conventional", value: "Conventional" },
    { label: "Seller Financing", value: "Seller Financing" },
    { label: "Private Money", value: "Private Money" },
    { label: "Subject To", value: "Subject To" },
  ];

  const handleAddLocation = (e: React.FormEvent) => {
    e.preventDefault();
    if (locationInput.trim() && !criteria.locations.includes(locationInput.trim())) {
      setCriteria(prev => ({
        ...prev,
        locations: [...prev.locations, locationInput.trim()]
      }));
      setLocationInput("");
    }
  };

  const handleRemoveLocation = (location: string) => {
    setCriteria(prev => ({
      ...prev,
      locations: prev.locations.filter(loc => loc !== location)
    }));
  };

  const togglePropertyType = (type: string) => {
    setCriteria(prev => {
      if (prev.propertyTypes.includes(type)) {
        return {
          ...prev,
          propertyTypes: prev.propertyTypes.filter(t => t !== type)
        };
      } else {
        return {
          ...prev,
          propertyTypes: [...prev.propertyTypes, type]
        };
      }
    });
  };

  const toggleOption = (option: string, category: keyof BuyBoxCriteria) => {
    if (typeof criteria[category] === 'object' && Array.isArray(criteria[category])) {
      setCriteria(prev => {
        const currentOptions = prev[category] as string[];
        if (currentOptions.includes(option)) {
          return {
            ...prev,
            [category]: currentOptions.filter(o => o !== option)
          };
        } else {
          return {
            ...prev,
            [category]: [...currentOptions, option]
          };
        }
      });
    }
  };

  const toggleBedBath = (value: number, type: 'bedrooms' | 'bathrooms') => {
    setCriteria(prev => {
      const currentValues = [...prev[type]];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...currentValues, value].sort((a, b) => a - b)
        };
      }
    });
  };

  const handleToggleNotification = (type: 'email' | 'push' | 'sms') => {
    setCriteria(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handleSaveBuyBox = () => {
    // In a real app, this would save to a database
    const buyBoxName = `Buy Box ${new Date().toLocaleString()}`;
    
    // For demo, save to localStorage
    const savedBuyBoxes = JSON.parse(localStorage.getItem('savedBuyBoxes') || '[]');
    savedBuyBoxes.push({
      id: Date.now().toString(),
      name: buyBoxName,
      criteria
    });
    localStorage.setItem('savedBuyBoxes', JSON.stringify(savedBuyBoxes));
    
    toast.success("Buy Box saved successfully!");
  };

  const handleApplyBuyBox = () => {
    // In a real app, this would update the property search/filter UI
    toast.success("Buy Box criteria applied to property search!");
    
    // For demo purposes only - log the criteria
    console.log("Applied Buy Box criteria:", criteria);
  };

  const handleResetBuyBox = () => {
    setCriteria(defaultBuyBox);
    toast.info("Buy Box criteria reset to defaults.");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Investment Buy Box</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleResetBuyBox}>
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={handleSaveBuyBox}>
              <Save className="h-4 w-4 mr-1" /> Save
            </Button>
            <Button size="sm" onClick={handleApplyBuyBox}>
              <Filter className="h-4 w-4 mr-1" /> Apply Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 max-h-[70vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Location Section */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> Target Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddLocation} className="flex gap-2 mb-3">
                <Input
                  placeholder="City, State, or ZIP"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </form>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {criteria.locations.map(location => (
                  <Badge key={location} className="py-1 px-3 flex items-center gap-1">
                    {location}
                    <button 
                      onClick={() => handleRemoveLocation(location)}
                      className="ml-1 rounded-full hover:bg-slate-200 p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {criteria.locations.length === 0 && (
                  <p className="text-sm text-slate-500">No locations added yet.</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Property Type */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <Building className="h-4 w-4 mr-2" /> Property Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {propertyTypeOptions.map((type) => (
                  <Button
                    key={type.label}
                    variant={criteria.propertyTypes.includes(type.label) ? "default" : "outline"}
                    className="justify-start"
                    size="sm"
                    onClick={() => togglePropertyType(type.label)}
                  >
                    {type.icon}
                    <span className="ml-2">{type.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price Range */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <DollarSign className="h-4 w-4 mr-2" /> Price Range
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Slider
                  defaultValue={[criteria.priceRange[0], criteria.priceRange[1]]}
                  max={1000000}
                  step={10000}
                  onValueChange={(value) => 
                    setCriteria(prev => ({ ...prev, priceRange: [value[0], value[1]] }))
                  }
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm font-medium">${criteria.priceRange[0].toLocaleString()}</span>
                  <span className="text-sm font-medium">${criteria.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Metrics */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" /> ROI Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">After Repair Value (ARV)</label>
                  <Slider
                    defaultValue={[criteria.arvRange[0], criteria.arvRange[1]]}
                    max={1500000}
                    step={10000}
                    onValueChange={(value) => 
                      setCriteria(prev => ({ ...prev, arvRange: [value[0], value[1]] }))
                    }
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">${criteria.arvRange[0].toLocaleString()}</span>
                    <span className="text-sm">${criteria.arvRange[1].toLocaleString()}</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Minimum ROI: {criteria.minRoi}%</label>
                  <Slider
                    defaultValue={[criteria.minRoi]}
                    max={50}
                    step={0.5}
                    onValueChange={(value) => 
                      setCriteria(prev => ({ ...prev, minRoi: value[0] }))
                    }
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">0%</span>
                    <span className="text-sm">50%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Size & Features */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <Ruler className="h-4 w-4 mr-2" /> Property Size & Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Square Footage</label>
                  <Slider
                    defaultValue={[criteria.squareFeetRange[0], criteria.squareFeetRange[1]]}
                    max={10000}
                    step={100}
                    onValueChange={(value) => 
                      setCriteria(prev => ({ ...prev, squareFeetRange: [value[0], value[1]] }))
                    }
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">{criteria.squareFeetRange[0].toLocaleString()} sqft</span>
                    <span className="text-sm">{criteria.squareFeetRange[1].toLocaleString()} sqft</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Bedrooms</label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <Badge
                        key={`bed-${num}`}
                        variant="outline"
                        className={`cursor-pointer py-1 px-3 ${
                          criteria.bedrooms.includes(num) ? 'bg-primary text-primary-foreground' : ''
                        }`}
                        onClick={() => toggleBedBath(num, 'bedrooms')}
                      >
                        <BedDouble className="h-3 w-3 mr-1" /> {num}+
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Bathrooms</label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 1.5, 2, 2.5, 3, 3.5, 4].map(num => (
                      <Badge
                        key={`bath-${num}`}
                        variant="outline"
                        className={`cursor-pointer py-1 px-3 ${
                          criteria.bathrooms.includes(num) ? 'bg-primary text-primary-foreground' : ''
                        }`}
                        onClick={() => toggleBedBath(num, 'bathrooms')}
                      >
                        <Bath className="h-3 w-3 mr-1" /> {num}+
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Condition */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <Tool className="h-4 w-4 mr-2" /> Property Condition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {conditionOptions.map(option => (
                  <Badge
                    key={option.value}
                    variant="outline"
                    className={`cursor-pointer py-2 px-3 h-auto ${
                      criteria.propertyConditions.includes(option.value) ? 'bg-primary text-primary-foreground' : ''
                    }`}
                    onClick={() => toggleOption(option.value, 'propertyConditions')}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Seller Motivation */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <UserX className="h-4 w-4 mr-2" /> Seller Motivation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {motivationOptions.map(option => (
                  <Badge
                    key={option.value}
                    variant="outline"
                    className={`cursor-pointer py-2 px-3 h-auto ${
                      criteria.sellerMotivations.includes(option.value) ? 'bg-primary text-primary-foreground' : ''
                    }`}
                    onClick={() => toggleOption(option.value, 'sellerMotivations')}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Exit Strategy */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <Repeat className="h-4 w-4 mr-2" /> Exit Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {exitStrategyOptions.map(option => (
                  <Badge
                    key={option.value}
                    variant="outline"
                    className={`cursor-pointer py-2 px-3 h-auto ${
                      criteria.exitStrategies.includes(option.value) ? 'bg-primary text-primary-foreground' : ''
                    }`}
                    onClick={() => toggleOption(option.value, 'exitStrategies')}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Financing Options */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <CreditCard className="h-4 w-4 mr-2" /> Financing Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {financingOptions.map(option => (
                  <Badge
                    key={option.value}
                    variant="outline"
                    className={`cursor-pointer py-2 px-3 h-auto ${
                      criteria.financingOptions.includes(option.value) ? 'bg-primary text-primary-foreground' : ''
                    }`}
                    onClick={() => toggleOption(option.value, 'financingOptions')}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-md flex items-center">
                <Bell className="h-4 w-4 mr-2" /> Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email notifications</span>
                  <Switch 
                    checked={criteria.notifications.email}
                    onCheckedChange={() => handleToggleNotification('email')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Push notifications</span>
                  <Switch 
                    checked={criteria.notifications.push}
                    onCheckedChange={() => handleToggleNotification('push')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SMS notifications</span>
                  <Switch 
                    checked={criteria.notifications.sms}
                    onCheckedChange={() => handleToggleNotification('sms')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 bg-slate-50">
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={handleResetBuyBox}>Reset All</Button>
          <Button onClick={handleApplyBuyBox}>Apply Filters</Button>
        </div>
      </div>
    </div>
  );
};

export default BuyBox;
