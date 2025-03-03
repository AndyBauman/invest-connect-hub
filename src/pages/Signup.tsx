
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Home, Check } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt with:", email, name);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mb-6 text-center">
              <Link to="/" className="inline-flex items-center gap-1.5">
                <Home className="h-6 w-6 text-primary" />
                <span className="font-display text-xl font-semibold">InvestConnect</span>
              </Link>
              <h2 className="mt-6 text-2xl font-semibold text-gray-900">Create your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{" "}
                <Link to="/login" className="font-medium text-primary hover:text-primary/80">
                  sign in to your existing account
                </Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the{" "}
                    <Link to="/terms" className="font-medium text-primary hover:text-primary/80">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="font-medium text-primary hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Sign up
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">No commitment required</h3>
              <p className="mt-2 text-sm text-gray-500">
                Start with our free plan. Upgrade or cancel anytime.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">7-day free trial</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try all premium features risk-free for 7 days.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">Secure payments</h3>
              <p className="mt-2 text-sm text-gray-500">
                All transactions are secure and encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
