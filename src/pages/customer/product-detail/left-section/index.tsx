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
        <div>
          <ImagePreview
            className="w-full"
            alt={product?.name + ""}
            img={product?.images[0] + ""}
          />
          <div className="grid grid-cols-5 gap-3 mt-2">
            {product?.images.map((img, index) => (
              <div key={index}>
                <ImagePreview alt={product.name} img={img} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSection;
