import { Product } from "@/type/product.type";
import ImagePreview from "@/components/common/img-preview";

interface LeftSectionProps {
  className?: string;
  product: Product | null;
}

const LeftSection = ({ className, product }: LeftSectionProps) => {
  return (
    <div className={className}>
      {product && (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            {product?.images.map((img, index) => (
              <div className="mb-4" key={index}>
                <ImagePreview className="" alt={product.name} img={img} />
              </div>
            ))}
          </div>
         <div className="col-span-10">
           <ImagePreview
            className="w-full"
            alt={product?.name + ""}
            img={product?.images[0] + ""}
          />
         </div>
        </div>
      )}
    </div>
  );
};

export default LeftSection;
