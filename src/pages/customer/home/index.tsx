import { useEffect, useState } from "react";
import HomeCategories from "./categories";
import { Spinner } from "@/components/common/spinner";
import { CategoryService } from "@/services";
import { Cate } from "@/type/category.type";

const HomePage = () => {
  const { getCategories, loading } = CategoryService();
  const [cates, setCates] = useState<Cate[]>([]);

  useEffect(() => {
    fetchCates();
  }, []);

  const fetchCates = async () => {
    const response = await getCategories();
    if (response) {
      setCates(response);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Spinner show={true} size="medium" />
      </div>
    );
  }

  return (
    <div >
      <HomeCategories cates={cates} />
    </div>
  );
};

export default HomePage;
