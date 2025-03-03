
import Navbar from "@/components/Navbar";
import MembershipCard from "@/components/MembershipCard";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

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

const Membership = () => {
  const [yearlyBilling, setYearlyBilling] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-display font-semibold text-slate-900 mb-4">Membership Plans</h1>
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
          
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6 text-center">Compare Features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 border-b border-slate-200">Feature</th>
                    <th className="text-center py-4 px-6 border-b border-slate-200">Basic</th>
                    <th className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50">Investor Pro</th>
                    <th className="text-center py-4 px-6 border-b border-slate-200">Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-6 border-b border-slate-200">View property listings</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="text-center py-4 px-6 border-b border-slate-200"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-slate-200">Full property financials</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">Limited</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="text-center py-4 px-6 border-b border-slate-200"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-slate-200">Direct messaging</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">—</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="text-center py-4 px-6 border-b border-slate-200"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-slate-200">Listing properties</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">3 max</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50">Unlimited</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-slate-200">Transaction fees</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">1%</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50">0.1%</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">0.1%</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-slate-200">Team collaboration</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">—</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50">—</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-slate-200">API access</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200">—</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200 bg-blue-50">—</td>
                    <td className="text-center py-4 px-6 border-b border-slate-200"><Check className="mx-auto h-5 w-5 text-green-500" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-center text-sm text-slate-600 mt-8">
              Need a custom enterprise plan? <a href="/contact" className="text-primary font-medium">Contact our sales team</a>
            </p>
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

export default Membership;
