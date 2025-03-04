
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { TransactionType } from "./UserReviewCard";

interface UserReviewFormProps {
  onSubmitReview: (review: {
    rating: number;
    comment: string;
    transactionType: TransactionType;
  }) => void;
  transactionTypes?: TransactionType[];
}

const UserReviewForm = ({ 
  onSubmitReview,
  transactionTypes = ["Buyer", "Seller", "Property Manager", "Partner", "Lender", "Agent", "Client"]
}: UserReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [transactionType, setTransactionType] = useState<TransactionType | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    
    if (comment.trim().length < 10) {
      toast.error("Please provide a more detailed review (at least 10 characters)");
      return;
    }
    
    if (!transactionType) {
      toast.error("Please select a transaction type");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      onSubmitReview({
        rating,
        comment: comment.trim(),
        transactionType: transactionType as TransactionType,
      });
      
      // Reset form
      setRating(0);
      setComment("");
      setTransactionType("");
      toast.success("Review submitted successfully");
    } catch (error) {
      toast.error("Failed to submit review. Please try again.");
      console.error("Review submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg border p-4">
      <h3 className="font-semibold text-lg mb-2">Write a Review</h3>
      
      <div>
        <label className="block text-sm font-medium mb-2">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="focus:outline-none"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
            >
              <Star
                className={`h-6 w-6 ${
                  star <= (hoveredRating || rating)
                    ? "text-amber-500 fill-amber-500"
                    : "text-gray-300"
                } transition-colors`}
              />
            </button>
          ))}
          <span className="ml-2 text-sm text-slate-500">
            {rating > 0 ? `${rating} star${rating !== 1 ? 's' : ''}` : 'Select a rating'}
          </span>
        </div>
      </div>
      
      <div>
        <label htmlFor="transactionType" className="block text-sm font-medium mb-2">
          Transaction Type
        </label>
        <select
          id="transactionType"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value as TransactionType)}
          className="w-full rounded-md border border-slate-300 py-2 px-3 text-sm"
          required
        >
          <option value="">Select Transaction Type</option>
          {transactionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="comment" className="block text-sm font-medium mb-2">
          Your Review
        </label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this user..."
          className="min-h-[120px]"
          required
        />
        <p className="text-xs text-slate-500 mt-1">
          {comment.length < 10 ? 
            `At least ${10 - comment.length} more characters required` :
            `${comment.length} characters`}
        </p>
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default UserReviewForm;
