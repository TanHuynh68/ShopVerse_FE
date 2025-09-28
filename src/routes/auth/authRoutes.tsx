
import LoginPage from "../../pages/auth/login";

export const authRoutes = [
  {
    path: "/auth/",
    children: [{ path: 'login', element: <LoginPage /> }],
  },
];
