import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const CustomerLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="justify-items-center">
          <div className="w-[1200px] mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
