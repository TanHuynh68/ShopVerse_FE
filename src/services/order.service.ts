import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { useCallback } from "react";
import { toast } from "sonner";

const OrderService = () => {
    const { callApi, loading } = useApiService();

    const createOrder = useCallback(
        async (cartId: string) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `orders`, { cartId: cartId });
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const getMyOrders = useCallback(
        async () => {
            try {
                const response = await callApi(HTTP_METHOD.GET, `orders`);
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const getMyOrderDetail = useCallback(
        async (id: string) => {
            try {
                const response = await callApi(HTTP_METHOD.GET, `orders/${id}`);
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { createOrder, getMyOrders, getMyOrderDetail, loading };
};

export default OrderService;
