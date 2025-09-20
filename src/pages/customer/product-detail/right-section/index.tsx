import { Button } from "@/components/ui/button";
import { Product } from "@/type/product.type";
import { formatVND } from "@/utils/format";

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
        <Button className="cursor-pointer" size={"lg"} variant={"outline"}>Thêm vào giỏ hàng</Button>
        <Button className="cursor-pointer" size={"lg"} variant={"destructive"}>Mua ngay</Button>
      </div>
    </div>
  );
};
export default RightSection;
