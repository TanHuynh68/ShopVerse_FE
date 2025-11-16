import useOrder from "@/hooks/useOrder"
import OrderCard from "./order-card"

const CustomerOrders = () => {
  const {orders} = useOrder()

  return (
    <div>
        {orders.map(order=>(
          <OrderCard order={order}/>
        ))}
    </div>
  )
}

export default CustomerOrders