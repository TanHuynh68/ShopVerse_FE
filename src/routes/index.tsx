import { createBrowserRouter } from "react-router-dom";
import { guestRoutes } from "./guest/guestRoutes";
import { authRoutes } from "./authentication/authRoutes";
import { customerRoutes } from "./customer/customerRoutes";
import { adminRoutes } from "./admin/adminRoutes";
import { errorRoutes } from "./error/errorRoutes";

export const router = createBrowserRouter([
  ...customerRoutes,
  ...authRoutes,
  ...guestRoutes,
  ...adminRoutes,
  ...errorRoutes
]);
