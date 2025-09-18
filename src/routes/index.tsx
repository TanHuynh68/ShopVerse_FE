import { createBrowserRouter } from "react-router-dom";
import { guestRoutes } from "./guest/guestRoutes";
import { authRoutes } from "./auth/authRoutes";
import { customerRoutes } from "./customer/customerRoutes";

export const router = createBrowserRouter([
  ...customerRoutes,
  ...authRoutes,
  ...guestRoutes,
]);
