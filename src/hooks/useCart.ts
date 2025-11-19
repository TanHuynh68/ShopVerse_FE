import CartService from "@/services/cart.service";
import { Cart } from "@/type/cart.type";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useCart = () => {
  const { getMyCart, addItemIntoCart, getTotalPrice, updateQuantity, loading } = CartService();
  const [cart, setCart] = useState<Cart[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  useEffect(() => {
    fetchMyCart();
  }, []);

  const fetchMyCart = async () => {
    const response = await getMyCart();
    if (response) {
      setCart(response.data);
    }
  };

  const fetchTotalPrice = async (cartId: string) => {
    const response = await getTotalPrice(cartId);
    if (response) {
      setTotalPrice(response.data)
    }
  };

  const handLeAddToCart = async (values: any) => {
    const response = await addItemIntoCart(values);
    if (response && response.status_code === 200) {
      toast.success("Thêm sản phẩm vào giỏ hàng thành công");
      return response;
    }
    return null;
  };

  const handleUpdateQuantity = async (cartId: string, quantity: string, itemID: string) => {
    const response = await updateQuantity(cartId, quantity, itemID);
    if (response && response.status_code === 200) {
      fetchTotalPrice(cartId)
      return response;
    }
    return null;
  }; 
  
  return { cart, isLoading: loading, totalPrice, handLeAddToCart, fetchMyCart, fetchTotalPrice, handleUpdateQuantity };
};

export default useCart;
