import { useEffect, useState } from "react"
import HomeService from "./services"
import HomeCategories from "./categories";

const HomePage = () => {
  const {getCategories} = HomeService()
  const [cates, setCates] = useState<Cate[]>([]);

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
    <div>
        <HomeCategories cates={cates}/>
    </div>
  )
}

export default HomePage