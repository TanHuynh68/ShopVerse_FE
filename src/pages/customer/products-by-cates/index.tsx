import { useNavigate, useParams } from "react-router-dom";
import CategoriesBar from "./categories-bar";
import { useEffect, useState } from "react";
import { Brand } from "../../../type/brand.type";
import { BrandService } from "@/services";

import ProductsGrid from "./products-grid";
import { useProductContext } from "@/hooks/useProductContext ";
import { Spinner } from "@/components/common/spinner";
import DataNotFound from "@/components/common/data-not-found";
import { USER_PATH } from "@/routes/guest/guestPath";

const ProductsPage = () => {
  const { getBrandByCategoryId, loading } = BrandService();
  const { id } = useParams();
  const [brands, setBrands] = useState<Brand[]>([]);
  const { products, productLoading } = useProductContext();
  const navigate = useNavigate();
  useEffect(() => {
    fetchBrandByCate();
  }, []);

  //fetch brand to filter for product
  const fetchBrandByCate = async () => {
    if (id) {
      const response = await getBrandByCategoryId(id);
      if (response) {
        setBrands(response.data);
      } else {
        navigate(USER_PATH.HOME);
      }
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
        {products && products.length > 0 ? (
          <ProductsGrid products={products} />
        ) : (
          <div className="w-full">
            <DataNotFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
