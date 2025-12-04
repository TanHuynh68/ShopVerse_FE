import { useProduct } from "@/hooks";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import RelatedProducts from "./related-products";

const ProductDetailPage = () => {
  const { product, products } = useProduct();
  return (
    <div>
      {product && (
        <div className="grid grid-cols-12 gap-10">
          <LeftSection product={product} className="col-span-5" />
          <RightSection product={product} className="col-span-7" />
        </div>
      )}
      {product && (
        <RelatedProducts products={products} category={product?.category_id._id} />
      )}
    </div>
  );
};

export default ProductDetailPage;
