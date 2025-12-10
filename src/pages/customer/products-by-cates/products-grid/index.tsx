import { Product } from "@/types/product.type";
import ProductCard from "./product-card";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  
  return (
    <div className="grid grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
