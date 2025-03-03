
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-display font-semibold text-slate-900 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <p className="mb-6">
                At InvestConnect Hub, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our platform.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Account information (name, email, password, phone number)</li>
                <li>Profile information (photo, biography, investment preferences)</li>
                <li>Property listings and information</li>
                <li>Communications with other users</li>
                <li>Transaction information</li>
                <li>Survey responses and feedback</li>
              </ul>
              
              <p>We also automatically collect certain information when you use our Service:</p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Log information (IP address, browser type, pages viewed)</li>
                <li>Device information</li>
                <li>Location information</li>
                <li>Cookies and similar technologies</li>
                <li>Usage patterns and preferences</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Respond to your comments and questions</li>
                <li>Personalize your experience</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Other users as part of the normal operation of the platform</li>
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with your consent</li>
                <li>In response to legal process or to protect our rights</li>
                <li>In connection with a sale or merger of our company</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Your Choices</h2>
              <p>
                You have several choices regarding the information you provide to us:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Account Information: You may update your account information through your account settings</li>
                <li>Marketing Communications: You may opt out of marketing emails</li>
                <li>Cookies: You can manage cookies through your browser settings</li>
                <li>Do Not Track: We respond to Do Not Track signals</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Retention</h2>
              <p>
                We retain your information as long as your account is active or as needed to provide services. 
                We will retain and use information as necessary to comply with legal obligations, resolve disputes, 
                and enforce our agreements.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Security</h2>
              <p>
                We use reasonable measures to help protect your personal information from loss, theft, misuse, 
                unauthorized access, disclosure, alteration, and destruction.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
              <p>
                Our Services are not directed to children under 18. We do not knowingly collect personal 
                information from children under 18. If we learn that we have collected personal information 
                from a child under 18, we will delete that information.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: privacy@investconnect.com<br />
                Address: 123 Main Street, Suite 200, San Francisco, CA 94105
              </p>
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

export default Privacy;
