import { AdminActivityPage, AdminDashboardPage, AdminMailPage, AdminMessagePage } from "@/pages";
import DashboardLayout from "@/components/layouts/admin-layout";
import { ADMIN_PATH } from "./adminPath";
import { DashboardProvider } from "@/hooks/api/useDashboardContext";
import { ProtectedRouteByRole } from "../authorization/protect";
import { ROLE } from "@/constants/enum";

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <DashboardProvider>
        <ProtectedRouteByRole allowedRoles={[ROLE.ADMIN]}>
          <DashboardLayout />
        </ProtectedRouteByRole>
      </DashboardProvider>
    ),
    children: [
      {
        path: ADMIN_PATH.ADMIN_ACTIVITY_LOG,
        element: <AdminActivityPage />,
      },
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
