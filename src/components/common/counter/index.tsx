import { Button } from "@/components/ui/button";
import { CartItem } from "@/type/cart.type";
import { Minus, Plus } from "lucide-react";

interface CountButtonProps {
  handle?: any;
  item: CartItem | null;
  cartId?: string;
  isDisableCountQuantity?: boolean;
  quantityNow?: number;
  setQuantityNow?: any;
}
const CountButton = ({ quantityNow ,setQuantityNow,  handle, item, cartId, isDisableCountQuantity}: CountButtonProps) => {
 
  const handleMinus = (quan: number) => {
    if (quan) {
      setQuantityNow(quan-1)
      handle(cartId ,quan - 1, item && item.productId._id);
    }
  };

  const handlePlus = (quan: number) => {
    if (quan ) {
      setQuantityNow(quan+1)
      handle(cartId ,quan + 1, item &&  item.productId._id);
    }
  };

  return (
    <div className="flex items-center">
      <Button
        variant={"outline"}
        className="rounded-none"
        disabled={quantityNow === 1 || isDisableCountQuantity}
        onClick={() => handleMinus(quantityNow || 1)}
      >
        <Minus />
      </Button>
      <div className="w-[60px] flex justify-center items-center border-t border-b border-solid h-[36px]">
        {quantityNow}
      </div>
      <Button
        onClick={() => handlePlus(quantityNow || 1)}
        variant={"outline"}
        className="rounded-none"
        disabled={isDisableCountQuantity}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default CountButton;
