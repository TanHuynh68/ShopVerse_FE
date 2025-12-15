import {
  ForgotPasswordPage,
  RegisterPage,
  ResetNewPasswordPage,
  VerifyPage,
} from "@/pages";
import LoginPage from "../../pages/auth/login";
import PublicRoute from "../authorization/public";
import { AuthenticationLayout } from "@/components/layouts";

export const authRoutes = [
  {
    path: "/auth/",
    element: (
      <PublicRoute>
        <AuthenticationLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "verify",
        element: <VerifyPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset-new-password",
        element: <ResetNewPasswordPage />,
      },
    ],
  },
];
