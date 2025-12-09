import { Product } from "@/type/product.type";
import { formatVND } from "@/utils/format";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="w-[240px] h-[446px] bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={product.images[0]}
            alt="ảnh sản phẩm"
          />
          <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
            {product.brand_id.name}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
            {product?.name}
          </h2>
          <div className="">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6188/6188775.png"
                alt=""
                width={30}
              />
              : {product.sold}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-800">
                {formatVND(product.price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
