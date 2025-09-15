import { ShoppingCart } from "lucide-react";

import { SearchBar } from "./search-bar";

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
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
