
import { useState } from "react";
import { useParams } from "react-router-dom";
import UserReviews from "@/components/UserReviews";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { getUserReviews } from "@/data/mockReviews";
import { Building, MapPin, User, Calendar, Star } from "lucide-react";
import { TransactionType } from "@/components/UserReviewCard";
import { toast } from "sonner";

// Mock user data
const mockUsers = {
  "user-1": {
    id: "user-1",
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    location: "Austin, TX",
    memberSince: "Jan 2022",
    role: "Real Estate Investor",
    bio: "Experienced real estate investor specializing in fix & flip and rental properties in the Austin and San Antonio markets. Always looking for new opportunities and partners.",
    transactionHistory: [
      { userId: "user-2", type: "Partner" as TransactionType },
      { userId: "user-3", type: "Lender" as TransactionType }
    ]
  },
  "user-2": {
    id: "user-2",
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Dallas, TX",
    memberSince: "Mar 2021",
    role: "Property Developer",
    bio: "Property developer focused on multi-family housing. Based in Dallas with projects across Texas.",
    transactionHistory: [
      { userId: "user-1", type: "Partner" as TransactionType }
    ]
  }
};

const UserProfile = () => {
  const { id = "user-1" } = useParams<{ id: string }>();
  const [user] = useState(mockUsers[id as keyof typeof mockUsers] || mockUsers["user-1"]);
  const [reviews] = useState(getUserReviews(user.id));
  
  // Check if the current user can review this user
  // In a real app, this would check if the current logged-in user has completed a transaction with this user
  const canReview = true; // Simplified for demo
  
  const handleSubmitReview = (reviewData: {
    rating: number;
    comment: string;
    transactionType: TransactionType;
  }) => {
    // In a real app, this would send the review to an API
    console.log("Submitting review:", reviewData);
    toast.success("Review submitted successfully!");
  };
  
  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) 
    : 'N/A';
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <h1 className="text-2xl font-bold text-center">{user.name}</h1>
                <div className="flex items-center gap-1 mt-1 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="font-semibold">{averageRating}</span>
                  </div>
                  <span className="text-slate-500 text-sm">({reviews.length} reviews)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Role</h3>
                    <p className="text-slate-600">{user.role}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Member Since</h3>
                    <p className="text-slate-600">{user.memberSince}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">About</h3>
                    <p className="text-slate-600">{user.bio}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Reviews Section */}
        <div className="lg:col-span-2">
          <UserReviews
            userId={user.id}
            userName={user.name}
            userAvatar={user.avatar}
            reviews={reviews}
            canReview={canReview}
            onSubmitReview={handleSubmitReview}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
