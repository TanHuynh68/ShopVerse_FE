import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const CustomerLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-20">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
