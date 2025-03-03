
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import MembershipCard from "@/components/MembershipCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, MessageCircle, Users, Filter } from "lucide-react";
import { Link } from "react-router-dom";

// Membership plan data
const membershipPlans = [
  {
    id: "free",
    name: "Basic",
    price: 0,
    priceYearly: 0,
    description: "Essential features for browsing investments",
    features: [
      "View property listings",
      "Basic property details",
      "Limited search filters",
      "Public message boards"
    ]
  },
  {
    id: "pro",
    name: "Investor Pro",
    price: 19.99,
    priceYearly: 199,
    description: "Everything you need for serious investing",
    features: [
      "Full financial property details",
      "Direct messaging with sellers",
      "Advanced investment filters",
      "Priority listing notifications",
      "Post unlimited properties",
      "Reduced transaction fees (0.1%)"
    ],
    popular: true
  },
  {
    id: "team",
    name: "Team",
    price: 49.99,
    priceYearly: 499,
    description: "For investment teams and companies",
    features: [
      "Everything in Investor Pro",
      "Team collaboration tools",
      "Advanced analytics dashboard",
      "API access",
      "Dedicated account manager",
      "Custom branding options"
    ]
  }
];

const Index = () => {
  const [yearlyBilling, setYearlyBilling] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Properties */}
        <FeaturedProperties />
        
        {/* How It Works Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-display font-semibold text-slate-900 mb-4">How It Works</h2>
              <p className="text-lg text-slate-600">Our platform connects all parties in the real estate investment ecosystem</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Filter className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Find Deals</h3>
                <p className="text-slate-600 mb-4">
                  Search properties based on your investment criteria, budget, and risk tolerance.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                    Set your investment filters
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                    Browse matching properties
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                    Analyze investment metrics
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Connect & Finance</h3>
                <p className="text-slate-600 mb-4">
                  Message sellers directly and find the right financing option for your investment.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                    Contact property owners
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                    Browse available lenders
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                    Secure optimal financing
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Close & Manage</h3>
                <p className="text-slate-600 mb-4">
                  Track deal status and connect with service providers to complete your investment.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                    Monitor deal progress
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                    Find contractors & services
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                    Complete your investment
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/properties">
                <Button size="lg" className="gap-2">
                  Start Investing Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Membership Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-display font-semibold text-slate-900 mb-4">Membership Plans</h2>
              <p className="text-lg text-slate-600">Choose the perfect plan for your investment needs</p>
              
              <div className="flex items-center justify-center mt-8 mb-6 gap-2">
                <span className={`text-sm font-medium ${!yearlyBilling ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                <Switch
                  checked={yearlyBilling}
                  onCheckedChange={setYearlyBilling}
                />
                <span className={`text-sm font-medium ${yearlyBilling ? 'text-slate-900' : 'text-slate-500'}`}>
                  Yearly <span className="text-green-600">(Save up to 17%)</span>
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {membershipPlans.map((plan) => (
                <MembershipCard
                  key={plan.id}
                  plan={plan}
                  isYearly={yearlyBilling}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to start your investment journey?</h2>
              <p className="text-lg text-slate-300 mb-8">
                Join thousands of investors already using InvestConnect Hub to find deals, secure funding, and grow their portfolios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                    Explore Properties
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
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

export default Index;
