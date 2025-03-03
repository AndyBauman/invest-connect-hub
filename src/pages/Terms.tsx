
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-display font-semibold text-slate-900 mb-6">Terms of Service</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the InvestConnect Hub platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
              <p>
                InvestConnect Hub provides an online platform connecting real estate investors, lenders, and service providers. Our Service includes property listings, financial tools, communication systems, and related services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
              <p>
                To access certain features of the Service, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h2>
              <p>
                You agree not to use the Service for any illegal purposes or to conduct that is prohibited by these terms. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Posting false or misleading information</li>
                <li>Infringing on intellectual property rights</li>
                <li>Distributing malware or other harmful content</li>
                <li>Harassing or threatening other users</li>
                <li>Attempting to gain unauthorized access to the Service</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Property Listings and Information</h2>
              <p>
                InvestConnect Hub does not guarantee the accuracy of property listings, investment projections, or other information provided by users. All investment decisions should be made after conducting your own due diligence.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Privacy</h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy, which can be found at{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  investconnect.com/privacy
                </Link>.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting an update on our website or through other communication channels.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                Email: support@investconnect.com<br />
                Address: 123 Main Street, Suite 200, San Francisco, CA 94105
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  By using InvestConnect Hub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
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

export default Terms;
