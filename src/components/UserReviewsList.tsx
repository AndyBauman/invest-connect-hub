
import { useState } from "react";
import UserReviewCard, { ReviewData, TransactionType } from "./UserReviewCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Star } from "lucide-react";
import { toast } from "sonner";

interface UserReviewsListProps {
  reviews: ReviewData[];
  onMarkHelpful?: (reviewId: string) => void;
  onMarkNotHelpful?: (reviewId: string) => void;
}

const UserReviewsList = ({ 
  reviews, 
  onMarkHelpful, 
  onMarkNotHelpful 
}: UserReviewsListProps) => {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [filterTransaction, setFilterTransaction] = useState<TransactionType | null>(null);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'highest' | 'lowest'>('newest');

  // Get all unique transaction types from reviews
  const transactionTypes = Array.from(
    new Set(reviews.map(review => review.transactionType))
  ) as TransactionType[];

  // Apply filters and sorting to the reviews
  const filteredReviews = reviews
    .filter(review => filterRating === null || review.rating === filterRating)
    .filter(review => filterTransaction === null || review.transactionType === filterTransaction)
    .sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) 
    : '0.0';

  // Rating breakdown percentages
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCounts[review.rating - 1]++;
    }
  });

  const ratingPercentages = ratingCounts.map(count => 
    reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0
  );

  // Reset all filters
  const resetFilters = () => {
    setFilterRating(null);
    setFilterTransaction(null);
    setSortOption('newest');
    toast.success("Filters reset");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Rating summary */}
        <div className="bg-white rounded-lg border p-4 flex-1">
          <h3 className="font-semibold text-lg mb-4">Rating Summary</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-bold">{averageRating}</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map(star => (
                <Star 
                  key={star} 
                  className={`h-5 w-5 ${parseFloat(averageRating) >= star ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} 
                />
              ))}
            </div>
            <span className="text-slate-500 text-sm ml-2">({reviews.length} reviews)</span>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm min-w-[30px]">{rating} star</span>
                <div className="h-2 bg-slate-100 flex-1 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500" 
                    style={{ width: `${ratingPercentages[rating - 1]}%` }} 
                  />
                </div>
                <span className="text-sm text-slate-500">{ratingPercentages[rating - 1]}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border p-4 flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Filter Reviews</h3>
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              Reset
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Sort by</label>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={sortOption === 'newest' ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setSortOption('newest')}
                >
                  Newest
                </Badge>
                <Badge 
                  variant={sortOption === 'oldest' ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setSortOption('oldest')}
                >
                  Oldest
                </Badge>
                <Badge 
                  variant={sortOption === 'highest' ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setSortOption('highest')}
                >
                  Highest Rating
                </Badge>
                <Badge 
                  variant={sortOption === 'lowest' ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setSortOption('lowest')}
                >
                  Lowest Rating
                </Badge>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Rating</label>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <Badge 
                    key={rating}
                    variant={filterRating === rating ? "default" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                  >
                    {rating} Star{rating !== 1 && 's'}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Transaction Type</label>
              <div className="flex flex-wrap gap-2">
                {transactionTypes.map((type) => (
                  <Badge 
                    key={type}
                    variant={filterTransaction === type ? "default" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => setFilterTransaction(filterTransaction === type ? null : type)}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews list */}
      {filteredReviews.length > 0 ? (
        <div className="space-y-4">
          {filteredReviews.map(review => (
            <UserReviewCard 
              key={review.id} 
              review={review} 
              onMarkHelpful={onMarkHelpful}
              onMarkNotHelpful={onMarkNotHelpful}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-slate-50 rounded-lg border">
          <p className="text-slate-500">No reviews match your filter criteria</p>
          <Button variant="outline" size="sm" className="mt-2" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserReviewsList;
