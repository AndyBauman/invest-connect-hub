
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Share, 
  Phone, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  TrendingUp, 
  AlertTriangle,
  Briefcase,
  LineChart
} from "lucide-react";
import { Link } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  // In a real app, this data would come from an API call
  const property = {
    id: id || "1",
    title: "Renovated Duplex with Strong Rental History",
    address: "2834 Oakwood Avenue, Austin, TX 78703",
    price: 450000,
    description: "This fully renovated duplex offers a turnkey investment opportunity in a high-demand rental area. Both units were completely updated in 2022 with new kitchens, bathrooms, flooring, and mechanical systems. Currently generating $4,200 in monthly rental income with long-term tenants in place.",
    beds: 4,
    baths: 3,
    sqft: 2400,
    lotSize: 0.25,
    yearBuilt: 1985,
    propertyType: "Multi-Family",
    status: "Available",
    roi: 8.2,
    capRate: 6.5,
    cashFlow: 1650,
    rentalIncome: 4200,
    monthlyExpenses: 2550,
    cashOnCashReturn: 11.8,
    location: {
      neighborhood: "Northwest Hills",
      walkScore: 72,
      transitScore: 55,
      schoolRating: 8.5
    },
    features: [
      "Renovated 2022", 
      "New HVAC Systems", 
      "Separate Utilities", 
      "Parking for 4 cars", 
      "Low Maintenance Landscaping", 
      "Security System"
    ],
    financialHighlights: [
      "Positive cash flow from day one",
      "Below market purchase price (comps $485K-$520K)",
      "Property taxes: $8,400/year",
      "Insurance: $2,100/year",
      "Property Management: 8% of rental income"
    ],
    risk: "Low",
    investmentType: "Buy & Hold",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    ],
    seller: {
      name: "Austin Investment Properties",
      phone: "(512) 555-1234",
      email: "contact@austininvestprops.com"
    }
  };

  const riskColors = {
    "Low": "bg-green-100 text-green-700",
    "Moderate": "bg-amber-100 text-amber-700",
    "High": "bg-rose-100 text-rose-700"
  };

  const investmentTypeColors = {
    "Fix & Flip": "bg-purple-100 text-purple-700",
    "Buy & Hold": "bg-blue-100 text-blue-700",
    "Rental": "bg-teal-100 text-teal-700"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Property Images */}
        <div className="h-80 md:h-96 lg:h-[500px] bg-slate-100 relative">
          {property.images && property.images.length > 0 && (
            <>
              {/* Main Image */}
              <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-2 p-2">
                <div className="md:col-span-2 overflow-hidden">
                  <img 
                    src={property.images[0]} 
                    alt={property.title} 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="hidden md:grid grid-rows-2 gap-2">
                  {property.images.slice(1, 3).map((image, index) => (
                    <div key={index} className="overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${property.title} - interior ${index + 1}`} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="default" size="sm" className="rounded-full h-10 w-10 p-0 bg-white text-slate-700 hover:text-primary shadow-md">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="default" size="sm" className="rounded-full h-10 w-10 p-0 bg-white text-slate-700 hover:text-primary shadow-md">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="outline" className={`${riskColors[property.risk as keyof typeof riskColors]}`}>
                    {property.risk} Risk
                  </Badge>
                  <Badge variant="outline" className={`${investmentTypeColors[property.investmentType as keyof typeof investmentTypeColors]}`}>
                    {property.investmentType}
                  </Badge>
                  <Badge variant="outline" className="bg-sky-100 text-sky-700">
                    {property.roi}% ROI
                  </Badge>
                  <Badge variant="outline" className="bg-blue-100 text-blue-700">
                    {property.capRate}% Cap Rate
                  </Badge>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 mb-2">
                  {property.title}
                </h1>
                
                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 flex-shrink-0 mr-1" />
                  <span>{property.address}</span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-slate-700 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="h-5 w-5 text-slate-500" />
                    <span className="font-medium">{property.beds}</span> beds
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-5 w-5 text-slate-500" />
                    <span className="font-medium">{property.baths}</span> baths
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-5 w-5 text-slate-500" />
                    <span className="font-medium">{property.sqft.toLocaleString()}</span> sq ft
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-5 w-5 text-slate-500" />
                    Built <span className="font-medium">{property.yearBuilt}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-3xl font-semibold text-slate-900">${property.price.toLocaleString()}</div>
                  <div className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    ${Math.round(property.price / property.sqft)}/sqft
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="prose prose-slate max-w-none">
                    <p>{property.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          Property Summary
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-slate-600">Property Type:</span>
                            <span className="font-medium">{property.propertyType}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-600">Status:</span>
                            <span className="font-medium">{property.status}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-600">Lot Size:</span>
                            <span className="font-medium">{property.lotSize} acres</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-600">Year Built:</span>
                            <span className="font-medium">{property.yearBuilt}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-primary" />
                          Investment Highlights
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-slate-600">Monthly Rental Income:</span>
                            <span className="font-medium">${property.rentalIncome}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-600">Monthly Expenses:</span>
                            <span className="font-medium">${property.monthlyExpenses}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-600">Monthly Cash Flow:</span>
                            <span className="font-medium text-green-600">${property.cashFlow}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-600">Cash-on-Cash Return:</span>
                            <span className="font-medium text-green-600">{property.cashOnCashReturn}%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="financials">
                  <div className="prose prose-slate max-w-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Financial Performance</h3>
                        <ul className="space-y-4">
                          <li className="flex justify-between items-center pb-2 border-b border-slate-200">
                            <div>
                              <span className="font-medium">Monthly Rental Income</span>
                              <p className="text-sm text-slate-600">Total rent from all units</p>
                            </div>
                            <span className="text-lg font-semibold text-green-600">${property.rentalIncome}</span>
                          </li>
                          <li className="flex justify-between items-center pb-2 border-b border-slate-200">
                            <div>
                              <span className="font-medium">Monthly Expenses</span>
                              <p className="text-sm text-slate-600">Taxes, insurance, management, etc.</p>
                            </div>
                            <span className="text-lg font-semibold text-slate-700">${property.monthlyExpenses}</span>
                          </li>
                          <li className="flex justify-between items-center pb-2 border-b border-slate-200">
                            <div>
                              <span className="font-medium">Monthly Cash Flow</span>
                              <p className="text-sm text-slate-600">Income minus expenses</p>
                            </div>
                            <span className="text-lg font-semibold text-green-600">${property.cashFlow}</span>
                          </li>
                          <li className="flex justify-between items-center pb-2 border-b border-slate-200">
                            <div>
                              <span className="font-medium">Cap Rate</span>
                              <p className="text-sm text-slate-600">Net operating income / property value</p>
                            </div>
                            <span className="text-lg font-semibold text-slate-700">{property.capRate}%</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div>
                              <span className="font-medium">Cash-on-Cash Return</span>
                              <p className="text-sm text-slate-600">Annual cash flow / cash invested</p>
                            </div>
                            <span className="text-lg font-semibold text-green-600">{property.cashOnCashReturn}%</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Additional Financial Information</h3>
                        <ul className="space-y-2 ml-4 list-disc text-slate-700">
                          {property.financialHighlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-medium text-amber-800">Investment Disclaimer</h4>
                              <p className="text-sm text-amber-700 mt-1">
                                Financial projections are estimates only. Past performance does not guarantee future results. 
                                Consult with your financial advisor before making investment decisions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location">
                  <div className="prose prose-slate max-w-none">
                    <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center mb-6">
                      <p className="text-slate-600">Interactive map would be displayed here</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">Neighborhood</h4>
                        <p className="text-slate-700">{property.location.neighborhood}</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">Walk Score</h4>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold mr-3">
                            {property.location.walkScore}
                          </div>
                          <span className="text-slate-700">Very Walkable</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">School Rating</h4>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold mr-3">
                            {property.location.schoolRating}
                          </div>
                          <span className="text-slate-700">Above Average</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features">
                  <div className="prose prose-slate max-w-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Property Features</h3>
                        <ul className="space-y-2 ml-4 list-disc text-slate-700">
                          {property.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Investment Advantages</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <TrendingUp className="h-3 w-3" />
                            </div>
                            <span>Located in rapidly appreciating neighborhood</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <TrendingUp className="h-3 w-3" />
                            </div>
                            <span>Strong rental demand with 98% occupancy in the area</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <TrendingUp className="h-3 w-3" />
                            </div>
                            <span>Recent renovations minimize near-term maintenance costs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <TrendingUp className="h-3 w-3" />
                            </div>
                            <span>Potential for additional value-add opportunities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-sm text-slate-500 mb-1">Listed by</p>
                  <h3 className="font-medium">{property.seller.name}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <Button variant="default" className="w-full gap-2" onClick={() => setIsContactFormVisible(!isContactFormVisible)}>
                    <MessageSquare className="h-4 w-4" />
                    Request Info
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    {property.seller.phone}
                  </Button>
                </div>
                
                {isContactFormVisible && (
                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <h4 className="font-medium mb-3">Contact Seller</h4>
                    <form className="space-y-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your email"
                          className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Your phone"
                          className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="I'm interested in this property and would like more information..."
                          className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                          rows={4}
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-medium mb-3">Financing Options</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Down Payment (20%)</span>
                      <span className="font-medium">${(property.price * 0.2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Loan Amount</span>
                      <span className="font-medium">${(property.price * 0.8).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Est. Monthly Payment</span>
                      <span className="font-medium">${Math.round((property.price * 0.8) * 0.006).toLocaleString()}</span>
                    </div>
                  </div>
                  <Link to="/lenders" className="mt-3 text-primary text-sm flex items-center gap-1 hover:underline">
                    <span>Find financing</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar Properties */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-156${item}448204-e02f11c3d0e${item}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                      alt="Similar property" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">Similar Investment Property #{item}</h3>
                    <p className="text-sm text-slate-600 mb-2">Austin, TX</p>
                    <div className="flex justify-between">
                      <span className="font-semibold">${(property.price - 100000 + (item * 50000)).toLocaleString()}</span>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-green-600">{property.roi - 1 + item}% ROI</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                  <li><Link to="/properties" className="hover:text-primary">Properties</Link></li>
                  <li><Link to="/lenders" className="hover:text-primary">Lenders</Link></li>
                  <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><Link to="/about" className="hover:text-primary">About</Link></li>
                  <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                  <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
                  <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
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

export default PropertyDetail;
