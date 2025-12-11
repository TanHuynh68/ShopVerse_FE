import { Button } from "@/components/ui/button";
import ENV from "@/config/env";
import { createPaymentValues } from "@/hooks/api/usePayment";
import { Order } from "@/types/order.type";
import { formatVND } from "@/utils/format";

interface OrderCardProps {
  order: Order;
  handleCreatePayment: (values: createPaymentValues) => void;
}

const OrderCard = ({ order, handleCreatePayment }: OrderCardProps) => {
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
        {(order.status === "PENDING" || order.status === "FAILED") && (
          <Button
            onClick={() =>
              handleCreatePayment({
                amount: order.subTotal,
                bankCode: "NCB",
                orderId: order._id,
                returnUrl: ENV.VITE_VNP_RETURN_URL,
              })
            }
          >
            Thanh toán
          </Button>
        )}
        {order.status === "PAID" && <Button disabled>Đã thanh toán</Button>}
      </div>
    </div>
  );
};

export default OrderCard;
