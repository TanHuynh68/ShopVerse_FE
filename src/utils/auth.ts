import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const isLoggedIn = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  if (userInfo && userInfo?.id != "") return true;
  return false;
};