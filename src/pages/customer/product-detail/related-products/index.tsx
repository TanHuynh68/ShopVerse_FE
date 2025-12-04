import Title from "@/components/common/title";
import { Product } from "@/type/product.type";
import ProductCard from "../../products-by-cates/products-grid/product-card";

interface RelatedProductsProps {
  products: Product[];
  category: string;
}

const RelatedProducts = ({ products, category }: RelatedProductsProps) => {
  return (
    <div>
      <Title title="Những sản phẩm liên quan" className="mt-10" />
      <div className="grid grid-cols-5 gap-10 mt-10">
        {products
          .filter((item) => item.category_id._id === category)
          .map((item) => (
            <div>
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
