
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Menu,
  X,
  User,
  LogIn,
  Heart,
  Bell,
  Search,
  ChevronDown
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = false; // This would come from auth state

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1.5">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-semibold">InvestConnect</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center ml-10 space-x-1">
              <Link to="/properties" className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Buy
              </Link>
              <Link to="/lenders" className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Lenders
              </Link>
              <Link to="/services" className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Services
              </Link>
              <Link to="/membership" className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Plans
              </Link>
              <div className="relative group">
                <button className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md transition-colors flex items-center">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 w-48 bg-white border border-slate-200 rounded-md shadow-lg hidden group-hover:block">
                  <div className="py-1">
                    <Link to="/about" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">About Us</Link>
                    <Link to="/blog" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Blog</Link>
                    <Link to="/contact" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Contact</Link>
                    <Link to="/sitemap" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Sitemap</Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                className="py-1.5 pl-9 pr-3 w-60 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="text-slate-700">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-700">
                  <Bell className="h-5 w-5" />
                </Button>
                <Link to="/profile">
                  <Button variant="ghost" size="icon" className="text-slate-700">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-slate-700">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div className="mr-2">
              <Button variant="ghost" size="icon" className="text-slate-700">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <button
              type="button"
              className="p-2 rounded-md text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/properties"
              className="block py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy
            </Link>
            <Link
              to="/lenders"
              className="block py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lenders
            </Link>
            <Link
              to="/services"
              className="block py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/membership"
              className="block py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plans
            </Link>
            <Link
              to="/about"
              className="block py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-slate-200">
              {isLoggedIn ? (
                <div className="flex space-x-2">
                  <Link to="/saved" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full justify-center">
                      <Heart className="h-4 w-4 mr-1" /> Saved
                    </Button>
                  </Link>
                  <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                    <Button size="sm" className="w-full justify-center">
                      <User className="h-4 w-4 mr-1" /> Profile
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full justify-center">
                      <LogIn className="h-4 w-4 mr-1" /> Log In
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                    <Button size="sm" className="w-full justify-center">
                      <User className="h-4 w-4 mr-1" /> Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
