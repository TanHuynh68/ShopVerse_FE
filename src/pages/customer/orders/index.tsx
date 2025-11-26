import useOrder from "@/hooks/useOrder";
import OrderCard from "./order-card";
import usePayment from "@/hooks/usePayment";

const CustomerOrders = () => {
  const { orders } = useOrder();
  const { handleCreatePayment } = usePayment();

  return orders.length != 0 ? (
    <div>
      <p className="text-center font-semibold text-2xl">Quản lý đơn hàng</p>
      {orders.map((order) => (
        <OrderCard handleCreatePayment={handleCreatePayment} order={order} />
      ))}
    </div>
  ) : (
    <div className="h-[80vh] flex justify-center items-center">
      Chưa có đơn hàng nào.
    </div>
  );
};

export default CustomerOrders;
