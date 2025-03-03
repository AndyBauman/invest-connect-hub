
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  priceYearly: number;
  description: string;
  features: string[];
  popular?: boolean;
}

interface MembershipCardProps {
  plan: MembershipPlan;
  isYearly: boolean;
}

const MembershipCard = ({ plan, isYearly }: MembershipCardProps) => {
  const { id, name, price, priceYearly, description, features, popular } = plan;
  const currentPrice = isYearly ? priceYearly : price;
  const savings = ((price * 12) - priceYearly).toFixed(2);

  return (
    <Card className={`relative overflow-hidden border ${popular ? 'border-primary shadow-md' : 'border-slate-200'}`}>
      {popular && (
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Badge className="bg-primary text-white border-primary px-3 py-1">Popular</Badge>
        </div>
      )}
      
      <CardHeader className="pb-0 pt-6">
        <h3 className="text-xl font-medium text-slate-900">{name}</h3>
        <div className="mt-2">
          <span className="text-3xl font-semibold">${currentPrice}</span>
          <span className="text-slate-600 ml-1">
            {isYearly ? "/year" : "/month"}
          </span>
          
          {isYearly && (
            <div className="mt-1 text-sm text-green-600 font-medium">
              Save ${savings}/year
            </div>
          )}
        </div>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </CardHeader>
      
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pb-6">
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {popular ? "Start 7-Day Free Trial" : "Choose Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MembershipCard;
