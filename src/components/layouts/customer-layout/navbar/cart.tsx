import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ShoppingCart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useCartContext } from "@/hooks/api/useCartContext";
import { formatVND } from "@/utils/format";
import { Link } from "react-router-dom";
import { CUSTOMER_PATH } from "@/routes/customer/customerPath";
const NavCart = () => {
  const { cart } = useCartContext();
  return (
    <Link to={CUSTOMER_PATH.CART_PAGE}>
      <HoverCard>
        <HoverCardTrigger>
          {" "}
          <div className="relative inline-flex">
            <ShoppingCart className="h-6 w-6" /> {/* Your base icon */}
            {cart.length > 0 && cart[0].items.length > 0 && (
              <Badge
                variant="destructive" // Or another suitable variant
                className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs"
              >
                {cart[0].items.length}
              </Badge>
            )}
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-[400px]">
          {cart.length > 0 ?
            cart[0].items.length &&
            cart[0].items.map((item) => (
              <div>
                <p>Sản Phẩm Mới Thêm</p>
                <div className="mt-2 grid grid-cols-12 gap-2">
                  <div className="col-span-3">
                    <img
                      src={item.productId.images[0]}
                      alt={item.productId.name}
                    />
                  </div>
                  <div className="col-span-6 truncate">
                    {item.productId.name}
                  </div>
                  <div className="col-span-3">
                    {formatVND(item.productId.price)}
                  </div>
                </div>
              </div>
            ))
          : <div className="text-center">Chưa có sản phẩm nào trong giỏ hàng!</div>
          }
        </HoverCardContent>
      </HoverCard>
    </Link>
  );
};

export default NavCart;
