import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ShoppingCart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
const NavCart = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          {" "}
          <div className="relative inline-flex">
            <ShoppingCart className="h-7 w-7" /> {/* Your base icon */}
            {3 > 0 && (
              <Badge
                variant="destructive" // Or another suitable variant
                className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs"
              >
                {3}
              </Badge>
            )}
          </div>
        </HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default NavCart;
