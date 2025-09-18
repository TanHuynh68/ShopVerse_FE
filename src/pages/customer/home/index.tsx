import { useEffect, useState } from "react";
import HomeService from "./services";
import HomeCategories from "./categories";
import { Spinner } from "@/components/spinner";

const HomePage = () => {
  const { getCategories, loading } = HomeService();
  const [cates, setCates] = useState<Cate[]>([]);
  console.log("loading: ", loading);
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
