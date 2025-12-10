import { CartItem } from "@/types/cart.type";
import { formatVND } from "@/utils/format";
import CountButton from "../counter";
import { useState } from "react";

interface ProductItemProps {
  item: CartItem;
  handle?: any;
  cartId?: string;
  isDisableCountQuantity?: boolean;
}

const ProductItem = ({
  item,
  handle,
  cartId,
  isDisableCountQuantity, // disable in preview card order
}: ProductItemProps) => {

  const [quantityNow, setQuantityNow] = useState<number>(item.quantity);
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 mt-5">
        <div className="col-span-1">
          <img src={item.productId.images[0]} alt={item.productId.name} />
        </div>
        <div className="col-span-4 line-clamp-3">{item.productId.name}</div>
        <div className="col-span-2 flex justify-center items-center">
          {formatVND(item.price)}
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <CountButton
            setQuantityNow={setQuantityNow}
            quantityNow={quantityNow}
            isDisableCountQuantity={isDisableCountQuantity}
            handle={handle}
            item={item}
            cartId={cartId}
          />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          {formatVND(quantityNow * item.productId.price)}
        </div>
        <div className="col-span-1  flex justify-center items-center">Xóa</div>
      </div>
    </div>
  );
};

export default ProductItem;
