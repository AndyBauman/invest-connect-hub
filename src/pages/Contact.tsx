
import Navbar from "@/components/Navbar";
import AdditionalFeatures from "@/components/AdditionalFeatures";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-display font-semibold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600">Have questions about our platform? Get in touch with our team.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Email Us</h3>
              </div>
              <p className="text-slate-600">contact@investconnect.com</p>
              <p className="text-slate-600 mt-1">support@investconnect.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Call Us</h3>
              </div>
              <p className="text-slate-600">(555) 123-4567</p>
              <p className="text-slate-600 mt-1">Monday-Friday, 9AM-5PM EST</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Office Location</h3>
              </div>
              <p className="text-slate-600">123 Investment Ave</p>
              <p className="text-slate-600 mt-1">New York, NY 10001</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Additional Features Section */}
          <AdditionalFeatures />
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

export default Contact;
