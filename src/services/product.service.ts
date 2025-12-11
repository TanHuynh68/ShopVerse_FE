import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { useCallback } from "react";
export interface getProductsValues {
  category_id: string;
  sort: "newest" | "oldest" | "highest" | "lowest" | "popular";
  page: number;
  size: number;
  brand_id: string[];
}
const ProductService = () => {
  const { callApi, loading, setIsLoading } = useApiService();

  const getProducts = useCallback(
    async (query: getProductsValues) => {
      let response;
      try {
        query.brand_id.length > 0
          ? (response = await callApi(
              HTTP_METHOD.GET,
              `products?category_id=${query.category_id}&sort=${query.sort}&page=${query.page}&size=${query.size}&brand_id=${query.brand_id}`
            ))
          : (response = await callApi(
              HTTP_METHOD.GET,
              `products?category_id=${query.category_id}&sort=${query.sort}&page=${query.page}&size=${query.size}`
            ));
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
