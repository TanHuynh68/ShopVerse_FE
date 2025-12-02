import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { useCallback } from "react";

export interface getDashboardValues{
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

    const getUers = useCallback(
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

    return { loading, setIsLoading, getDashboard, getUers };
};

export default DashboardService;
