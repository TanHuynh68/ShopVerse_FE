import { Button } from "@/components/ui/button";
import { Order } from "@/type/order.type";
import { formatVND } from "@/utils/format";

interface OrderCardProps {
  order: Order;
}
const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="p-2 border border-solid mt-2 grid grid-cols-12 ">
      <div className="col-span-9 ">
        {order.items.map((item) => (
          <div className="grid grid-cols-12 gap-2 mt-5">
            <div className="col-span-2 line-clamp-3">
              <img src={item.productId.images[0]} alt={item.name} />
            </div>
            <div className="col-span-4 ">{item.name}</div>
            <div className="col-span-2 flex justify-center items-center">
              {formatVND(item.price)}
            </div>
            <div className="col-span-2 flex justify-center items-center">
              {formatVND(item.quantity * item.price)}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <Button>Thanh toán</Button>
      </div>
    </div>
  );
};

export default OrderCard;
