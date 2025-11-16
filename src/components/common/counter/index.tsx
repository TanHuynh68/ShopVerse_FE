import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface CountButtonProps {
  quantity: number;
  handle?: any;
}
const CountButton = ({ quantity, handle }: CountButtonProps) => {


  const handleMinus = (quantity: number) => {
    if (quantity != 1) {
      handle(quantity - 1);
    }
  };

  const handlePlus = (quantity: number) => {
    console.log('a')
    if (quantity ) {
      handle(quantity + 1);
    }
  };

  return (
    <div className="flex items-center">
      <Button
        variant={"outline"}
        className="rounded-none"
        disabled={quantity === 1}
        onClick={() => handleMinus(quantity)}
      >
        <Minus />
      </Button>
      <div className="w-[60px] flex justify-center items-center border-t border-b border-solid h-[36px]">
        {quantity}
      </div>
      <Button
        onClick={() => handlePlus(quantity)}
        variant={"outline"}
        className="rounded-none"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default CountButton;
