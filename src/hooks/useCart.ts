import CartService from "@/services/cart.service";
import { Cart } from "@/type/cart.type";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useCart = () => {
    const { getMyCart, addItemIntoCart, loading } = CartService();
    const [cart, setCart] = useState<Cart[]>([])

    useEffect(() => {
        fetchMyCart()
    }, [])

    const fetchMyCart = async () => {
        const response = await getMyCart()
        if (response) {
            setCart(response.data)
        }
    }

    const handLeAddToCart = async (values: any) => {
        const response = await addItemIntoCart(values)
        if (response && response.status_code === 200) {
            toast.success('Thêm sản phẩm vào giỏ hàng thành công')
        }

        fetchMyCart();
    }

    return { cart, isLoading: loading, handLeAddToCart, fetchMyCart }
}

export default useCart;