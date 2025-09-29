import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { useCallback } from "react";
import { toast } from "sonner";

const OrderService = () => {
    const { callApi, loading } = useApiService();

    const createOrder = useCallback(
        async (cartId: string) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `orders`, {cartId: cartId});
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { createOrder, loading };
};

export default OrderService;
