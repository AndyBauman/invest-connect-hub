
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModeSelector = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Mode Selection</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <p className="text-sm text-slate-600 mb-2">Select your investment strategy:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Button 
              variant="outline" 
              className="text-sm h-auto py-2 justify-start"
              onClick={() => console.log("Rentals selected")}
            >
              Rentals
            </Button>
            <Button 
              variant="outline" 
              className="text-sm h-auto py-2 justify-start"
              onClick={() => console.log("Fix and Flip selected")}
            >
              Fix &amp; Flip
            </Button>
            <Button 
              variant="outline" 
              className="text-sm h-auto py-2 justify-start"
              onClick={() => console.log("Seller Finance selected")}
            >
              Seller Finance
            </Button>
            <Button 
              variant="outline" 
              className="text-sm h-auto py-2 justify-start"
              onClick={() => console.log("Subject To selected")}
            >
              Subject To
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModeSelector;
