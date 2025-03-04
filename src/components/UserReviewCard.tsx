import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type TransactionType = "Buyer" | "Seller" | "Property Manager" | "Partner" | "Lender" | "Agent" | "Client";

export interface ReviewData {
  id: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar?: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  transactionType: TransactionType;
  helpful: number;
  notHelpful: number;
}

interface UserReviewCardProps {
  review: ReviewData;
  onMarkHelpful?: (reviewId: string) => void;
  onMarkNotHelpful?: (reviewId: string) => void;
}

const UserReviewCard = ({ 
  review, 
  onMarkHelpful, 
  onMarkNotHelpful 
}: UserReviewCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i <= review.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} 
        />
      );
    }
    return stars;
  };

  // Transaction type badge color
  const transactionColors: Record<TransactionType, string> = {
    "Buyer": "bg-blue-100 text-blue-700",
    "Seller": "bg-green-100 text-green-700",
    "Property Manager": "bg-purple-100 text-purple-700",
    "Partner": "bg-amber-100 text-amber-700",
    "Lender": "bg-sky-100 text-sky-700",
    "Agent": "bg-indigo-100 text-indigo-700",
    "Client": "bg-rose-100 text-rose-700"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
            {review.reviewerAvatar ? (
              <img 
                src={review.reviewerAvatar} 
                alt={review.reviewerName} 
                className="h-full w-full object-cover" 
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-primary/10 text-primary font-semibold">
                {review.reviewerName.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-medium">{review.reviewerName}</h4>
            <div className="flex items-center gap-1 mt-1">
              {renderStars()}
            </div>
          </div>
        </div>
        <div className="text-sm text-slate-500">
          {formatDate(review.date)}
        </div>
      </div>

      <div className="mt-3">
        <Badge variant="outline" className={`tag-pill ${transactionColors[review.transactionType]}`}>
          {review.transactionType}
        </Badge>
      </div>

      <p className="mt-3 text-slate-700">{review.comment}</p>

      <div className="flex items-center gap-4 mt-4 text-sm text-slate-600">
        <button 
          className="flex items-center gap-1 hover:text-primary transition-colors"
          onClick={() => onMarkHelpful && onMarkHelpful(review.id)}
        >
          <ThumbsUp className="h-4 w-4" /> 
          <span>Helpful</span> 
          {review.helpful > 0 && <span className="text-slate-500">({review.helpful})</span>}
        </button>
        <button 
          className="flex items-center gap-1 hover:text-primary transition-colors"
          onClick={() => onMarkNotHelpful && onMarkNotHelpful(review.id)}
        >
          <ThumbsDown className="h-4 w-4" /> 
          <span>Not Helpful</span>
          {review.notHelpful > 0 && <span className="text-slate-500">({review.notHelpful})</span>}
        </button>
      </div>
    </div>
  );
};

export default UserReviewCard;
