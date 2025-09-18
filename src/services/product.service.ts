import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { useCallback } from "react";

const ProductService = () => {
    const { callApi, loading, setIsLoading } = useApiService();

    const getProducts = useCallback(
        async () => {
            try {
                const response = await callApi(HTTP_METHOD.GET, 'products');
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    return { loading, setIsLoading, getProducts };
};

export default ProductService;
