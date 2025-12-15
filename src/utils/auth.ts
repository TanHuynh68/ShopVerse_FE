import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const isLoggedIn = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  if (userInfo && userInfo?.account_id != "") return true;
  return false;
};

export const useCurrentUser = () => {
  const user = useSelector((store: any) => store.user);
  return user;
};