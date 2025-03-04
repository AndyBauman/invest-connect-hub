
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserReviewsList from "./UserReviewsList";
import UserReviewForm from "./UserReviewForm";
import { ReviewData, TransactionType } from "./UserReviewCard";
import { toast } from "sonner";

interface UserReviewsProps {
  userId: string;
  userName: string;
  userAvatar?: string;
  reviews: ReviewData[];
  canReview?: boolean;
  onSubmitReview?: (review: {
    rating: number;
    comment: string;
    transactionType: TransactionType;
  }) => void;
}

const UserReviews = ({
  userId,
  userName,
  userAvatar,
  reviews,
  canReview = false,
  onSubmitReview
}: UserReviewsProps) => {
  const [localReviews, setLocalReviews] = useState<ReviewData[]>(reviews);

  const handleMarkHelpful = (reviewId: string) => {
    setLocalReviews(prevReviews => 
      prevReviews.map(review => 
        review.id === reviewId 
          ? { ...review, helpful: review.helpful + 1 } 
          : review
      )
    );
    toast.success("You marked this review as helpful");
  };

  const handleMarkNotHelpful = (reviewId: string) => {
    setLocalReviews(prevReviews => 
      prevReviews.map(review => 
        review.id === reviewId 
          ? { ...review, notHelpful: review.notHelpful + 1 } 
          : review
      )
    );
    toast.success("You marked this review as not helpful");
  };

  const handleSubmitReview = (reviewData: {
    rating: number;
    comment: string;
    transactionType: TransactionType;
  }) => {
    // In a real app, this would go to an API first
    const newReview: ReviewData = {
      id: `review-${Date.now()}`, // Placeholder ID (server would generate this)
      reviewerId: "current-user-id", // Placeholder - in a real app, this would be the current user's ID
      reviewerName: "Current User", // Placeholder - in a real app, this would be the current user's name
      reviewerAvatar: undefined,
      rating: reviewData.rating,
      comment: reviewData.comment,
      transactionType: reviewData.transactionType,
      date: new Date().toISOString(),
      helpful: 0,
      notHelpful: 0
    };

    setLocalReviews(prevReviews => [newReview, ...prevReviews]);
    
    // Call the parent component's onSubmitReview if provided
    if (onSubmitReview) {
      onSubmitReview(reviewData);
    }
  };

  return (
    <div className="rounded-lg">
      <Tabs defaultValue="reviews">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="reviews">Reviews ({localReviews.length})</TabsTrigger>
          {canReview && <TabsTrigger value="write-review">Write a Review</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="reviews" className="focus-visible:outline-none focus-visible:ring-0">
          <UserReviewsList 
            reviews={localReviews} 
            onMarkHelpful={handleMarkHelpful} 
            onMarkNotHelpful={handleMarkNotHelpful} 
          />
        </TabsContent>
        
        {canReview && (
          <TabsContent value="write-review" className="focus-visible:outline-none focus-visible:ring-0">
            <UserReviewForm 
              onSubmitReview={handleSubmitReview} 
            />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default UserReviews;
