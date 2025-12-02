import { createContext, useContext, useEffect, useState } from "react";
import useDashboard from "./useDasboard";

import { outlineColumn } from "@/pages/admin/dashboard/comluns/outline-column";

interface useDasboardContextValues {
  dataTable: dataTableValues;
  setDataTable: any;
  fetchDashboard: any;
  dashboardData: any;
  users: any;
  fetchUsers: any;
}
const Context = createContext<useDasboardContextValues | undefined>(undefined);

interface dataTableValues {
  data: any;
  column: any;
  tab: string;
}

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { fetchDashboard, dashboardData, fetchUsers, users } = useDashboard();

  const [dataTable, setDataTable] = useState<dataTableValues>({
    data: users,
    column: outlineColumn,
    tab: "outline",
  });

  useEffect(() => {
    setDataTable({
      data: users,
      column: outlineColumn,
      tab: "outline",
    });
  }, [users]);
  const state: useDasboardContextValues = {
    dataTable,
    setDataTable,
    fetchDashboard,
    dashboardData,
    fetchUsers,
    users,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const useDasboardContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useDasboardContext must be used inside CartProvider");
  return context;
};
