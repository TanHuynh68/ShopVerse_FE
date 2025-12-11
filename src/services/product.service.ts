import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { useCallback } from "react";
export interface getProductsValues {
  category_id: string;
  sort: "newest" | "oldest" | "highest" | "lowest" | "popular";
}
const ProductService = () => {
  const { callApi, loading, setIsLoading } = useApiService();

  const getProducts = useCallback(
    async (query: getProductsValues) => {
      try {
        const response = await callApi(
          HTTP_METHOD.GET,
          `products?category_id=${query.category_id}&sort=${query.sort}`
        );
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const getBestSellingProducts = useCallback(async () => {
    try {
      const response = await callApi(HTTP_METHOD.GET, "products/best-selling");
      return response;
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  }, [callApi]);

  const getProduct = useCallback(
    async (id: string) => {
      try {
        const response = await callApi(HTTP_METHOD.GET, `products/${id}`);
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  return {
    loading,
    setIsLoading,
    getProducts,
    getProduct,
    getBestSellingProducts,
  };
};

export default ProductService;
