import { ColumnDef } from "@tanstack/react-table";

import z from "zod";
import { IconCircleCheckFilled, IconLoader } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { formatDateMonthYearVN } from "@/utils/format";

export const userSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  isActive: z.boolean(),
  role: z.string(),
  createdAt: z.string(), // hoặc z.date() nếu parse thành Date
  updatedAt: z.string(), // hoặc z.date()
  isDeleted: z.boolean(),
});

export const outlineColumn: ColumnDef<z.infer<typeof userSchema>>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="w-full"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Họ và tên
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{row.original.name}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{row.original.email}</div>,
  },
  {
    accessorKey: "isActive",
    header: "Trạng thái",
    cell: ({ row }) => (
      <Badge  variant="outline" className="text-muted-foreground px-1.5 ">
        {row.original.isActive === true ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.isActive === true ? "Đã kích hoạt" : "Chưa kích hoạt"}
      </Badge>
    ),
  },
  {
    accessorKey: "role",
    header: "Vai trò",
    cell: ({ row }) => <div className="">{row.original.role}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày tạo
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{formatDateMonthYearVN(row.original.createdAt)}</div>,
  },
];
