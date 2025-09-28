import Title from "@/components/common/title";
import { Cate } from "@/type/category.type";
import { Link } from "react-router-dom";

interface HomeCategoriesProps {
  cates: Cate[];
}
const HomeCategories = ({ cates }: HomeCategoriesProps) => {
  console.log('HomeCategories: ', cates)
  return (
    <div className="">
      <Title title="Danh mục" className="mt-2" />
      <div className="grid grid-cols-10 mt-5">
        {cates.map((item) => (
          <Link to={`/${item._id}`} key={item._id}>
            <div className="border border-solid h-[150px] w-[120px]">
              {/* img */}
              <div className="flex justify-center">
                <img src={item.img} alt="ảnh" className="h-[80px] m-2" />
              </div>
              <div className="text-center text-sm">{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
