interface ProductFilterBarProps {
  fetchProducts: any;
  category_id: string;
  products: any;
  setSort: any;
  sort: any;
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsGrid from "../products-grid";
import DataNotFound from "@/components/common/data-not-found";
import { getProductsValues } from "@/services/product.service";
import PaginationComponent from "@/components/common/pagination";
import { useProductContext } from "@/hooks/api/useProductContext ";

const ProductFilterBar = ({
  fetchProducts,
  category_id,
  products,
  setSort,
  sort,
}: ProductFilterBarProps) => {
  const { pagination, setPagination, totalPages, brandIds } = useProductContext();
  const handle = (query: getProductsValues) => {
    fetchProducts(query);
    setSort(query.sort);
  };
  return (
    <div>
      Sắp xếp theo
      <Tabs value={sort} onValueChange={(v: any) => setSort(v)}>
        <TabsList>
          <TabsTrigger
            value="popular"
            onClick={() =>
              handle({
                category_id,
                sort: "popular",
                page: pagination.page,
                size: pagination.size,
                brand_id: brandIds
              })
            }
          >
            Phổ biến
          </TabsTrigger>

          <TabsTrigger
            value="newest"
            onClick={() =>
              handle({
                category_id,
                sort: "newest",
                page: pagination.page,
                size: pagination.size,
                brand_id: brandIds
              })
            }
          >
            Mới nhất
          </TabsTrigger>

          <TabsTrigger
            value="oldest"
            onClick={() =>
              handle({
                category_id,
                sort: "oldest",
                page: pagination.page,
                size: pagination.size,
                brand_id: brandIds
              })
            }
          >
            Cũ nhất
          </TabsTrigger>

          <TabsTrigger
            value="lowest"
            onClick={() =>
              handle({
                category_id,
                sort: "lowest",
                page: pagination.page,
                size: pagination.size,
                brand_id: brandIds
              })
            }
          >
            Giá thấp đến cao
          </TabsTrigger>

          <TabsTrigger
            value="highest"
            onClick={() =>
              handle({
                category_id,
                sort: "highest",
                page: pagination.page,
                size: pagination.size,
                brand_id: brandIds
              })
            }
          >
            Giá cao đến thấp
          </TabsTrigger>
        </TabsList>

        {/* Content chung */}
        <TabsContent value={sort}>
          {products && products.length > 0 ? (
            <ProductsGrid products={products} />
          ) : (
            <div className="w-full">
              <DataNotFound />
            </div>
          )}
          <div className="mt-10">
            <PaginationComponent numberOfItems={`${products.length} sản phẩm`} totalPages={totalPages} pagination={pagination} setPagination={setPagination}/>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductFilterBar;
