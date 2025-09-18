import { Brand } from "../../../../type/brand.type";
import { Checkbox } from "@/components/ui/checkbox";
import SubTitle from "@/components/sub-title";
import { useProductContext } from "@/hooks/useProductContext ";

interface BrandsProps {
  brands: Brand[];
}
const Brands = ({ brands }: BrandsProps) => {
  const { brandIds, setBrandIds } = useProductContext();


  const handleAddId = (checked: boolean | string, id: string) => {
    if (!brandIds.includes(id) && checked) {
      setBrandIds([...brandIds, id]);
    } else {
      setBrandIds(brandIds.filter((brandId) => brandId != id));
    }
  };

  return (
    <div className="">
      <SubTitle className="" title="Thương hiệu"></SubTitle>
      {brands.length === 0 ? (
        "Chưa có nhãn hàng nào"
      ) : (
        <>
          {brands.map((brand) => (
            <div className="flex gap-3 items-center">
              <Checkbox
                onCheckedChange={(checked) => handleAddId(checked, brand._id)}
              />{" "}
              {brand.name}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Brands;
