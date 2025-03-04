
export interface MockUser {
  id: string;
  username: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  joinDate: string;
  role: "investor" | "agent" | "lender" | "developer";
  deals?: number;
  rating?: number;
}

export const mockUsers: MockUser[] = [
  {
    id: "user-proximity01",
    username: "Proximity01",
    name: "Alex Johnson",
    email: "alex@proximity01.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Real estate investor specializing in multi-family properties with 5+ years of experience.",
    location: "Austin, TX",
    joinDate: "2022-01-15T00:00:00Z",
    role: "investor",
    deals: 12,
    rating: 4.8
  },
  {
    id: "user-proximity02",
    username: "Proximity02",
    name: "Sarah Williams",
    email: "sarah@proximity02.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Commercial real estate agent focusing on retail properties in the greater Dallas area.",
    location: "Dallas, TX",
    joinDate: "2022-02-20T00:00:00Z",
    role: "agent",
    deals: 23,
    rating: 4.9
  },
  {
    id: "user-proximity03",
    username: "Proximity03",
    name: "Miguel Rodriguez",
    email: "miguel@proximity03.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Private lender specializing in fix-and-flip financing with competitive rates.",
    location: "San Antonio, TX",
    joinDate: "2022-03-10T00:00:00Z",
    role: "lender",
    deals: 31,
    rating: 4.6
  },
  {
    id: "user-proximity04",
    username: "Proximity04",
    name: "Emily Chen",
    email: "emily@proximity04.com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Property developer focused on sustainable residential communities.",
    location: "Houston, TX",
    joinDate: "2022-04-05T00:00:00Z",
    role: "developer",
    deals: 8,
    rating: 4.7
  },
  {
    id: "user-proximity05",
    username: "Proximity05",
    name: "Jordan Taylor",
    email: "jordan@proximity05.com",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Residential investor specializing in single-family rentals and house hacking strategies.",
    location: "Phoenix, AZ",
    joinDate: "2022-05-12T00:00:00Z",
    role: "investor",
    deals: 17,
    rating: 4.5
  },
  {
    id: "user-proximity06",
    username: "Proximity06",
    name: "Rachel Foster",
    email: "rachel@proximity06.com",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Real estate agent specializing in luxury properties and high-net-worth clients.",
    location: "Scottsdale, AZ",
    joinDate: "2022-06-18T00:00:00Z",
    role: "agent",
    deals: 14,
    rating: 4.9
  },
  {
    id: "user-proximity07",
    username: "Proximity07",
    name: "David Park",
    email: "david@proximity07.com",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "Hard money lender with flexible terms for real estate investors.",
    location: "Denver, CO",
    joinDate: "2022-07-25T00:00:00Z",
    role: "lender",
    deals: 42,
    rating: 4.4
  },
  {
    id: "user-proximity08",
    username: "Proximity08",
    name: "Olivia Martinez",
    email: "olivia@proximity08.com",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    bio: "Commercial developer specializing in mixed-use projects and urban redevelopment.",
    location: "Boulder, CO",
    joinDate: "2022-08-08T00:00:00Z",
    role: "developer",
    deals: 6,
    rating: 4.8
  },
  {
    id: "user-proximity09",
    username: "Proximity09",
    name: "Thomas Wilson",
    email: "thomas@proximity09.com",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    bio: "Buy and hold investor focusing on cash-flowing properties in emerging markets.",
    location: "Atlanta, GA",
    joinDate: "2022-09-14T00:00:00Z",
    role: "investor",
    deals: 21,
    rating: 4.7
  },
  {
    id: "user-proximity10",
    username: "Proximity10",
    name: "Maria Garcia",
    email: "maria@proximity10.com",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    bio: "Residential real estate agent helping first-time homebuyers find their dream homes.",
    location: "Miami, FL",
    joinDate: "2022-10-22T00:00:00Z",
    role: "agent",
    deals: 33,
    rating: 4.9
  },
  {
    id: "user-proximity11",
    username: "Proximity11",
    name: "Jason Lee",
    email: "jason@proximity11.com",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Institutional lender providing capital for large-scale real estate projects.",
    location: "Orlando, FL",
    joinDate: "2022-11-05T00:00:00Z",
    role: "lender",
    deals: 19,
    rating: 4.6
  },
  {
    id: "user-proximity12",
    username: "Proximity12",
    name: "Sophia Brown",
    email: "sophia@proximity12.com",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Residential developer focusing on affordable housing solutions in urban areas.",
    location: "Chicago, IL",
    joinDate: "2022-12-11T00:00:00Z",
    role: "developer",
    deals: 9,
    rating: 4.5
  },
  {
    id: "user-proximity13",
    username: "Proximity13",
    name: "Ethan Miller",
    email: "ethan@proximity13.com",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    bio: "Real estate investor specializing in vacation rentals and short-term rental strategies.",
    location: "Nashville, TN",
    joinDate: "2023-01-17T00:00:00Z",
    role: "investor",
    deals: 15,
    rating: 4.7
  },
  {
    id: "user-proximity14",
    username: "Proximity14",
    name: "Ava Johnson",
    email: "ava@proximity14.com",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    bio: "Commercial real estate agent with expertise in office space and retail leasing.",
    location: "Seattle, WA",
    joinDate: "2023-02-23T00:00:00Z",
    role: "agent",
    deals: 27,
    rating: 4.8
  },
  {
    id: "user-proximity15",
    username: "Proximity15",
    name: "Marcus Jackson",
    email: "marcus@proximity15.com",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "Private equity lender focused on funding value-add multifamily acquisitions.",
    location: "Portland, OR",
    joinDate: "2023-03-09T00:00:00Z",
    role: "lender",
    deals: 11,
    rating: 4.9
  },
  {
    id: "user-proximity16",
    username: "Proximity16",
    name: "Isabella Kim",
    email: "isabella@proximity16.com",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    bio: "Commercial developer specializing in hospitality and tourism-related properties.",
    location: "San Diego, CA",
    joinDate: "2023-04-15T00:00:00Z",
    role: "developer",
    deals: 7,
    rating: 4.6
  }
];

// Function to get a user by their ID
export const getUserById = (id: string): MockUser | undefined => {
  return mockUsers.find(user => user.id === id);
};

// Function to get a user by their username
export const getUserByUsername = (username: string): MockUser | undefined => {
  return mockUsers.find(user => user.username.toLowerCase() === username.toLowerCase());
};

// Function to get users by role
export const getUsersByRole = (role: MockUser["role"]): MockUser[] => {
  return mockUsers.filter(user => user.role === role);
};

// Function to get all users
export const getAllUsers = (): MockUser[] => {
  return [...mockUsers];
};
