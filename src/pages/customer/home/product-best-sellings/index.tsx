import Title from "@/components/common/title"
import { Product } from "@/type/product.type"
import ProductCard from "../../products-by-cates/products-grid/product-card"

interface ProductsBestSellingsProps{
    products: Product[]
}
const ProductsBestSellings = ({products}: ProductsBestSellingsProps) => {
  return (
    <div>
      <Title title="Những sản phẩm bán chạy" className="mt-10"/>
      <div className="grid grid-cols-5 gap-10 mt-10">
        {
        products.map((item)=>(
            <div>
                <ProductCard product={item}/>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default ProductsBestSellings
