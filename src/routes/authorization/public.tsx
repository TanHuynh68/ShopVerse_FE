import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { ROLE } from "@/constants/enum";
import { ADMIN_PATH } from "../admin/adminPath";
import { GUEST_PATH } from "../guest/guestPath";

// import { toast } from "sonner";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  if (user && user.account_id) {
    switch (user.role) {
      case ROLE.CUSTOMER:
        return <Navigate to={GUEST_PATH.HOME} replace />;
      case ROLE.ADMIN:
        return <Navigate to={`/auth/${ADMIN_PATH.ADMIN_DASHBOARD}`} replace />;
    }
  }
  // chưa login thì vẫn render
  return children;
};

export default PublicRoute;
