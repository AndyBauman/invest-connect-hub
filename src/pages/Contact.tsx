
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Mail, 
  Phone,
  MessageSquare,
  HelpCircle,
  Users,
  Building
} from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-semibold text-slate-900 mb-4">Contact Us</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Have questions about InvestConnect? We're here to help!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="bg-primary text-white p-8 rounded-xl mb-8">
                  <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Our Headquarters</h3>
                        <p className="mt-1 text-white/80">
                          1234 Market Street<br />
                          Suite 500<br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Email Us</h3>
                        <p className="mt-1 text-white/80">
                          support@investconnect.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Call Us</h3>
                        <p className="mt-1 text-white/80">
                          (123) 456-7890
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-100 p-4 rounded-lg">
                      <h3 className="font-medium flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2 text-primary" />
                        What is InvestConnect?
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        InvestConnect is a platform that connects real estate investors with properties, lenders, and service providers to streamline the investment process.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 p-4 rounded-lg">
                      <h3 className="font-medium flex items-center">
                        <Building className="h-4 w-4 mr-2 text-primary" />
                        How do I list a property?
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        You can list a property by creating an account and using our property submission form. Premium members can post unlimited listings.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 p-4 rounded-lg">
                      <h3 className="font-medium flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        Do you offer enterprise plans?
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Yes, we offer custom enterprise plans for large teams and companies with specific needs. Contact our sales team for details.
                      </p>
                    </div>
                  </div>
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

export default ContactPage;
