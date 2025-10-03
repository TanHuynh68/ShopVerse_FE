import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { useCallback } from "react";
import { toast } from "sonner";

const CartService = () => {
    const { callApi, loading } = useApiService();

    const getMyCart = useCallback(
        async () => {
            try {
                const response = await callApi(HTTP_METHOD.GET, `carts/my-carts`);
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );
//
    const addItemIntoCart = useCallback(
        async (values: any) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `carts`, values);
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { getMyCart, addItemIntoCart, loading };
};

export default CartService;
