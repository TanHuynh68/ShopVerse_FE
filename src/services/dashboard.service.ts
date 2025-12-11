import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { ProductFormData } from "@/pages/admin/dashboard/columns/product/validation";
import { useCallback } from "react";

export interface getDashboardValues {
  startDate: string | null;
  endDate: string | null;
}

const DashboardService = () => {
  const { callApi, loading, setIsLoading } = useApiService();

   const getAdminProfile = useCallback(async () => {
    try {
      const response = await callApi(HTTP_METHOD.GET, `users/admin-profile`);
      return response;
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  }, [callApi]);

  const getDashboard = useCallback(
    async (values: getDashboardValues) => {
      try {
        const response = await callApi(HTTP_METHOD.POST, "dashboards", values);
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const getUsers = useCallback(async () => {
    try {
      const response = await callApi(HTTP_METHOD.GET, "users");
      return response;
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  }, [callApi]);

  const getOrders = useCallback(
    async (values: getDashboardValues) => {
      try {
        const response = await callApi(
          HTTP_METHOD.POST,
          "dashboards/orders",
          values
        );
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const getBrands = useCallback(
    async (values: getDashboardValues) => {
      try {
        const response = await callApi(
          HTTP_METHOD.POST,
          "dashboards/brands",
          values
        );
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const getTransactions = useCallback(
    async (values: getDashboardValues) => {
      try {
        const response = await callApi(
          HTTP_METHOD.POST,
          "dashboards/transactions",
          values
        );
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const getProducts = useCallback(
    async (values: getDashboardValues) => {
      try {
        const response = await callApi(
          HTTP_METHOD.POST,
          "dashboards/products",
          values
        );
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const getCategories = useCallback(
    async (values: getDashboardValues) => {
      try {
        const response = await callApi(
          HTTP_METHOD.POST,
          "dashboards/categories",
          values
        );
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const craeteProducts = useCallback(
    async (data: ProductFormData) => {
        console.log('craeteProducts:', data)
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("stock", data.stock.toString());
      formData.append("sku", data.sku);
      formData.append("price", data.price.toString());
      formData.append("category_id", data.category_id);
      formData.append("brand_id", data.brand_id);
      formData.append("discount", data.discount.toString());
      // append nhiều ảnh
      data.images.forEach((file) => {
        formData.append("images", file);
      });
      try {
        const response = await callApi(HTTP_METHOD.POST, "products", formData);
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  return {
    loading,
    craeteProducts,
    setIsLoading,
    getDashboard,
    getUsers,
    getOrders,
    getBrands,
    getTransactions,
    getProducts,
    getCategories,
    getAdminProfile
  };
};

export default DashboardService;
