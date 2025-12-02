import { ChartAreaInteractive } from "@/pages/admin/dashboard/chart-area-interactive";
import { DataTable } from "@/pages/admin/dashboard/data-table/data-table";
import { SectionCards } from "@/pages/admin/dashboard/section-cards";
import data3 from "./data2.json";
import { useEffect } from "react";
import { outlineColumn } from "./comluns/outline-column";
import { pastPersonal } from "./comluns/past-performance";
import { focusDocuments } from "./comluns/focus-documents";
import { keyPersonal } from "./comluns/key-personal";
import { useDasboardContext } from "@/hooks/useDashboardContext";

export default function Page() {
  const {
    dataTable,
    setDataTable,
    dashboardData,
    fetchDashboard,
    fetchUsers,
  } = useDasboardContext();

  useEffect(() => {
    fetchDashboard({ startDate: null, endDate: null });
  }, []);


  const handleSetDataTable = async (key: string) => {
    console.log("key: ", key);
    console.log("dataTable: ", dataTable);
    if (key === "outline") {
      const response = await fetchUsers();     
      if (response) {
         console.log('response: ', response)
        setDataTable({
          data: response.data,
          column: outlineColumn,
          tab: key,
        });
      }
    } else if (key === "past-performance") {
      setDataTable({
        data: data3,
        column: pastPersonal,
        tab: key,
      });
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
