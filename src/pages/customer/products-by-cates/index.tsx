import { useParams } from "react-router-dom";
import CategoriesBar from "./categories-bar";
import ProductByCateService from "./services/services";
import { useEffect, useState } from "react";
import { Brand } from "./type/brand";

const ProductsPage = () => {
  const { getBrandByCategoryId } = ProductByCateService();
  const { id } = useParams();
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    fetchBrandByCate();
  }, []);

  //fecth brand to filter for product
  const fetchBrandByCate = async () => {
    if (id) {
      const response = await getBrandByCategoryId(id);
      setBrands(response);
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <div className="w-[200px]">
          <CategoriesBar brands={brands} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
