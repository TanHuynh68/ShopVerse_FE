import { CartItem } from "@/type/cart.type";
import { formatVND } from "@/utils/format";
import CountButton from "../counter";

interface ProductItemProps{
    item: CartItem,
    handle?: any;
    cartId?: string;
}

const ProductItem = ({item, handle, cartId}: ProductItemProps) => {
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
          <CountButton handle={handle} item={item} cartId={cartId}  quantityProduct={item.quantity} />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          {formatVND(item.quantity * item.productId.price)}
        </div>
        <div className="col-span-1  flex justify-center items-center">Xóa</div>
      </div>
    </div>
  );
};

export default ProductItem;
