"use client";

import type { Column, ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  Text,
} from "lucide-react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import * as React from "react";
import { DataTable } from "@/components/common/data-table/index.tsx";
import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header";
import { DataTableToolbar } from "@/components/common/data-table/data-table-toolbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDataTable } from "@/hooks/components/use-data-table";
import { Transaction } from "@/types/transaction";
import { formatVND } from "@/utils/format";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({
  transactions,
}: TransactionTableProps) {
  const [title] = useQueryState("title", parseAsString.withDefault(""));
  const [status] = useQueryState(
    "status",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  // Ideally we would filter the data server-side, but for the sake of this example, we'll filter the data client-side
  const filteredData = React.useMemo(() => {
    return transactions?.filter((transaction) => {
      const matchesTitle =
        title === "" ||
        transaction.orderId.items.some((item) =>
          item.name.toLowerCase().includes(title.toLowerCase())
        );
      const matchesStatus =
        status.length === 0 || status.includes(transaction.orderId.status);

      return matchesTitle && matchesStatus;
    });
  }, [title, status, transactions]);

  const columns = React.useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        size: 32,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "id",
        accessorKey: "_id",
        header: ({ column }: { column: Column<Transaction, unknown> }) => (
          <DataTableColumnHeader column={column} label="ID" />
        ),
        cell: ({ cell }) => <div>{cell.getValue<Transaction["_id"]>()}</div>,
        meta: {
          label: "ID",
          placeholder: "Search IDs...",
          variant: "text",
          icon: Text,
        },
        enableColumnFilter: true,
      },
      {
        id: "amount",
        accessorKey: "vnp_Amount",
        header: ({ column }: { column: Column<Transaction, unknown> }) => (
          <div className="w-full flex justify-center"   >
            <DataTableColumnHeader column={column} label="Số tiền" />
          </div>
        ),
        cell: ({ cell }) => {
          const amount = cell.getValue<number>();
          return (  
             formatVND(amount)
          );
        },
      },
      {
        id: "orderInfo",
        accessorKey: "vnp_OrderInfo",
        header: ({ column }: { column: Column<Transaction, unknown> }) => (
          <DataTableColumnHeader column={column} label="Ghi chú đơn hàng" />
        ),
        cell: ({ cell }) => <div>{cell.getValue<string>()}</div>,
        meta: {
          label: "Order Info",
          placeholder: "Search order info...",
          variant: "text",
          icon: Text,
        },
        enableColumnFilter: true,
      },
      {
        id: "createdAt",
        accessorKey: "createdAt",
        header: ({ column }: { column: Column<Transaction, unknown> }) => (
          <DataTableColumnHeader column={column} label="Ngày tạo" />
        ),
        cell: ({ cell }) => {
          const date = new Date(cell.getValue<string>());
          return <div>{date.toLocaleString()}</div>;
        },
      },
      {
        id: "actions",
        cell: function Cell() {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        size: 32,
      },
    ],
    []
  );

  const { table } = useDataTable({
    data: filteredData,
    columns,
    pageCount: 1,
    initialState: {
      sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"] },
    },
    getRowId: (row) => row._id,
  });

  return (
    <div className="data-table-container">
      <DataTable table={table}>
        <DataTableToolbar table={table} />
      </DataTable>
    </div>
  );
}
