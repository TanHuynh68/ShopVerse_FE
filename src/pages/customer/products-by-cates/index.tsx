import { useNavigate, useParams } from "react-router-dom";
import CategoriesBar from "./brands-bar";
import { useEffect, useState } from "react";
import { Brand } from "../../../types/brand.type";
import { BrandService } from "@/services";
import { useProductContext } from "@/hooks/api/useProductContext ";
import { Spinner } from "@/components/common/spinner";
import { USER_PATH } from "@/routes/guest/guestPath";
import ProductFilterBar from "./filter-bar";

const ProductsPage = () => {
  const { getBrandByCategoryId, loading } = BrandService();
  const { id } = useParams();
  const [brands, setBrands] = useState<Brand[]>([]);
  const { products, sort, setSort, fetchProducts, productLoading } =
    useProductContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchBrandByCate();
    if (id) {
      fetchProducts({ category_id: id, sort: "popular" });
    }
  }, [id]);

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
        <div>
          {id && (
            <ProductFilterBar
              sort={sort}
              setSort={setSort}
              products={products}
              category_id={id}
              fetchProducts={fetchProducts}
            />
          )}
          <div className="mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
