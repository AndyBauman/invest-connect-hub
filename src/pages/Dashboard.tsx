
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, PieChart, Home, Briefcase, Building, Bell, Plus, ChevronRight, Landmark, Search, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-display font-semibold">Dashboard</h1>
            <p className="text-slate-600">Welcome back, Investor</p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Investments</p>
                    <h3 className="text-2xl font-semibold mt-1">5</h3>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Deals</p>
                    <h3 className="text-2xl font-semibold mt-1">2</h3>
                  </div>
                  <div className="bg-green-100 p-2 rounded-md">
                    <Briefcase className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Saved Properties</p>
                    <h3 className="text-2xl font-semibold mt-1">12</h3>
                  </div>
                  <div className="bg-amber-100 p-2 rounded-md">
                    <Home className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Portfolio Value</p>
                    <h3 className="text-2xl font-semibold mt-1">$1.2M</h3>
                  </div>
                  <div className="bg-purple-100 p-2 rounded-md">
                    <DollarSign className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Property Activity */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Your Portfolio Overview</h2>
                    <Button variant="ghost" size="sm" className="gap-1 text-slate-600">
                      <BarChart className="h-4 w-4" />
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-slate-50 rounded-md">
                    <div className="text-center">
                      <BarChart className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-600">Portfolio performance chart would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Recent Properties</h2>
                    <Link to="/properties">
                      <Button variant="ghost" size="sm" className="gap-1 text-slate-600">
                        View All
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="saved">
                    <TabsList className="mb-4">
                      <TabsTrigger value="saved">Saved</TabsTrigger>
                      <TabsTrigger value="viewed">Recently Viewed</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="saved" className="space-y-4">
                      {/* Property Item */}
                      <div className="flex gap-4 p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                        <div className="w-16 h-16 bg-slate-200 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80" 
                            alt="Property" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Modern Duplex</h3>
                            <span className="text-primary font-medium">$420,000</span>
                          </div>
                          <p className="text-sm text-slate-600">123 Main St, Austin, TX</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 text-xs">
                              Buy & Hold
                            </Badge>
                            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 text-xs">
                              12.5% ROI
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {/* Property Item */}
                      <div className="flex gap-4 p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                        <div className="w-16 h-16 bg-slate-200 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                            alt="Property" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Fixer Upper Opportunity</h3>
                            <span className="text-primary font-medium">$315,000</span>
                          </div>
                          <p className="text-sm text-slate-600">456 Oak Ave, Denver, CO</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200 text-xs">
                              Fix & Flip
                            </Badge>
                            <Badge variant="outline" className="bg-rose-50 text-rose-600 border-rose-200 text-xs">
                              High Risk
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <Link to="/properties" className="block text-center text-sm text-primary hover:underline mt-3">
                        See all saved properties
                      </Link>
                    </TabsContent>
                    
                    <TabsContent value="viewed" className="space-y-4">
                      {/* Recently viewed content would go here */}
                      <div className="flex gap-4 p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                        <div className="w-16 h-16 bg-slate-200 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                            alt="Property" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Downtown Condo</h3>
                            <span className="text-primary font-medium">$895,000</span>
                          </div>
                          <p className="text-sm text-slate-600">789 Market St, San Francisco, CA</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="bg-teal-50 text-teal-600 border-teal-200 text-xs">
                              Rental
                            </Badge>
                            <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 text-xs">
                              Moderate Risk
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Profile & Membership */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-medium mb-3">
                      IN
                    </div>
                    <h3 className="font-medium">Investor Name</h3>
                    <p className="text-sm text-slate-600">Basic Plan</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/membership">
                      <Button variant="outline" size="sm" className="w-full">
                        Upgrade to Pro
                      </Button>
                    </Link>
                    <Link to="/profile">
                      <Button variant="ghost" size="sm" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              {/* Investment Criteria */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Your Filters</h2>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/filters">
                        <Search className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-slate-600 mb-2">Investment Range</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary/10 text-primary border-0">$200K - $500K</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-slate-600 mb-2">Property Types</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
                        Fix & Flip
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                        Buy & Hold
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-slate-600 mb-2">Risk Tolerance</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">
                        Moderate
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        Low
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-slate-600 mb-2">Min. ROI</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary/10 text-primary border-0">10%+</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Notifications */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Notifications</h2>
                    <Button variant="ghost" size="sm" className="gap-1 text-slate-600">
                      <Bell className="h-4 w-4" />
                      All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="flex gap-3">
                      <div className="bg-blue-100 p-2 rounded-md flex-shrink-0">
                        <Landmark className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-900">New property match found</p>
                        <p className="text-xs text-slate-600">Based on your investment criteria</p>
                        <span className="text-xs text-slate-500 block mt-1">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border border-slate-200">
                    <div className="flex gap-3">
                      <div className="bg-amber-100 p-2 rounded-md flex-shrink-0">
                        <DollarSign className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-900">Price drop alert</p>
                        <p className="text-xs text-slate-600">Downtown Condo reduced by 5%</p>
                        <span className="text-xs text-slate-500 block mt-1">1 day ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border border-slate-200">
                    <div className="flex gap-3">
                      <div className="bg-green-100 p-2 rounded-md flex-shrink-0">
                        <Briefcase className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-900">New lender available</p>
                        <p className="text-xs text-slate-600">Matches your financing needs</p>
                        <span className="text-xs text-slate-500 block mt-1">2 days ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card>
                <CardHeader className="pb-2">
                  <h2 className="text-lg font-medium">Quick Actions</h2>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <Plus className="h-4 w-4" />
                    List a Property
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <Search className="h-4 w-4" />
                    Find Lenders
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <Briefcase className="h-4 w-4" />
                    Investment Calculator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
