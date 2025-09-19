import { useProduct } from "@/hooks";
import LeftSection from "./left-section";
import RightSection from "./right-section";

const ProductDetailPage = () => {
  const {product} = useProduct()

  return (
    <div className="grid grid-cols-12">
      <LeftSection product={product} className="col-span-5" />
      <RightSection className="col-span-7"/>
    </div>
  );
};

export default ProductDetailPage;
