import { useProduct } from "@/hooks";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import RelatedProducts from "./related-products";
import { useEffect } from "react";

const ProductDetailPage = () => {
  const { product, products, fetchProducts } = useProduct();
  useEffect(() => {
    if (product) {
      fetchProducts({ category_id: product.category_id._id, sort: "popular", page: 1, size: 5, brand_id: []});
    }
  }, [product]);
  return (
    <div>
      {product && (
        <div className="grid grid-cols-12 gap-10">
          <LeftSection product={product} className="col-span-7" />
          <RightSection product={product} className="col-span-5" />
        </div>
      )}
      {product && (
        <RelatedProducts
          products={products}
          category={product?.category_id._id}
        />
      )}
    </div>
  );
};

export default ProductDetailPage;
