import { Product } from "@/type/product.type";
import { formatVND } from "@/utils/format";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="w-[240px] bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nature scene"
          />
          <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">{product.brand_id.name}</div>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
            {product?.name}
          </h2>
          <div className="flex items-center mb-4">
            <svg
              className="h-5 w-5 text-yellow-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-gray-600 ml-1">4.9</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">{formatVND(product.price)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
