import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const CustomerLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className=" justify-items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
