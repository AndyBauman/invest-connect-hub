
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Home,
  Search,
  Menu,
  X,
  User,
  LogIn
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = false; // This would come from auth state

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-medium">InvestConnect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/properties" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Properties
            </Link>
            <Link to="/lenders" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Lenders
            </Link>
            <Link to="/membership" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Membership
            </Link>
            <div className="h-5 w-px bg-slate-200"></div>
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button variant="outline" size="sm" className="gap-2">
                  <LayoutGrid className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm" className="gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
            <Link to={isLoggedIn ? "/profile" : "/signup"}>
              <Button size="sm" className="gap-2">
                <User className="h-4 w-4" />
                {isLoggedIn ? "My Profile" : "Join Now"}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="/properties"
              className="block py-2 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/lenders"
              className="block py-2 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lenders
            </Link>
            <Link
              to="/membership"
              className="block py-2 px-4 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Membership
            </Link>
            <div className="pt-2 space-y-2">
              {isLoggedIn ? (
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <LayoutGrid className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
              )}
              <Link to={isLoggedIn ? "/profile" : "/signup"} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-start gap-2">
                  <User className="h-4 w-4" />
                  {isLoggedIn ? "My Profile" : "Join Now"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
