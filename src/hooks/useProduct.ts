import { ProductService } from "@/services";
import { getProductsValues } from "@/services/product.service";
import { Product } from "@/type/product.type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProduct = () => {
  const { getProducts, getProduct, getBestSellingProducts, loading } = ProductService();
  const [products, setProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState<
    "newest" | "popular" | "oldest" | "highest" | "lowest"
  >("popular");
  const [productBestSellings, setProductBestSellings] = useState<Product[]>([]);
  const [brandIds, setBrandIds] = useState<string[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  //product detail
  const [product, setProduct] = useState<Product | null>(null);
  const { product_id } = useParams();

  // fetch product detail if have product_id
  useEffect(() => {
    fetchProduct();
  }, [product_id]);

  // filter product by brandId
  useEffect(() => {
    setFilterProducts(
      brandIds.length > 0
        ? products.filter((product) => brandIds.includes(product.brand_id._id))
        : products
    );
  }, [brandIds, products]);

  // fetch all product
  const fetchProducts = async (query: getProductsValues) => {
    const response = await getProducts(query);
    if (response) {
      setProducts(response.data);
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
    products: filterProducts,
    product,
    brandIds,
    productBestSellings,
    sort,
    setBrandIds,
    fetchProducts,
    fetchProduct,
    fetchProductBestSellings,
    setSort
  };
};

export default useProduct;
