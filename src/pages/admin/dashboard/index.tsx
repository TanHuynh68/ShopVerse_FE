import { ChartAreaInteractive } from "@/pages/admin/dashboard/chart-area-interactive";
import { DataTable } from "@/pages/admin/dashboard/data-table/data-table";
import { SectionCards } from "@/components/layouts/admin-layout/section-cards";
import data3 from "./data2.json";
import { useEffect } from "react";
import { userColumn } from "./columns/user-column";
import { brandColumn } from "./columns/brand-column";
import { focusDocuments } from "./columns/focus-documents";
import { keyPersonal } from "./columns/key-personal";
import { useDashboardContext } from "@/hooks/useDashboardContext";

export default function Page() {
  const {
    dataTable,
    setDataTable,
    dashboardData,
    fetchDashboard,
    fetchUsers,
    fetchBrands,
  } = useDashboardContext();
  const values = { startDate: null, endDate: null }

  useEffect(() => {
    fetchDashboard(values);
  }, []);

  const handleSetDataTable = async (key: string) => {
    if (key === "outline") {
      const response = await fetchUsers();
      if (response) {
        setDataTable({
          data: response.data,
          column: userColumn,
          tab: key,
        });
      }
    } else if (key === "past-performance") {
      const response = await fetchBrands(values);
      if (response) {
        console.log("response: ", response);
        setDataTable({
          data: response.data,
          column: brandColumn,
          tab: key,
        });
      }
    } else if (key === "focus-documents") {
      setDataTable({
        data: data3,
        column: focusDocuments,
        tab: key,
      });
    } else if (key === "key-personnel") {
      setDataTable({
        data: data3,
        column: keyPersonal,
        tab: key,
      });
    }
  };

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards dashboardData={dashboardData} />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable
          setDataTable={handleSetDataTable}
          data={dataTable.data}
          columns={dataTable.column}
          tab={dataTable.tab}
        />
      </div>
    </div>
  );
}
