import { createBrowserRouter } from "react-router-dom";
// import { adminRoutes } from "./adminRoutes";
// import { userRoutes } from "./userRoutes";
// import { staffRoutes } from "./staffRoutes";

// import { errorRoutes } from "./errorRoutes";
import { guestRoutes } from "./guest/guestRoutes";
import { authRoutes } from "./auth/authRoutes";
// Kết hợp cả Admin & User routes
export const router = createBrowserRouter([
  // ...adminRoutes,
  // ...staffRoutes,
  // ...userRoutes ,
  ...authRoutes,
  // ...errorRoutes
  ...guestRoutes,
]);
