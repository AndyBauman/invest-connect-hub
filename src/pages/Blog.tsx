
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "1",
    title: "5 Strategies for Finding Off-Market Investment Properties",
    excerpt: "Discover proven methods to locate profitable investment properties before they hit the public market.",
    author: "Sarah Johnson",
    authorRole: "Real Estate Investor",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Property Sourcing",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Understanding Cap Rates: A Guide for New Real Estate Investors",
    excerpt: "Learn how capitalization rates work and why they're crucial for evaluating investment property potential.",
    author: "Michael Chen",
    authorRole: "Financial Analyst",
    date: "April 23, 2023",
    readTime: "6 min read",
    category: "Investment Analysis",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "The BRRRR Method: Buy, Rehab, Rent, Refinance, Repeat",
    excerpt: "A comprehensive breakdown of the popular BRRRR strategy for scaling your real estate portfolio.",
    author: "David Rodriguez",
    authorRole: "Property Flipper",
    date: "March 10, 2023",
    readTime: "10 min read",
    category: "Investment Strategies",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "How to Build a Reliable Team for Your Real Estate Business",
    excerpt: "Identifying and partnering with the right professionals to grow your investment operation.",
    author: "Jennifer Patel",
    authorRole: "Business Coach",
    date: "February 18, 2023",
    readTime: "7 min read",
    category: "Business Growth",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Creative Financing Options for Investment Properties",
    excerpt: "Beyond traditional mortgages: Exploring alternative ways to fund your next real estate purchase.",
    author: "Robert Washington",
    authorRole: "Lending Specialist",
    date: "January 30, 2023",
    readTime: "9 min read",
    category: "Financing",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "Tax Strategies for Real Estate Investors: Maximize Your Returns",
    excerpt: "Learn how to legally minimize your tax burden and keep more of your investment profits.",
    author: "Lisa Thompson",
    authorRole: "Tax Advisor",
    date: "January 12, 2023",
    readTime: "8 min read",
    category: "Taxes",
    image: "https://images.unsplash.com/photo-1586486855514-8c03f1a29c80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  "Investment Strategies",
  "Property Sourcing",
  "Financing",
  "Investment Analysis",
  "Business Growth",
  "Taxes",
  "Market Trends",
  "Legal"
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-3xl font-display font-semibold text-slate-900 mb-4">Investment Insights</h1>
            <p className="text-slate-600 max-w-2xl">
              Expert advice, market analysis, and practical tips to help you make informed real estate investment decisions.
            </p>
          </div>
          
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                    <Tag className="h-4 w-4" />
                    <span>{featuredPost.category}</span>
                  </div>
                  <h2 className="text-2xl font-display font-semibold mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button variant="outline" className="gap-2 w-full sm:w-auto">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {regularPosts.map(post => (
                  <div key={post.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <Link to={`/blog/${post.id}`} className="block">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                          <Tag className="h-3 w-3" />
                          <span>{post.category}</span>
                        </div>
                        <h3 className="text-lg font-medium mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-slate-600 hover:text-primary">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>{category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-900 text-white rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Get the latest investment insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 text-slate-900 rounded border-0"
                  />
                  <Button variant="default" className="w-full">
                    Subscribe
                  </Button>
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

export default Blog;
