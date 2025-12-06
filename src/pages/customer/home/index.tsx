import { useEffect, useState } from "react";
import HomeCategories from "./categories";
import { Spinner } from "@/components/common/spinner";
import { CategoryService } from "@/services";
import { Cate } from "@/type/category.type";
import { HomeCarousel } from "./carousel";
import ProductsBestSellings from "./product-best-sellings";
import { useProduct } from "@/hooks";

const HomePage = () => {
  const { getCategories, loading } = CategoryService();
  const [cates, setCates] = useState<Cate[]>([]);
  const {productBestSellings, fetchProductBestSellings} = useProduct()

  useEffect(() => {
    fetchCates();
    fetchProductBestSellings()
  }, []);

  const fetchCates = async () => {
    const response = await getCategories();
    if (response) {
      setCates(response.data);
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
      <HomeCarousel/>
      <HomeCategories cates={cates} />
      <ProductsBestSellings products={productBestSellings}/>
    </div>
  );
};

export default HomePage;
