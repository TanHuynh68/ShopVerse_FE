import { Brand } from "../type/brand";
import { Checkbox } from "@/components/ui/checkbox";
import SubTitle from "@/components/sub-title";

interface BrandsProps {
  brands: Brand[];
}
const Brands = ({ brands }: BrandsProps) => {
  return (
    <div className="">
      <SubTitle className="" title="Thương hiệu"></SubTitle>
      {brands.length === 0 ? (
        "Chưa có nhãn hàng nào"
      ) : (
        <>
          {brands.map((brand) => (
            <div className="flex gap-3 items-center">
              <Checkbox /> {brand.name}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Brands;
