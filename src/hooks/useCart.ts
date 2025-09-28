import CartService from "@/services/cart.service";
import { Cart } from "@/type/cart.type";
import { useEffect, useState } from "react";

const useCart = () => {
    const { getMyCart, loading } = CartService();
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

    return { cart, isLoading: loading }
}

export default useCart;