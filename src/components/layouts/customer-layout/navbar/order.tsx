import { ListOrderedIcon } from "lucide-react";
import { Link } from "react-router-dom";

const OrderIcon = () => {
  return (
    <Link to={"/orders"} >
     <div className="cursor-pointer">
         <ListOrderedIcon />
     </div>
    </Link>
  );
};

export default OrderIcon;
