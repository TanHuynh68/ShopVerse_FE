import { Button } from "@/components/ui/button";
import { Product } from "@/type/product.type";
import { formatVND } from "@/utils/format";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface RightSectionProps {
  className?: string;
  product: Product | null;
}

const RightSection = ({ className, product }: RightSectionProps) => {
  return (
    <div className={`${className} text-lg font-semibold`}>
      <div className="  line-clamp-2">{product?.name}</div>
      <div className="mt-2">{formatVND(product?.price || 0)}</div>
      <div className="flex gap-2 mt-2">
        <Button className="cursor-pointer" size={"lg"} variant={"outline"}>
          Thêm vào giỏ hàng
        </Button>
        <Button className="cursor-pointer" size={"lg"} variant={"destructive"}>
          Mua ngay
        </Button>
      </div>

      <div className="mt-5 flex gap-2">
        <div>
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-xs">CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div>
          {product?.brand_id.name}
        </div>
        <div>
          {product?.shop_id.email}
        </div>
        </div>
      </div>
    </div>
  );
};
export default RightSection;
