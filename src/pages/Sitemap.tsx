
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SitemapSection {
  title: string;
  links: {
    name: string;
    path: string;
    description?: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Main Pages",
    links: [
      {
        name: "Home",
        path: "/",
        description: "Landing page with featured properties and platform overview"
      },
      {
        name: "Properties",
        path: "/properties",
        description: "Browse all investment properties"
      },
      {
        name: "Lenders",
        path: "/lenders",
        description: "Connect with lenders for property financing"
      },
      {
        name: "Services",
        path: "/services",
        description: "Find service providers for your investment needs"
      },
      {
        name: "Driving for Dollars",
        path: "/driving-for-dollars",
        description: "Drive neighborhoods to find potential investment properties"
      },
      {
        name: "Membership Plans",
        path: "/membership",
        description: "View and compare membership options"
      }
    ]
  },
  {
    title: "Account",
    links: [
      {
        name: "Login",
        path: "/login",
        description: "Sign in to your account"
      },
      {
        name: "Sign Up",
        path: "/signup",
        description: "Create a new account"
      },
      {
        name: "Forgot Password",
        path: "/forgot-password",
        description: "Reset your password"
      }
    ]
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        path: "/about",
        description: "Learn about our company and mission"
      },
      {
        name: "Contact Us",
        path: "/contact",
        description: "Get in touch with our team"
      },
      {
        name: "Blog",
        path: "/blog",
        description: "Investment tips and industry insights"
      }
    ]
  },
  {
    title: "Legal",
    links: [
      {
        name: "Terms of Service",
        path: "/terms",
        description: "Platform terms and conditions"
      },
      {
        name: "Privacy Policy",
        path: "/privacy",
        description: "How we handle your data"
      }
    ]
  }
];

const Sitemap = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-display font-semibold text-slate-900 mb-4">Sitemap</h1>
              <p className="text-slate-600">
                A complete overview of all pages available on the InvestConnect platform.
              </p>
            </div>
            
            <div className="space-y-10">
              {sitemapData.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b">{section.title}</h2>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="group">
                        <Link 
                          to={link.path} 
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                              {link.name}
                            </span>
                            {link.description && (
                              <p className="text-sm text-slate-500 mt-1">
                                {link.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
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

export default Sitemap;
