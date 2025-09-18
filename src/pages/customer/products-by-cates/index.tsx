import { useParams } from "react-router-dom";
import CategoriesBar from "./categories-bar";
import { useEffect, useState } from "react";
import { Brand } from "../../../type/brand.type";
import { BrandService } from "@/services";
import { Spinner } from "@/components/spinner";
import ProductsGrid from "./products-grid";
import { useProductContext } from "@/hooks/useProductContext ";

const ProductsPage = () => {
  const { getBrandByCategoryId, loading } = BrandService();
  const { id } = useParams();
  const [brands, setBrands] = useState<Brand[]>([]);
  const { products, productLoading } = useProductContext();

  useEffect(() => {
    fetchBrandByCate();
  }, []);

  //fetch brand to filter for product
  const fetchBrandByCate = async () => {
    if (id) {
      const response = await getBrandByCategoryId(id);
      setBrands(response);
    }
  };

  if (loading || productLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Spinner show={true} size="medium" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <div className="w-[200px]">
          <CategoriesBar brands={brands} />
        </div>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
