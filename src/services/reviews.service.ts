import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { buildQueryString } from "@/utils/helper";
import { useCallback } from "react";

export interface getReviewsByProductQuery{
    id: string;
    page: number;
    size: number;
}

export interface createReviewsValues{
    comment: string;
    rating: number;
    product: string // product id
}

const ReviewService = () => {
    const { callApi, loading, setIsLoading } = useApiService();

    const getReviewsByProduct = useCallback(
        async (query: getReviewsByProductQuery) => {
            try {
                const response = await callApi(HTTP_METHOD.GET, `reviews/product?${buildQueryString(query)}`);
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const createReviews = useCallback(
        async (values: createReviewsValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `reviews`, values);
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { loading, setIsLoading, getReviewsByProduct, createReviews };
};

export default ReviewService;
