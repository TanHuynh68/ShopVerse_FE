import { ShoppingCart } from "lucide-react";

import { SearchBar } from "./search-bar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  return (
    <div className="py-5 border border-b-2 ">
      <div className="mx-10 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="">
            <video
              autoPlay
              loop
              className="h-[70px] w-[120px] object-cover "
              src="../../../../src/assets/video_logo.mp4"
            />
          </div>
          {/* <div>
            <NavigationMenuDemo />
          </div> */}
          <div>
            <SearchBar />
          </div>
          <div className="cursor-pointer">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
