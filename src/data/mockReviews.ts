
import { ReviewData } from "../components/UserReviewCard";

// Mock data for user reviews
export const mockReviews: Record<string, ReviewData[]> = {
  "user-1": [
    {
      id: "review-1",
      reviewerId: "user-2",
      reviewerName: "Michael Brown",
      reviewerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      comment: "Great partner for our property flip in Austin. Communication was excellent and the deal closed smoothly. Would definitely work with them again!",
      date: "2023-11-15T14:23:00Z",
      transactionType: "Partner",
      helpful: 12,
      notHelpful: 1
    },
    {
      id: "review-2",
      reviewerId: "user-3",
      reviewerName: "Sarah Johnson",
      reviewerAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
      comment: "Provided great funding for my investment property. Terms were fair and the process was straightforward. Only reason for 4 stars is that funding took a bit longer than initially estimated.",
      date: "2023-10-20T09:15:00Z",
      transactionType: "Lender",
      helpful: 8,
      notHelpful: 2
    },
    {
      id: "review-3",
      reviewerId: "user-4",
      reviewerName: "James Wilson",
      rating: 5,
      comment: "I sold my rental property to this investor and the transaction couldn't have been smoother. They were professional, honest, and paid a fair price. Highly recommended!",
      date: "2023-09-05T16:30:00Z",
      transactionType: "Buyer",
      helpful: 15,
      notHelpful: 0
    },
    {
      id: "review-4",
      reviewerId: "user-5",
      reviewerName: "Lisa Martinez",
      reviewerAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 3,
      comment: "Decent property management service. Maintained the property well but communication could have been more responsive at times. Overall satisfactory.",
      date: "2023-08-12T11:45:00Z",
      transactionType: "Property Manager",
      helpful: 6,
      notHelpful: 3
    },
    {
      id: "review-5",
      reviewerId: "user-6",
      reviewerName: "Robert Chen",
      reviewerAvatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      comment: "Purchased a fix & flip property from this seller. The property was exactly as described and all disclosures were accurate. Great experience!",
      date: "2023-07-22T13:10:00Z",
      transactionType: "Seller",
      helpful: 10,
      notHelpful: 1
    }
  ],
  "user-2": [
    {
      id: "review-6",
      reviewerId: "user-1",
      reviewerName: "John Smith",
      reviewerAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      comment: "Michael was an excellent partner on our joint venture in the Phoenix market. Professional, knowledgeable, and brought great value to the project.",
      date: "2023-11-18T10:20:00Z",
      transactionType: "Partner",
      helpful: 7,
      notHelpful: 0
    }
  ]
};

// Helper function to get reviews for a specific user
export const getUserReviews = (userId: string): ReviewData[] => {
  return mockReviews[userId] || [];
};
