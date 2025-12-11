import { ChartAreaInteractive } from "@/pages/admin/dashboard/chart-area-interactive";
import { DataTable } from "@/pages/admin/dashboard/data-table/data-table";
import { SectionCards } from "@/components/layouts/admin-layout/section-cards";
import data3 from "./data2.json";
import { useEffect } from "react";
import { userColumn } from "./columns/user/user-column";
import { brandColumn } from "./columns/brand-column";
import { focusDocuments } from "./columns/focus-documents";
import { productColumns } from "./columns/product/product-column";
import { useDashboardContext } from "@/hooks/api/useDashboardContext";

export default function Page() {
  const {
    dataTable,
    setDataTable,
    dashboardData,
    products,
    brands,
    users,
    fetchDashboard,
    fetchUsers,
    fetchBrands,
    fetchProducts,
  } = useDashboardContext();
  const values = { startDate: null, endDate: null };

  useEffect(() => {
    fetchDashboard(values);
    fetchProducts(values);
    fetchUsers();
    fetchBrands(values);
  }, []);

  useEffect(() => {
    if (dataTable.tab === "outline") {
      setDataTable({
        data: users,
        column: userColumn,
        tab: "outline",
      });
    }

    if (dataTable.tab === "past-performance") {
      setDataTable({
        data: brands,
        column: brandColumn,
        tab: "past-performance",
      });
    }

    if (dataTable.tab === "focus-documents") {
      setDataTable({
        data: data3,
        column: focusDocuments,
        tab: "focus-documents",
      });
    }

    if (dataTable.tab === "key-personnel") {
      setDataTable({
        data: products,
        column: productColumns,
        tab: "key-personnel",
      });
    }
  }, [products, users, brands]);

  const handleSetDataTable = async (key: string) => {
    if (key === "outline") {
      setDataTable({
        data: users,
        column: userColumn,
        tab: key,
      });
    } else if (key === "past-performance") {
      setDataTable({
        data: brands,
        column: brandColumn,
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
        data: products,
        column: productColumns,
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
