import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { useCallback } from "react";

export interface createTransactionValues{
    link: string;
}

const TransactionService = () => {
    
    const { callApi, loading, setIsLoading } = useApiService();

    const createTransaction = useCallback(
        async (values: createTransactionValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, '/transactions', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getMyTransactions = useCallback(
        async () => {
            try {
                const response = await callApi(HTTP_METHOD.GET, `transactions`);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    return { loading, setIsLoading, createTransaction, getMyTransactions };
};

export default TransactionService;
