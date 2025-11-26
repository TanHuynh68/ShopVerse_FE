import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { createPaymentValues } from "@/hooks/usePayment";
import { useCallback } from "react";

const PaymentService = () => {
    const { callApi, loading, setIsLoading } = useApiService();

    const createPaymentVnPay = useCallback(
        async (values: createPaymentValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, '/payments/vnpay', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getProduct = useCallback(
        async (id: string) => {
            try {
                const response = await callApi(HTTP_METHOD.GET, `products/${id}`);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    return { loading, setIsLoading, createPaymentVnPay, getProduct };
};

export default PaymentService;
