import { RegisterPage, VerifyPage } from "@/pages";
import LoginPage from "../../pages/auth/login";

export const authRoutes = [
  {
    path: "/auth/",
    children: [{ path: "login", element: <LoginPage /> }],
  },
  {
    path: "/auth/",
    children: [{ path: "register", element: <RegisterPage /> }],
  },
   {
    path: "/auth/",
    children: [{ path: "verify", element: <VerifyPage /> }],
  },
];
