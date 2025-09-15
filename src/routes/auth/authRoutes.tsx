
import LoginPage from "../../pages/auth/login";
import { AUTH_PATH } from "./authPath";

export const authRoutes = [
  {
    path: "/auth/",
    children: [{ path: AUTH_PATH.LOGIN, element: <LoginPage /> }],
  },
];
