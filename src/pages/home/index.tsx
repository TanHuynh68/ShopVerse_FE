import { useEffect, useState } from "react"
import HomeService from "./services"
import HomeCategories from "./categories";
import { Spinner } from "@/components/spinner";

const HomePage = () => {
  const {getCategories, loading} = HomeService()
  const [cates, setCates] = useState<Cate[]>([]);
  console.log('loading: ', loading)
  useEffect(()=>{
    fetchCates()
  }, [])

  const fetchCates = async()=>{
    const response = await getCategories()
    if(response){
      setCates(response)
    }
  }


  return (
    <div className="w-[1200px]">
        <Spinner show={true} size='small'/>
        <HomeCategories cates={cates}/>
    </div>
  )
}

export default HomePage