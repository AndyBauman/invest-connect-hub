
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="bg-white">
          {/* Hero section */}
          <div className="relative py-24 bg-gradient-to-r from-primary to-blue-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-display font-bold tracking-tight text-white mb-6">
                  About InvestConnect
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Transforming real estate investing through technology and community
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
          </div>
          
          {/* Mission section */}
          <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-semibold text-center mb-8">Our Mission</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    InvestConnect was founded in 2023 with a clear mission: to make real estate investing more accessible, transparent, and efficient for everyone.
                  </p>
                  <p>
                    Traditional real estate investing is often fragmented, with investors having to piece together information from multiple sources, navigate complex financing options, and coordinate with various service providers. This process is time-consuming, inefficient, and can lead to missed opportunities.
                  </p>
                  <p>
                    We're building the most comprehensive platform that connects all parties in the real estate investment ecosystem. By bringing together investors, lenders, contractors, agents, and other service providers, we create a seamless experience that simplifies the investment process from discovery to closing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team section */}
          <div className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-display font-semibold text-center mb-12">Our Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Team member 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
                  <p className="text-primary font-medium mb-3">Co-Founder & CEO</p>
                  <p className="text-slate-600 text-sm">
                    Former real estate investor with 15+ years of experience flipping properties and developing commercial real estate.
                  </p>
                </div>
                
                {/* Team member 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="CTO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                  <p className="text-primary font-medium mb-3">Co-Founder & CTO</p>
                  <p className="text-slate-600 text-sm">
                    Tech leader with background in fintech and proptech solutions. Previously led engineering at a major property management platform.
                  </p>
                </div>
                
                {/* Team member 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="COO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">David Chen</h3>
                  <p className="text-primary font-medium mb-3">COO</p>
                  <p className="text-slate-600 text-sm">
                    Operations expert with experience scaling real estate marketplaces and finance platforms across multiple markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values section */}
          <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-semibold text-center mb-12">Our Values</h2>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                    <p className="text-slate-600">
                      We believe in complete transparency in real estate transactions. Our platform provides comprehensive data and analytics for every property, allowing investors to make informed decisions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                    <p className="text-slate-600">
                      Real estate investing shouldn't be limited to those with existing connections or vast experience. We're building tools and resources to make property investing accessible to everyone.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Community</h3>
                    <p className="text-slate-600">
                      We foster a community of investors, lenders, and service providers who can learn from each other, share insights, and collaborate on deals. Network effects make everyone more successful.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                    <p className="text-slate-600">
                      We constantly innovate to solve the most challenging problems in real estate investing. From AI-powered deal analysis to streamlined financing, we're building the future of property investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA section */}
          <div className="py-20 bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-semibold text-white mb-6">Join the InvestConnect Community</h2>
                <p className="text-xl text-white/90 mb-8">
                  Whether you're an experienced investor or just getting started, InvestConnect has the tools and resources you need to succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-slate-100">
                      Create Free Account
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                      Contact Us
                    </Button>
                  </Link>
                </div>
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

export default AboutPage;
