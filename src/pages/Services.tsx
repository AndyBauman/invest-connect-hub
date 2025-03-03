
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Hammer, Wrench, TrendingUp, PaintBucket, TruckIcon, FileText,
  HomeIcon, Users, Calculator, ArrowUpRight, Star
} from "lucide-react";

const servicesData = [
  {
    id: "service1",
    name: "Elite Contractors",
    logo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    category: "Renovation",
    description: "Full-service renovation team specializing in fix & flip properties.",
    rating: 4.9,
    reviews: 87,
    location: "Austin, TX",
    specialties: ["Kitchen Remodels", "Bathroom Renovations", "Full Rehabs"],
    icon: PaintBucket
  },
  {
    id: "service2",
    name: "Premier Property Management",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    category: "Property Management",
    description: "Full-service property management for landlords and investors.",
    rating: 4.7,
    reviews: 124,
    location: "Multiple Locations",
    specialties: ["Tenant Screening", "Maintenance", "Rent Collection"],
    icon: HomeIcon
  },
  {
    id: "service3",
    name: "FastTrack Title Company",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    category: "Title Services",
    description: "Specializing in quick closings for investment properties.",
    rating: 4.8,
    reviews: 56,
    location: "Denver, CO",
    specialties: ["Title Insurance", "Closing Services", "Document Preparation"],
    icon: FileText
  },
  {
    id: "service4",
    name: "InvestPro Analysis",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    category: "Investment Analysis",
    description: "Professional analysis and ROI projections for property investments.",
    rating: 4.6,
    reviews: 42,
    location: "Remote",
    specialties: ["Cash Flow Analysis", "Rehab Estimates", "Market Research"],
    icon: Calculator
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-semibold text-slate-900">Services Directory</h1>
            <p className="text-slate-600">Connect with top-rated service providers for your investment needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Button variant="outline" className="justify-start">
              <Hammer className="mr-2 h-4 w-4" /> Contractors
            </Button>
            <Button variant="outline" className="justify-start">
              <HomeIcon className="mr-2 h-4 w-4" /> Property Managers
            </Button>
            <Button variant="outline" className="justify-start">
              <FileText className="mr-2 h-4 w-4" /> Legal & Title
            </Button>
            <Button variant="outline" className="justify-start">
              <TrendingUp className="mr-2 h-4 w-4" /> Investment Advisors
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {servicesData.map((service) => (
              <Card key={service.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-md overflow-hidden">
                      <img 
                        src={service.logo} 
                        alt={service.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{service.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200">
                              {service.category}
                            </Badge>
                            <div className="flex items-center text-sm text-amber-500">
                              <Star className="fill-amber-500 h-4 w-4" />
                              <span className="ml-1 text-slate-700">{service.rating}</span>
                              <span className="ml-1 text-slate-500">({service.reviews})</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="gap-1">
                          <span>Profile</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <p className="text-slate-600 text-sm mt-2">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="bg-slate-50">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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
                  <li><a href="/properties" className="hover:text-primary">Properties</a></li>
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

export default Services;
