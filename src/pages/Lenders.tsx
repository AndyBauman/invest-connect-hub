
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Filter, Star, ArrowUpRight, Landmark, Building, Briefcase } from "lucide-react";

const lendersData = [
  {
    id: "lender1",
    name: "BlueRidge Capital",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    type: "Hard Money",
    description: "Short-term loans for fix & flip projects with fast closing times.",
    interestRate: "8.5-12%",
    ltv: "Up to 75%",
    minLoan: 50000,
    maxLoan: 2000000,
    termLength: "6-24 months",
    closingTime: "7-10 days",
    states: ["TX", "FL", "GA", "NC", "SC"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: "lender2",
    name: "Horizon Funding",
    logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    type: "Conventional",
    description: "Traditional mortgage loans for long-term buy & hold investments.",
    interestRate: "5.75-7.25%",
    ltv: "Up to 80%",
    minLoan: 100000,
    maxLoan: 5000000,
    termLength: "15-30 years",
    closingTime: "30-45 days",
    states: ["Nationwide"],
    rating: 4.6,
    reviews: 98
  },
  {
    id: "lender3",
    name: "Urban Investment Group",
    logo: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    type: "Private",
    description: "Flexible financing solutions for experienced real estate investors.",
    interestRate: "9-14%",
    ltv: "Up to 90%",
    minLoan: 75000,
    maxLoan: 3000000,
    termLength: "3-36 months",
    closingTime: "3-5 days",
    states: ["CA", "NY", "IL", "MA", "WA"],
    rating: 4.3,
    reviews: 76
  },
];

const Lenders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-display font-semibold text-slate-900">Lenders</h1>
              <p className="text-slate-600">Find the right financing partner for your investment needs</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {lendersData.map((lender) => (
              <Card key={lender.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-md overflow-hidden">
                      <img 
                        src={lender.logo} 
                        alt={lender.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{lender.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
                              {lender.type}
                            </Badge>
                            <div className="flex items-center text-sm text-amber-500">
                              <Star className="fill-amber-500 h-4 w-4" />
                              <span className="ml-1 text-slate-700">{lender.rating}</span>
                              <span className="ml-1 text-slate-500">({lender.reviews})</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="gap-1">
                          <span>Profile</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <p className="text-slate-600 text-sm mt-2">
                        {lender.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Interest Rate</p>
                      <p className="text-sm font-medium">{lender.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Max LTV</p>
                      <p className="text-sm font-medium">{lender.ltv}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Loan Range</p>
                      <p className="text-sm font-medium">${(lender.minLoan/1000)}K-${(lender.maxLoan/1000000)}M</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Term Length</p>
                      <p className="text-sm font-medium">{lender.termLength}</p>
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

export default Lenders;
