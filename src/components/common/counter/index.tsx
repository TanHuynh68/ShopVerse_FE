import { Button } from "@/components/ui/button";
import { CartItem } from "@/type/cart.type";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface CountButtonProps {
  quantityProduct: number;
  handle?: any;
  item: CartItem | null;
  cartId?: string;
}
const CountButton = ({ quantityProduct, handle, item, cartId}: CountButtonProps) => {
  const [quantityNow, setQuantityNow] = useState<number>(quantityProduct)

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
        disabled={quantityNow === 1}
        onClick={() => handleMinus(quantityNow)}
      >
        <Minus />
      </Button>
      <div className="w-[60px] flex justify-center items-center border-t border-b border-solid h-[36px]">
        {quantityNow}
      </div>
      <Button
        onClick={() => handlePlus(quantityNow)}
        variant={"outline"}
        className="rounded-none"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default CountButton;
