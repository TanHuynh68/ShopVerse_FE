import { Link} from "react-router-dom";

interface HomeCategoriesProps {
  cates: Cate[];
}
const HomeCategories = ({ cates }: HomeCategoriesProps) => {
  return (
    <div className="">
      <div className="mt-2 font-semibold">Categories</div>
      <Link to={``}>
        <div className="grid grid-cols-10 mt-5">
          {cates.map((item) => (
            <div className="border border-solid h-[100px]">
              {/* img */}
              <div className="flex justify-center">
                <img src={item.img} alt="ảnh" className="h-[60px]"/>
              </div>
              <div className="text-center text-sm">{item.name}</div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default HomeCategories;
