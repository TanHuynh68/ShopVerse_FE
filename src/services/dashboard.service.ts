import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { useCallback } from "react";

export interface getDashboardValues {
    startDate: string | null;
    endDate: string | null;
}

const DashboardService = () => {
    const { callApi, loading, setIsLoading } = useApiService();

    const getDashboard = useCallback(
        async (values: getDashboardValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, 'dashboards', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getUsers = useCallback(
        async () => {
            try {
                const response = await callApi(HTTP_METHOD.GET, 'users');
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getOrders = useCallback(
        async (values: getDashboardValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, 'dashboards/orders', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getBrands = useCallback(
        async (values: getDashboardValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, 'dashboards/brands', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getTransactions = useCallback(
        async (values: getDashboardValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, 'dashboards/transactions', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getProducts = useCallback(
        async (values: getDashboardValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, 'dashboards/products', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    const getCategories = useCallback(
        async (values: getDashboardValues) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, 'dashboards/categories', values);
                return response;
            } catch (e: any) {
                console.log(e?.response?.data)
            }
        },
        [callApi]
    );

    return { loading, setIsLoading, getDashboard, getUsers, getOrders, getBrands, getTransactions, getProducts, getCategories };
};

export default DashboardService;
