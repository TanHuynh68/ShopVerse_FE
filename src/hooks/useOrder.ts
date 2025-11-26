import { OrderService } from "@/services";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCartContext } from "./useCartContext";
import { useEffect, useState } from "react";
import { Order } from "@/type/order.type";

const useOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderDetail, setOrderDetail] = useState<Order | null>(null);
  const { createOrder, getMyOrders, getMyOrderDetail, loading } =
    OrderService();
  const { fetchMyCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMyOrders();
  }, []);

  const handleCreateOrder = async (cartId: string) => {
    const response = await createOrder(cartId);
    if (response.status_code === 200) {
      fetchMyCart();
      toast.success("Tạo đơn hành thành công");
      navigate("/orders");
    }
  };

  const fetchMyOrders = async () => {
    const response = await getMyOrders();
    if (response) {
      setOrders(response.data);
    }
  };

  const fetchMyOrderDetail = async (id: string) => {
    const response = await getMyOrderDetail(id);
    if (response) {
      setOrderDetail(response.data);
    }
  };

  return { isLoading: loading, orders, orderDetail, handleCreateOrder, fetchMyOrders, fetchMyOrderDetail };
};

export default useOrder;
