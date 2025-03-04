
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, Route, Map, Locate, 
  Car, Compass, Eye, Home, Building,
  Clipboard, MicIcon, CloudOff, LocateFixed
} from "lucide-react";

const DrivingForDollars = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Driving For Dollars</h1>
              <p className="text-xl text-slate-300 mb-8">
                Find off-market properties and potential deals while driving through neighborhoods
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <Car className="h-5 w-5" /> Start Driving
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-slate-800 hover:bg-slate-700">
                  <Eye className="h-5 w-5" /> Virtual Driving
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map & Tools Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Interactive Map Preview */}
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
                      <p className="font-medium">0</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Distance Covered</p>
                      <p className="font-medium">0 miles</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tools & Features */}
              <div className="space-y-6">
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
              </div>
            </div>
          </div>
        </section>
        
        {/* Features & Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-semibold text-slate-900 mb-4">Driving for Dollars Features</h2>
              <p className="text-lg text-slate-600">Tools designed to help you find and track off-market properties</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">GPS Route Tracking</h3>
                  <p className="text-slate-600">Tracks driving routes in real-time to prevent duplicate searches and maximize efficiency.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Virtual Driving Mode</h3>
                  <p className="text-slate-600">Scout properties remotely using Google Streetview integration without leaving your office.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                    <Route className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Route Planning</h3>
                  <p className="text-slate-600">Optimize driving paths based on property density to save time and fuel.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                    <LocateFixed className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Heat Mapping</h3>
                  <p className="text-slate-600">Identify high-probability distressed property areas to focus your driving efforts.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                    <CloudOff className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Offline Mode</h3>
                  <p className="text-slate-600">Continue tracking leads even when offline, with automatic syncing when back online.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <MicIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Voice Input</h3>
                  <p className="text-slate-600">Hands-free voice-to-text for adding property details while driving safely.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  <li><a href="/driving-for-dollars" className="hover:text-primary">Driving for Dollars</a></li>
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

export default DrivingForDollars;
