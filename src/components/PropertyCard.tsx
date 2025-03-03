
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
  type: "Fix & Flip" | "Buy & Hold" | "Rental";
  status: "Available" | "Pending" | "Under Contract" | "Sold";
  risk: "Low" | "Moderate" | "High";
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
    risk
  } = property;

  // Status color
  const statusColors = {
    "Available": "bg-green-50 text-green-600 border-green-200",
    "Pending": "bg-amber-50 text-amber-600 border-amber-200",
    "Under Contract": "bg-blue-50 text-blue-600 border-blue-200",
    "Sold": "bg-slate-50 text-slate-600 border-slate-200"
  };

  // Risk color
  const riskColors = {
    "Low": "bg-green-50 text-green-600 border-green-200",
    "Moderate": "bg-amber-50 text-amber-600 border-amber-200",
    "High": "bg-rose-50 text-rose-600 border-rose-200"
  };

  // Type color
  const typeColors = {
    "Fix & Flip": "bg-purple-50 text-purple-600 border-purple-200",
    "Buy & Hold": "bg-blue-50 text-blue-600 border-blue-200",
    "Rental": "bg-teal-50 text-teal-600 border-teal-200"
  };

  return (
    <Link to={`/properties/${id}`} className="block">
      <Card className="h-full overflow-hidden property-card-hover border-slate-200">
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute top-2 right-2 z-10 px-2 py-1 text-xs font-medium rounded ${statusColors[status]}`}>
            {status}
          </div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="font-medium text-lg line-clamp-1">{title}</h3>
            <span className="font-semibold text-primary whitespace-nowrap">
              ${price.toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-3 line-clamp-1">{address}</p>
          
          <div className="flex items-center text-sm text-slate-700 mb-3 gap-3">
            <div>
              <span className="font-medium">{beds}</span> bed
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div>
              <span className="font-medium">{baths}</span> bath
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div>
              <span className="font-medium">{sqft.toLocaleString()}</span> sqft
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className={typeColors[type]}>
              {type}
            </Badge>
            <Badge variant="outline" className={riskColors[risk]}>
              {risk} Risk
            </Badge>
            <Badge variant="outline" className="bg-sky-50 text-sky-600 border-sky-200">
              {roi}% ROI
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
