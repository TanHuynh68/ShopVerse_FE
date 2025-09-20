import { Product } from "@/type/product.type";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface LeftSectionProps {
  className?: string;
  product: Product | null;
}

const LeftSection = ({ className, product }: LeftSectionProps) => {
  return (
    <div className={className}>
      <Dialog>
        <DialogTrigger>
          <img src={product?.images[0]} alt="ảnh" />
          <div className="grid grid-cols-5 gap-3 mt-2">
            {product?.images.map((img, index) => (
              <div key={index}>
                <img className="w-[85px] h-[85px]" src={img} alt={`ảnh ${index + 1}`} />
              </div>
            ))}
          </div>
        </DialogTrigger>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
};

export default LeftSection;
