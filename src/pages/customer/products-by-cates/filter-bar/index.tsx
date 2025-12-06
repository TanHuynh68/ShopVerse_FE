interface ProductFilterBarProps {
  fetchProducts: any;
  category_id: string;
  products: any;
  setSort: any;
  sort: any
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsGrid from "../products-grid";
import DataNotFound from "@/components/common/data-not-found";
import { getProductsValues } from "@/services/product.service";

const ProductFilterBar = ({
  fetchProducts,
  category_id,
  products,
  setSort,
  sort
}: ProductFilterBarProps) => {
  

  const handle = (query: getProductsValues) => {
    fetchProducts(query);
    setSort(query.sort);
  };
  console.log('sort: ', sort)
  return (
    <div>
      Sắp xếp theo
      <Tabs value={sort} onValueChange={(v: any) => setSort(v)}>
        <TabsList>
          <TabsTrigger
            value="popular"
            onClick={() => handle({ category_id, sort: "popular" })}
          >
            Phổ biến
          </TabsTrigger>

          <TabsTrigger
            value="newest"
            onClick={() => handle({ category_id, sort: "newest" })}
          >
            Mới nhất
          </TabsTrigger>

          <TabsTrigger
            value="oldest"
            onClick={() => handle({ category_id, sort: "oldest" })}
          >
            Cũ nhất
          </TabsTrigger>

          <TabsTrigger
            value="lowest"
            onClick={() => handle({ category_id, sort: "lowest" })}
          >
            Giá thấp đến cao
          </TabsTrigger>

          <TabsTrigger
            value="highest"
            onClick={() => handle({ category_id, sort: "highest" })}
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductFilterBar;
