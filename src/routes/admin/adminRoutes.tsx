import { AdminDashboardPage, AdminMailPage, AdminMessagePage } from "@/pages";
import DashboardLayout from "@/components/layouts/admin-layout";
import { ADMIN_PATH } from "./adminPath";
import { DashboardProvider } from "@/hooks/api/useDashboardContext";

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <DashboardProvider>
        <DashboardLayout />
      </DashboardProvider>
    ),
    children: [
      {
        path: ADMIN_PATH.ADMIN_DASHBOARD,
        element: <AdminDashboardPage />,
      },
      {
        path: ADMIN_PATH.ADMIN_MESSAGES,
        element: <AdminMessagePage />,
      },
       {
        path: ADMIN_PATH.ADMIN_MAIL,
        element: <AdminMailPage />,
      },
    ],
  },
];
