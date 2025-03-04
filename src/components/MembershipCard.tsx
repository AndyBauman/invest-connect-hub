
import { Check, Crown } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { redirectToCheckout } from "@/utils/stripe";
import { Loader2 } from "lucide-react";

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
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState<"none" | "half" | "free">("none");
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Valid promo codes
  const promoCodes = {
    "FREE2024": "free",
    "HALF50": "half"
  };

  let currentPrice = isYearly ? priceYearly : price;
  const savings = ((price * 12) - priceYearly).toFixed(2);

  // Apply discount to current price
  if (discount === "half") {
    currentPrice = currentPrice / 2;
  } else if (discount === "free") {
    currentPrice = 0;
  }

  const handlePromoCodeSubmit = () => {
    const trimmedCode = promoCode.trim().toUpperCase();
    
    if (!trimmedCode) {
      toast({
        title: "Error",
        description: "Please enter a promo code",
        variant: "destructive"
      });
      return;
    }
    
    if (trimmedCode in promoCodes) {
      const discountType = promoCodes[trimmedCode as keyof typeof promoCodes];
      setDiscount(discountType as "none" | "half" | "free");
      
      toast({
        title: "Success!",
        description: discountType === "free" 
          ? "You've received free access!" 
          : "You've received 50% off!",
        variant: "default"
      });
      
      setShowPromoInput(false);
    } else {
      toast({
        title: "Invalid code",
        description: "The promo code you entered is not valid",
        variant: "destructive"
      });
    }
  };

  const handleSubscribe = async () => {
    if (currentPrice === 0) {
      // Free plan - no payment needed
      toast({
        title: "Success!",
        description: "You're now subscribed to the free plan.",
        variant: "default"
      });
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, these would be actual Stripe Price IDs for each plan
      const stripePriceId = `price_${id}_${isYearly ? 'yearly' : 'monthly'}_${discount}`;
      
      const result = await redirectToCheckout({
        priceId: stripePriceId,
        successUrl: `${window.location.origin}/membership?success=true&plan=${id}`,
        cancelUrl: `${window.location.origin}/membership?canceled=true`
      });
      
      if (result.success) {
        // In a real implementation, this would be handled by the redirect
        // For demo purposes, show a toast
        toast({
          title: "Redirecting to Stripe",
          description: `You're being redirected to complete your ${name} plan purchase.`,
          variant: "default"
        });
      } else {
        toast({
          title: "Error",
          description: "There was a problem with the checkout process. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      toast({
        title: "Error",
        description: "There was a problem with the checkout process. Please try again.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  return (
    <Card className={`relative h-full overflow-hidden border ${popular ? 'border-primary shadow-lg' : 'border-slate-200'}`}>
      {popular && (
        <div className="absolute top-0 right-0 left-0">
          <div className="bg-primary text-white text-center py-1.5 text-sm font-medium">
            <div className="flex items-center justify-center">
              <Crown className="h-4 w-4 mr-1" /> Most Popular
            </div>
          </div>
        </div>
      )}
      
      <CardHeader className={`pb-0 ${popular ? 'pt-12' : 'pt-6'}`}>
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <div className="mt-3 flex items-center">
          {discount !== "none" && (
            <span className="line-through text-slate-400 mr-2">
              ${isYearly ? priceYearly : price}
            </span>
          )}
          <span className="text-3xl font-bold">${currentPrice}</span>
          <span className="text-slate-600 ml-1">
            {isYearly ? "/year" : "/month"}
          </span>
          
          {discount === "half" && (
            <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
              50% OFF
            </Badge>
          )}
          
          {discount === "free" && (
            <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
              FREE
            </Badge>
          )}
        </div>
        
        {isYearly && currentPrice > 0 && discount === "none" && (
          <div className="mt-1 text-sm text-green-600 font-medium">
            Save ${savings}/year
          </div>
        )}
        
        <p className="mt-2 text-sm text-slate-500">{description}</p>
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
        
        {showPromoInput ? (
          <div className="mt-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="text-sm"
              />
              <Button 
                size="sm" 
                onClick={handlePromoCodeSubmit}
                variant="outline"
              >
                Apply
              </Button>
            </div>
            <button 
              onClick={() => setShowPromoInput(false)}
              className="text-xs text-slate-500 mt-1 hover:text-slate-700"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowPromoInput(true)}
            className="text-sm text-primary hover:underline mt-4 inline-flex"
          >
            Have a promo code?
          </button>
        )}
      </CardContent>
      
      <CardFooter className="pb-6">
        <Button 
          className="w-full" 
          variant={popular ? "default" : "outline"}
          size="lg"
          onClick={handleSubscribe}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            currentPrice === 0 ? "Get Started - Free" : popular ? "Start 7-Day Free Trial" : "Choose Plan"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MembershipCard;
