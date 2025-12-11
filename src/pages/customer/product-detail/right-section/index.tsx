import { Button } from "@/components/ui/button";
import { Product } from "@/types/product.type";
import { formatVND } from "@/utils/format";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCartContext } from "@/hooks/api/useCartContext";
import Delivery from "./delivery";

interface RightSectionProps {
  className?: string;
  product: Product | null;
}

interface AddProductToCartProps {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}
const RightSection = ({ className, product }: RightSectionProps) => {
  const { handLeAddToCart, fetchMyCart } = useCartContext();

  const refetchMyCart = async (values: AddProductToCartProps) => {
    const response = await handLeAddToCart(values);
    if (response) {
      fetchMyCart();
    }
  };

  return (
    <div className={`${className} `}>
      <div className="text-lg font-semibold line-clamp-2">{product?.name}</div>
      <div className="flex gap-4 items-center">
        <div className="mt-2">{formatVND(product?.price || 0)}</div>
        <div className="flex gap-2 mt-2">
          <Button
            onClick={() =>
              refetchMyCart({
                productId: (product && product._id) || "",
                name: (product && product.name) || "",
                price: (product && product.price) || 0,
                quantity: 1,
              })
            }
            className="cursor-pointer"
            size={"lg"}
            variant={"outline"}
          >
            Thêm vào giỏ hàng
          </Button>
          {/* <Button className="cursor-pointer" size={"lg"} variant={"destructive"}>
          Mua ngay
        </Button> */}
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <div>
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-xs">CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div>{product?.brand_id.name}</div>
          <div>{product?.shop_id.email}</div>
        </div>
      </div>
      <Delivery />
    </div>
  );
};
export default RightSection;
