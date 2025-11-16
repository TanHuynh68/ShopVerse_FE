import { Link } from "react-router-dom";
import NavAuth from "./auth";
import NavCart from "./cart";
import { SearchBar } from "./search-bar";
import OrderIcon from "./order";

const Navbar = () => {
  return (
    <div className="py-5 border border-b-2 ">
      <div className="mx-10 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={"/"}>
            {" "}
            <div className="w-[120px]">
              <img src="../../../../src/assets/shopverse_logo.jpg" alt="" />
            </div>
          </Link>
          <div>
            <SearchBar />
          </div>
          <div className="flex gap-2">
            <OrderIcon />
            <NavCart />
            <NavAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
