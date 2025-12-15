import { useParams } from "react-router-dom";
import CategoriesBar from "./brands-bar";
import { useEffect, useState } from "react";
import { Brand } from "../../../types/brand.type";
import { BrandService } from "@/services";
import { useProductContext } from "@/hooks/api/useProductContext ";
import { Spinner } from "@/components/common/spinner";
import ProductFilterBar from "./filter-bar";

const ProductsPage = () => {
  const { getBrandByCategoryId, loading } = BrandService();
  const { id } = useParams();
  const [brands, setBrands] = useState<Brand[]>([]);
  const {
    products,
    sort,
    setSort,
    fetchProducts,
    productLoading,
    pagination,
    brandIds,
  } = useProductContext();

  useEffect(() => {
    fetchBrandByCate();
    if (id) {
      fetchProducts({
        category_id: id,
        sort: "popular",
        page: pagination.page,
        size: pagination.size,
        brand_id: brandIds,
      });
    }
  }, [id, pagination, brandIds]);

  //fetch brand to filter for product
  const fetchBrandByCate = async () => {
    if (id) {
      const response = await getBrandByCategoryId(id);
      if (response) {
        setBrands(response.data);
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
        {id && products.length > 0 ? (
          <div className="mb-5">
            <ProductFilterBar
              sort={sort}
              setSort={setSort}
              products={products}
              category_id={id}
              fetchProducts={fetchProducts}
            />
          </div>
        ) : (
          <div className="h-[80vh] w-full flex justify-center items-center">
            Chưa có sản phẩm nào.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
