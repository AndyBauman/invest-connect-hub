import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Camera, Share2, Clock } from "lucide-react";
import { toast } from "sonner";
import { format, formatDistanceToNow, isPast, addDays } from "date-fns";

export interface PropertyData {
  id: string;
  title: string;
  address: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  roi: number;
  type: "Fix & Flip" | "Buy & Hold" | "Rental" | "Storage Units" | "Business";
  status: "Available" | "Pending" | "Under Contract" | "Sold";
  risk: "Low" | "Moderate" | "High";
  createdAt?: string;
  expiresAt?: string;
  reminderSent14Days?: boolean;
  reminderSent30Days?: boolean;
}

interface PropertyCardProps {
  property: PropertyData;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const {
    id,
    title,
    address,
    price,
    image,
    beds,
    baths,
    sqft,
    roi,
    type,
    status,
    risk,
    createdAt,
    expiresAt,
    reminderSent14Days,
    reminderSent30Days
  } = property;

  const statusColors = {
    "Available": "bg-green-100 text-green-700 border-green-200",
    "Pending": "bg-amber-100 text-amber-700 border-amber-200",
    "Under Contract": "bg-blue-100 text-blue-700 border-blue-200",
    "Sold": "bg-slate-100 text-slate-700 border-slate-200"
  };

  const riskColors = {
    "Low": "bg-green-100 text-green-700",
    "Moderate": "bg-amber-100 text-amber-700",
    "High": "bg-rose-100 text-rose-700"
  };

  const typeColors = {
    "Fix & Flip": "bg-purple-100 text-purple-700",
    "Buy & Hold": "bg-blue-100 text-blue-700",
    "Rental": "bg-teal-100 text-teal-700",
    "Storage Units": "bg-amber-100 text-amber-700",
    "Business": "bg-indigo-100 text-indigo-700"
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return format(new Date(dateString), "MMM d, yyyy");
  };

  const getDaysRemaining = (expiryDate?: string) => {
    if (!expiryDate) return null;
    const expiry = new Date(expiryDate);
    if (isPast(expiry)) return "Expired";
    
    return formatDistanceToNow(expiry, { addSuffix: true });
  };

  const isExpiringSoon = (expiryDate?: string) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const fifteenDaysBeforeExpiry = addDays(expiry, -15);
    return isPast(fifteenDaysBeforeExpiry) && !isPast(expiry);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const shareUrl = `${window.location.origin}/properties/${id}`;
    
    if (navigator.share) {
      navigator.share({
        title: `Investment Property: ${title}`,
        text: `Check out this investment property with ${roi}% ROI!`,
        url: shareUrl,
      })
      .catch(error => {
        console.error('Error sharing:', error);
        copyToClipboard(shareUrl);
      });
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Property link copied to clipboard!");
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        toast.error("Failed to copy link");
      });
  };

  return (
    <Link to={`/properties/${id}`} className="block">
      <Card className="zillow-card h-full">
        <div className="relative">
          <div className="absolute top-2 left-2 z-10">
            <div className={`tag-pill ${statusColors[status]}`}>
              {status}
            </div>
          </div>
          <div className="absolute top-2 right-2 z-10 flex gap-2">
            <button 
              className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="h-4 w-4" />
            </button>
            <button 
              className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:text-primary transition-colors"
              onClick={handleShare}
              aria-label="Share property"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <div className="h-8 px-2 rounded-full bg-white shadow-sm flex items-center justify-center text-xs font-medium">
              <Camera className="h-3 w-3 mr-1" /> 12
            </div>
          </div>
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-16"></div>
          <div className="absolute bottom-2 left-2">
            <span className="font-semibold text-lg text-white">${price.toLocaleString()}</span>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-1">
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-slate-600 line-clamp-1">{address}</p>
          </div>
          
          <div className="flex items-center text-sm text-slate-700 my-3 gap-4">
            <div className="font-semibold">{beds} <span className="text-slate-500 font-normal">beds</span></div>
            <div className="font-semibold">{baths} <span className="text-slate-500 font-normal">baths</span></div>
            <div className="font-semibold">{sqft.toLocaleString()} <span className="text-slate-500 font-normal">sqft</span></div>
          </div>

          <div className="flex gap-2 flex-wrap mb-2">
            <Badge variant="outline" className={`tag-pill ${typeColors[type]}`}>
              {type}
            </Badge>
            <Badge variant="outline" className={`tag-pill ${riskColors[risk]}`}>
              {risk} Risk
            </Badge>
            <Badge variant="outline" className="tag-pill bg-sky-100 text-sky-700">
              {roi}% ROI
            </Badge>
          </div>
          
          {createdAt && (
            <div className="flex items-center text-xs text-slate-500 mt-2">
              <Clock className="h-3 w-3 mr-1" /> Posted {formatDate(createdAt)}
              
              {expiresAt && isExpiringSoon(expiresAt) && (
                <span className="ml-2 text-amber-600 font-medium">
                  Expires {getDaysRemaining(expiresAt)}
                </span>
              )}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default PropertyCard;
