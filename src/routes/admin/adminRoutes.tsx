import { AdminDasboard } from "@/pages";
import DashboardLayout from "@/components/layouts/admin-layout";
import { ADMIN_PATH } from "./adminPath";
import { DashboardProvider } from "@/hooks/useDashboardContext";

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        path: ADMIN_PATH.ADMIN_DASHBOARD,
        element: (
          <DashboardProvider>
            <AdminDasboard />
          </DashboardProvider>
        ),
      },
    ],
  },
];
