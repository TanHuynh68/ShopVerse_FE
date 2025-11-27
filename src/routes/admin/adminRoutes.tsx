import { AdminDasboard } from "@/pages";
import DashboardLayout from "@/components/layouts/admin-layout";
import { ADMIN_PATH } from "./adminPath";

export const adminRoutes = [
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: ADMIN_PATH.ADMIN_DASHBOARD,
        element: <AdminDasboard />,
      },
    ],
  },
];
