import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { useCallback } from "react";
import { toast } from "sonner";

const CategoryService = () => {
    const { callApi, loading, setIsLoading } = useApiService();

    const getCategories = useCallback(
        async () => {
            try {
                const response = await callApi(HTTP_METHOD.GET, 'categories');
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { loading, setIsLoading, getCategories };
};

export default CategoryService;
