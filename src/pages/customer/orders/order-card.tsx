import { Order } from "@/type/order.type";
import { formatVND } from "@/utils/format";

interface OrderCardProps {
  order: Order;
}
const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="p-2 border border-solid mt-2">
      {order.items.map((item) => (
        <div className="grid grid-cols-12 gap-2 mt-5">
          <div className="col-span-1">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="col-span-4 line-clamp-3">{item.name}</div>
          <div className="col-span-2 flex justify-center items-center">
            {formatVND(item.price)}
          </div>
          <div className="col-span-2 flex justify-center items-center">
            {formatVND(item.quantity * item.price)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
