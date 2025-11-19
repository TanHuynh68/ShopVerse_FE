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

    const getTotalPrice = useCallback(
        async (cartId: string) => {
            const valuesSubmit = {
                cartId: cartId
            }
            try {
                const response = await callApi(HTTP_METHOD.POST, `carts/caculate-total-price`, valuesSubmit);
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const updateQuantity = useCallback(
        async (cartId: string, quantity: string, itemID: string) => {
            const valuesSubmit = {
                cartId: cartId,
                quantity,
                itemID
            }
            console.log('valuesSubmit: ', valuesSubmit)
            try {
                const response = await callApi(HTTP_METHOD.PATCH, `carts/update-quantity`, {...valuesSubmit});
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { getMyCart, addItemIntoCart, getTotalPrice, updateQuantity, loading };
};

export default CartService;
