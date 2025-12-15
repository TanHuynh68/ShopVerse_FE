
import { ReactNode } from "react";
import { Navigate} from "react-router-dom";
import ErrorPage from "@/pages/error";
import { useCurrentUser } from "@/utils/auth";
import { ROLE } from "@/constants/enum";


interface ProtectedRouteByRoleProps {
  children: ReactNode;
  allowedRoles: Array<ROLE.ADMIN | ROLE.CUSTOMER >; // Các vai trò cho phép
}

export const ProtectedRouteByRole: React.FC<ProtectedRouteByRoleProps> = ({
  children,
  allowedRoles,
}) => {
  const user = useCurrentUser();
  // if user is not logged in
  if (!user?.role || user?.role === "") {
    return <Navigate to={'/auth/login'} replace />;
  }
  if (!allowedRoles.includes(user.role)) {
    return <ErrorPage />;
  }
  return children;
};
