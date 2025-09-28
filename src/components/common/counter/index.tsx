import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
interface CountButtonProps {
  quantity: number;
  handle?: (values: any) => void;
}
const CountButton = ({ quantity }: CountButtonProps) => {
  const [number, setNumber] = useState<number>(quantity);

  const handleMinus = (number: number) => {
    if (number != 1) {
      setNumber(number - 1);
    }
  };

  const handlePlus = (number: number) => {
    if (number != 1) {
      setNumber(number + 1);
    }
  };

  return (
    <div className="flex items-center">
      <Button
        variant={"outline"}
        className="rounded-none"
        disabled={number === 1}
        onClick={() => handleMinus(number)}
      >
        <Minus />
      </Button>
      <div className="w-[60px] flex justify-center items-center border-t border-b border-solid h-[36px]">
        {number}
      </div>
      <Button
        onClick={() => handlePlus(number)}
        variant={"outline"}
        className="rounded-none"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default CountButton;
