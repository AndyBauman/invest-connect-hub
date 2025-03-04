
import { ReviewData } from "../components/UserReviewCard";
import { mockUsers } from "./mockUsers";

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
  ],
  "user-proximity01": [
    {
      id: "review-prox-1",
      reviewerId: "user-proximity02",
      reviewerName: mockUsers[1].name,
      reviewerAvatar: mockUsers[1].avatar,
      rating: 5,
      comment: "Alex was a fantastic investor to work with. Very knowledgeable about the Austin market and made quick decisions. The transaction went smoothly from start to finish.",
      date: "2023-12-05T09:30:00Z",
      transactionType: "Client",
      helpful: 11,
      notHelpful: 0
    },
    {
      id: "review-prox-2",
      reviewerId: "user-proximity03",
      reviewerName: mockUsers[2].name,
      reviewerAvatar: mockUsers[2].avatar,
      rating: 4,
      comment: "Funded a deal for Alex that closed on time. Good communication throughout the process. Would work together again.",
      date: "2023-11-12T14:45:00Z",
      transactionType: "Lender",
      helpful: 8,
      notHelpful: 1
    },
    {
      id: "review-prox-3",
      reviewerId: "user-proximity04",
      reviewerName: mockUsers[3].name,
      reviewerAvatar: mockUsers[3].avatar,
      rating: 5,
      comment: "We partnered with Alex on a development project in East Austin. Their market insights were invaluable and they brought great value to the partnership.",
      date: "2023-10-20T11:20:00Z",
      transactionType: "Partner",
      helpful: 14,
      notHelpful: 0
    }
  ],
  "user-proximity02": [
    {
      id: "review-prox-4",
      reviewerId: "user-proximity01",
      reviewerName: mockUsers[0].name,
      reviewerAvatar: mockUsers[0].avatar,
      rating: 5,
      comment: "Sarah helped me find the perfect commercial property for my business. Her knowledge of the Dallas market is exceptional. Highly recommended!",
      date: "2023-12-10T15:30:00Z",
      transactionType: "Agent",
      helpful: 9,
      notHelpful: 0
    },
    {
      id: "review-prox-5",
      reviewerId: "user-proximity05",
      reviewerName: mockUsers[4].name,
      reviewerAvatar: mockUsers[4].avatar,
      rating: 4,
      comment: "Sarah was professional and helped me navigate a complex commercial transaction. Only reason for 4 stars is that some paperwork took longer than expected.",
      date: "2023-11-25T10:15:00Z",
      transactionType: "Agent",
      helpful: 7,
      notHelpful: 2
    }
  ],
  "user-proximity03": [
    {
      id: "review-prox-6",
      reviewerId: "user-proximity06",
      reviewerName: mockUsers[5].name,
      reviewerAvatar: mockUsers[5].avatar,
      rating: 5,
      comment: "Miguel provided excellent financing terms for my client's investment property. Fast closing and competitive rates. Will definitely use his services again.",
      date: "2023-12-15T13:45:00Z",
      transactionType: "Lender",
      helpful: 12,
      notHelpful: 0
    }
  ],
  "user-proximity04": [
    {
      id: "review-prox-7",
      reviewerId: "user-proximity07",
      reviewerName: mockUsers[6].name,
      reviewerAvatar: mockUsers[6].avatar,
      rating: 5,
      comment: "Provided funding for Emily's development project in Houston. Everything went according to plan, and the project is performing well. Great developer to work with!",
      date: "2023-12-07T16:30:00Z",
      transactionType: "Lender",
      helpful: 10,
      notHelpful: 1
    }
  ],
  "user-proximity05": [
    {
      id: "review-prox-8",
      reviewerId: "user-proximity08",
      reviewerName: mockUsers[7].name,
      reviewerAvatar: mockUsers[7].avatar,
      rating: 4,
      comment: "Jordan purchased one of my development properties in Phoenix. Straightforward transaction with good communication throughout.",
      date: "2023-11-30T09:20:00Z",
      transactionType: "Buyer",
      helpful: 8,
      notHelpful: 2
    }
  ],
  "user-proximity09": [
    {
      id: "review-prox-9",
      reviewerId: "user-proximity10",
      reviewerName: mockUsers[9].name,
      reviewerAvatar: mockUsers[9].avatar,
      rating: 5,
      comment: "Thomas is an excellent investor who knows the Atlanta market inside and out. I've helped him acquire several properties and he's always professional and decisive.",
      date: "2023-12-12T14:10:00Z",
      transactionType: "Agent",
      helpful: 11,
      notHelpful: 0
    }
  ],
  "user-proximity11": [
    {
      id: "review-prox-10",
      reviewerId: "user-proximity12",
      reviewerName: mockUsers[11].name,
      reviewerAvatar: mockUsers[11].avatar,
      rating: 5,
      comment: "Jason provided excellent financing for our affordable housing project in Chicago. The terms were competitive and the process was efficient.",
      date: "2023-12-03T11:45:00Z",
      transactionType: "Lender",
      helpful: 14,
      notHelpful: 0
    }
  ],
  "user-proximity13": [
    {
      id: "review-prox-11",
      reviewerId: "user-proximity14",
      reviewerName: mockUsers[13].name,
      reviewerAvatar: mockUsers[13].avatar,
      rating: 4,
      comment: "Helped Ethan find commercial space for his vacation rental management office. Good to work with, though sometimes slow to respond to emails.",
      date: "2023-11-22T10:30:00Z",
      transactionType: "Agent",
      helpful: 9,
      notHelpful: 2
    }
  ],
  "user-proximity15": [
    {
      id: "review-prox-12",
      reviewerId: "user-proximity16",
      reviewerName: mockUsers[15].name,
      reviewerAvatar: mockUsers[15].avatar,
      rating: 5,
      comment: "Marcus provided fantastic financing for our hotel development in San Diego. Great terms and exceptional service throughout the process.",
      date: "2023-12-08T15:15:00Z",
      transactionType: "Lender",
      helpful: 13,
      notHelpful: 0
    }
  ]
};

// Helper function to get reviews for a specific user
export const getUserReviews = (userId: string): ReviewData[] => {
  return mockReviews[userId] || [];
};
