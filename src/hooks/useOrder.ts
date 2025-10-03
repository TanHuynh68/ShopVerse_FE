
import { OrderService } from "@/services";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCartContext } from "./useCartContext";

const useOrder = () => {
    const { createOrder, loading } = OrderService();
    const {fetchMyCart} = useCartContext()
    const navigate = useNavigate();

    const handleCreateOrder = async(cartId: string)=>{
        const response = await createOrder(cartId)
        if(response.status_code === 200){
            fetchMyCart()
            toast.success('Tạo đơn hành thành công')
            navigate('/orders')
        }
    }

    return { isLoading: loading, handleCreateOrder }
}

export default useOrder;