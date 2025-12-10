import Title from "@/components/common/title";
import { Logs } from "lucide-react";
import { Brand } from "../../../../types/brand.type";
import Brands from "./brands";

interface CategoriesBarProps {
  brands: Brand[];
}
const CategoriesBar = ({ brands }: CategoriesBarProps) => {
  return (
    <div>
      {/* Title */}
      <div className="flex gap-2 ">
        <Logs />
        <Title title="Tất cả danh mục" className="cursor-pointer"/>
      </div>

      <div className="border-t border-solid my-2.5"></div>
      <div>
        <Brands brands={brands} />
      </div>
    </div>
  );
};

export default CategoriesBar;
