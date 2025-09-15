import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const CustomerLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default CustomerLayout;
