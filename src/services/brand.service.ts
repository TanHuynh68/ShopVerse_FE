import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { useCallback } from "react";
import { toast } from "sonner";

const BrandService = () => {
    const { callApi, loading, setIsLoading } = useApiService();

    const getBrandByCategoryId = useCallback(
        async (id: string) => {
            try {
                const response = await callApi(HTTP_METHOD.GET, `brands?category_id=${id}`);
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { getBrandByCategoryId, loading, setIsLoading, };
};

export default BrandService;
