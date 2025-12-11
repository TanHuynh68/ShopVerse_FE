import { ProductService } from "@/services";
import { getProductsValues } from "@/services/product.service";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export interface paginationProducts {
  size: number;
  page: number;
}
// export interface totalPages{
//   totalPages: number
// }
const useProduct = () => {
  const { getProducts, getProduct, getBestSellingProducts, loading } =
    ProductService();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pagination, setPagination] = useState<paginationProducts>({
    size: 8,
    page: 1,
  });
  const [sort, setSort] = useState<
    "newest" | "popular" | "oldest" | "highest" | "lowest"
  >("popular");
  const [productBestSellings, setProductBestSellings] = useState<Product[]>([]);
  const [brandIds, setBrandIds] = useState<string[]>([]);
  //product detail
  const [product, setProduct] = useState<Product | null>(null);
  const { product_id } = useParams();

  // fetch product detail if have product_id
  useEffect(() => {
    fetchProduct();
  }, [product_id]);

  // fetch all product
  const fetchProducts = async (query: getProductsValues) => {
    const response = await getProducts(query);
    if (response) {
      setProducts(response.data);
      setTotalPages(response.totalPages);
    }
  };

  //fetch product detail
  const fetchProduct = async () => {
    if (product_id) {
      const response = await getProduct(product_id);
      if (response) {
        setProduct(response.data);
      }
    }
  };

  const fetchProductBestSellings = async () => {
    const response = await getBestSellingProducts();
    if (response) {
      setProductBestSellings(response.data);
    }
  };

  return {
    productLoading: loading,
    products: products,
    product,
    brandIds,
    productBestSellings,
    sort,
    pagination,
    totalPages,
    setBrandIds,
    fetchProducts,
    fetchProduct,
    fetchProductBestSellings,
    setSort,
    setPagination,
    setTotalPages,
  };
};

export default useProduct;
