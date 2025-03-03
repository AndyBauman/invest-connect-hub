
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
                <li><Link to="/sitemap" className="hover:text-primary">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-200 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} InvestConnect Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
