import { Brand } from "../../../../types/brand.type";
import { Checkbox } from "@/components/ui/checkbox";
import SubTitle from "@/components/common/sub-title";
import { useProductContext } from "@/hooks/api/useProductContext ";

interface BrandsProps {
  brands: Brand[];
}
const Brands = ({ brands }: BrandsProps) => {
  const { brandIds,pagination, setBrandIds, setPagination, } = useProductContext();

  const handleAddId = (checked: boolean | string, id: string) => {
    if (!brandIds.includes(id) && checked) {
      setBrandIds([...brandIds, id]);
      setPagination({...pagination, page:1})
    } else {
      setBrandIds(brandIds.filter((brandId) => brandId != id));
    }
  };

  return (
    <div className="">
      <SubTitle className="" title="Thương hiệu"></SubTitle>
      {!brands ||  brands.length === 0 ? (
        "Chưa có nhãn hàng nào"
      ) : (
        <>
          {brands?.map((brand) => (
            <div className="flex gap-3 items-center">
              <Checkbox
                checked={brandIds.includes(brand._id)}
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
