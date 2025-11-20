import useOrder from "@/hooks/useOrder"
import OrderCard from "./order-card"

const CustomerOrders = () => {
  const {orders} = useOrder()

  return (
    <div>
      <p className="text-center font-semibold text-2xl">Quản lý đơn hàng</p>
        {orders.map(order=>(
          <OrderCard order={order}/>
        ))}
    </div>
  )
}

export default CustomerOrders