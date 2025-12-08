import { createContext, useContext, useEffect, useState } from "react";
import useDashboard from "./useDasboard";

import { userColumn } from "@/pages/admin/dashboard/columns/user/user-column";
import { getDashboardValues } from "@/services/dashboard.service";

interface useDashboardContextValues {
  dataTable: dataTableValues;
  setDataTable: any;
  fetchDashboard: any;
  dashboardData: any;
  users: any;
  brands: any;
  fetchUsers: any;
  fetchBrands:  (values: getDashboardValues) => Promise<any>;
  fetchProducts: (values: getDashboardValues) => Promise<any>;
}
const Context = createContext<useDashboardContextValues | undefined>(undefined);

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
  const { users } = useDashboard();
  const useDashboardValues = useDashboard();
  const [dataTable, setDataTable] = useState<dataTableValues>({
    data: users,
    column: userColumn,
    tab: "outline",
  });

  useEffect(() => {
    setDataTable({
      data: users,
      column: userColumn,
      tab: "outline",
    });
  }, [users]);

  const state: useDashboardContextValues = {
    dataTable,
    setDataTable,
    ...useDashboardValues
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const useDashboardContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useDasboardContext must be used inside CartProvider");
  return context;
};
